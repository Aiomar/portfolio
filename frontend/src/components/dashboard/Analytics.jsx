import FecthAnalyticsApi from "../../apis/dashboard/FetchAnalyticsApi";
import AnalyticsCard from "./AnalyticsCard";

export default function Analytics() {
  //calling analytics fetch api component
  const [suggestions, projects] = FecthAnalyticsApi();
  return (
    <div className="h-screen w-full flex flex-row p-5">
      <AnalyticsCard title={"Portfolio Visits"} total={"none"} />
      <AnalyticsCard title={"Suggestions"} total={suggestions} />
      <AnalyticsCard title={"Projects"} total={projects} />
    </div>
  );
}
