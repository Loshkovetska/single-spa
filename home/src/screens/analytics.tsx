import { DataTable, TableCell, TableRow } from "@e-commerce/ui-utils";
import {
  BaseRouteObject,
  Link,
  RouteObject,
  useLoaderData,
} from "react-router";

const MOCK_ANALYTICS = [
  {
    id: "1",
    title: "Google Merchant Center",
    conversion: 0.5,
    impressions: 10000,
  },
  {
    id: "2",
    title: "Facebook",
    conversion: 0.5,
    impressions: 10000,
  },
];

async function loader() {
  const data = await Promise.resolve(MOCK_ANALYTICS);

  return { data };
}

export function AnalyticsScreen() {
  const { data } = useLoaderData();
  return (
    <div className="border border-gray-modern-200 p-4 rounded-2xl bg-primary-light max-h-100 overflow-auto">
      <DataTable
        tableHeaders={{
          headers: ["ID", "Title", "Conversions", "Impressions", ""],
          thClassName: "p-4 pt-0 text-left",
        }}
      >
        {data?.map((item) => (
          <TableRow
            key={item}
            className="border-b last:border-none"
          >
            <TableCell className="p-4">{item.id}</TableCell>
            <TableCell className="p-4">{item.title}</TableCell>
            <TableCell className="p-4">{item.conversion}</TableCell>
            <TableCell className="p-4">{item.impressions}</TableCell>
            <TableCell className="p-4">
              <Link
                to={`/analytics/${item.id}`}
                className="hover:underline"
              >
                Visit
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
    </div>
  );
}

async function singleLoader({ params }) {
  return await Promise.resolve(MOCK_ANALYTICS.find((c) => c.id === params.id));
}

export const SingleAnalytic = () => {
  const { data } = useLoaderData();
  return (
    <div className="border border-gray-modern-200 p-4 rounded-2xl bg-primary-light max-h-100 overflow-auto flex flex-col gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div
          className="flex items-center justify-between"
          key={key}
        >
          <span className="text-paragraph-sm">{key}</span>
          <span className="text-label-base">{value}</span>
        </div>
      ))}
    </div>
  );
};

export const analyticRoute: BaseRouteObject & { children?: RouteObject[] } = {
  loader,
  Component: AnalyticsScreen,
  children: [{ path: ":id", Component: SingleAnalytic, loader: singleLoader }],
};
