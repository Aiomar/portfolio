import FecthAnalyticsApi from "../../apis/dashboard/FetchAnalyticsApi";
import AnalyticsCard from "./AnalyticsCard";

export default function Analytics() {
  //calling analytics fetch api component
  const [suggestions, projects] = FecthAnalyticsApi();
  return (
    <div className="h-screen w-full flex flex-row p-5">
      <AnalyticsCard title={"Visits"} total={"0"} />
      <AnalyticsCard title={"Suggestions"} total={suggestions} />
      <AnalyticsCard title={"Projects"} total={projects} />
    </div>
  );
}
