import FecthProjectsApi from "../../apis/dashboard/FetchProjectsApi";
import Project from "../dashboard/Project";
export default function Projects() {
  //fetch project using FecthProjectsApi
  const projects = FecthProjectsApi();
  return (
    <div className="min-h-screen max-h-auto ml-8">
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
