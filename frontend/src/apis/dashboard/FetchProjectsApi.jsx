import { useState, useEffect } from "react";

export default function FecthProjectsApi() {
    const [projects, setProjects] = useState([]);
   
    //projects fetch api
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