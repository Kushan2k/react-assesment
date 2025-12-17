import ChartView from "./ChartView";
import Filters from "./Filters";

export default function DashboardSection() {
  return (
    <div className="grid grid-cols-10 items-center justify-center gap-5 p-5 ">
      <div className="col-span-4">
        <Filters />
      </div>
      <div className="col-span-6">
        <ChartView />
      </div>
    </div>
  );
}
