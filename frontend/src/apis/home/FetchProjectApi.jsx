import { useState, useEffect } from "react";
export default function FetchProjectApi() {
  //Project fetch API
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-8dam.onrender.com/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return projects;
}
