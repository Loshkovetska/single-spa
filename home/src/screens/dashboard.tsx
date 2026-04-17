import { Suspense } from "react";
import { BaseRouteObject, useLoaderData } from "react-router";
import Parcel from "single-spa-react/parcel";

async function loader() {
  const chartData = await Promise.resolve({
    labels: ["Income", "Outcome"],
    xLabels: [10, 20],
    yLabels: [100, 200],
    datasets: [
      {
        label: "Income",
        data: [5, 6, 7],
        backgroundColor: [
          "var(--color-primary-dark)",
          "var(--color-primary-lighter)",
          "var(--color-warning-dark)",
        ],
      },
      {
        label: "Outcome",
        data: [3, 2, 1],
        backgroundColor: [
          "var(--color-primary-dark)",
          "var(--color-primary-lighter)",
          "var(--color-warning-dark)",
        ],
      },
    ],
  });
  return {
    chartData,
  };
}
export function DashboardScreen() {
  const data = useLoaderData();
  console.log("data", data);
  return (
    <h1 className="text-2xl">
      Dashboard
      <Suspense fallback={<div>Loading...</div>}>
        <Parcel
          config={() => import("@e-commerce/analytics-chart")}
          data={data.chartData}
          handleError={(err) => console.error(err)}
        />
      </Suspense>
    </h1>
  );
}

export const dashboardRoute: BaseRouteObject = {
  loader,
  Component: DashboardScreen,
};
