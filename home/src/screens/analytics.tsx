import { Button, DataTable, TableCell, TableRow } from "@e-commerce/ui-utils";
import {
  BaseRouteObject,
  Link,
  RouteObject,
  useLoaderData,
  useNavigate,
} from "react-router";

const MOCK_ANALYTICS = [
  {
    id: "1",
    title: "Google Merchant Center",
    conversion: 0.5,
    impressions: 10000,
    details: {
      lastActivity: new Date(),
      totalProducts: 200,
    },
  },
  {
    id: "2",
    title: "Facebook",
    conversion: 0.5,
    impressions: 10000,
    details: {
      lastActivity: new Date(),
      totalProducts: 200,
    },
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
        tHeaders={[
          { children: "ID", className: "p-4 pt-0 text-left" },
          { children: "Title", className: "p-4 pt-0 text-left" },
          { children: "Conversions", className: "p-4 pt-0 text-left" },
          { children: "Impressions", className: "p-4 pt-0 text-left" },
          { children: "", className: "p-4 pt-0 text-left" },
        ]}
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
  const data = await Promise.resolve(
    MOCK_ANALYTICS.find((c) => c.id === params.id),
  );
  return { data, id: params.id };
}

export const SingleAnalytic = () => {
  const { data, id } = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <Button
        className="w-fit"
        variant="link"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div className="border border-gray-modern-200 p-4 rounded-2xl bg-primary-light max-h-100 overflow-auto flex flex-col gap-4">
        {Object.entries(data).map(([key, value]) => (
          <Link
            to={`/analytics/${id}/details`}
            className="flex items-center justify-between"
            key={key}
          >
            <span className="text-paragraph-sm">{key}</span>
            <span className="text-label-base">
              {typeof value === "object" ? JSON.stringify(value) : value}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

async function detailsLoader({ params }) {
  const { id } = params;
  const data = await Promise.resolve(
    MOCK_ANALYTICS.find((c) => c.id === id)?.details,
  );
  return { data };
}

export const SingleAnalyticDetails = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <Button
        className="w-fit"
        variant="link"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div className="border border-gray-modern-200 p-4 rounded-2xl bg-primary-light max-h-100 overflow-auto flex flex-col gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div
            className="flex items-center justify-between"
            key={key}
          >
            <span className="text-paragraph-sm">{key}</span>
            <span className="text-label-base">
              {typeof value === "object" ? JSON.stringify(value) : value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const analyticRoute: BaseRouteObject & { children?: RouteObject[] } = {
  path: "/analytics",
  children: [
    { index: true, Component: AnalyticsScreen, loader: loader },
    {
      path: ":id",
      children: [
        {
          index: true,
          Component: SingleAnalytic,
          loader: singleLoader,
        },
        {
          path: "details",
          Component: SingleAnalyticDetails,
          loader: detailsLoader,
        },
      ],
    },
  ],
  ErrorBoundary: () => {
    return <div>failed to fetch</div>;
  },
};
