import FecthStackApi from "../../apis/dashboard/FetchStackApi";
import Tech from "./Tech";
export default function MyStack() {
  const stacks = FecthStackApi();
  return (
    <div className="  mt-10 h-screen ml-8">
      <div className="grid grid-cols-5">
        {stacks.map((stack) => (
          <Tech
            key={stack._id}
            id={stack._id}
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
