import FecthProjectsApi from "../../apis/dashboard/FetchProjectsApi";
import Project from "../dashboard/Project";
export default function Projects() {
  //Calling fetch Api component
  const projects = FecthProjectsApi();
  return (
    <div className="w-full min-h-screen max-h-auto">
      <div className="grid grid-cols-3">
        {projects.map((project) => (
          <Project
            key={project._id}
            id={project._id}
            image={project.image}
            title={project.title}
            details={project.details}
            status={project.status}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
