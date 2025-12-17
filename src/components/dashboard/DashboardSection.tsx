import ChartView from "./ChartView";
import Filters from "./Filters";

export default function DashboardSection() {
  return (
    <div>
      <Filters />
      <ChartView />
    </div>
  );
}
