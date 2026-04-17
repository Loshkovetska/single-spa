import "@e-commerce/ui-utils";
import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./global.css";
ChartJS.register(ArcElement, Tooltip, Legend);

type ChartDataProp = {
  data: ChartData<"doughnut", number[], number>;
};

export default function Root({ data }: ChartDataProp) {
  return (
    <section className="w-[40vw] h-[40vw] relative">
      <Doughnut
        data={data}
        className="absolute inset-0 size-full!"
      />
    </section>
  );
}
