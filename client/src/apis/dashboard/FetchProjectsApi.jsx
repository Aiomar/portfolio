import { useState, useEffect } from "react";

export default function FecthProjectsApi() {
    const [projects, setProjects] = useState([]);
   
    //projects fetch api
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