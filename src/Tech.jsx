import Frame from "./Frame";
import Prog from "./Prog";

function Tech() {
  return (
    <section
      id="TechStack"
      className="flex flex-col justify-center items-center bg-slate-950 w-full h-screen"
    >
      <h5 className="mb-10 text-5xl font-bold tracking-tight text-sky-500">
        💻Tech Stack
      </h5>
      <div className="flex flex-row justify-center ">
        <Prog />
        <Frame />
      </div>
    </section>
  );
}

export default Tech;
