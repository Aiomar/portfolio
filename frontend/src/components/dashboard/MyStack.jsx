import FecthStackApi from "../../apis/dashboard/FetchStackApi";
import Tech from "./Tech";
export default function MyStack() {
  const stacks = FecthStackApi();
  return (
    <div className="w-full  mt-10 h-screen">
      <div className="grid grid-cols-6">
        {stacks.map((stack) => (
          <Tech
            key={stack.id}
            link={stack.link}
            logo={stack.logo}
            title={stack.title}
            type={stack.type}
          />
        ))}
      </div>
    </div>
  );
}
