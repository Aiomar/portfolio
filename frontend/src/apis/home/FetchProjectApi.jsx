import {useState, useEffect} from "react";
export default function FetchProjectApi() {
    //Project fetch API
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/projects")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProjects(data);
        });
    }, []);

    return projects;
}