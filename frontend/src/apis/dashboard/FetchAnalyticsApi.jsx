import { useState, useEffect } from "react";
export default function FecthAnalyticsApi() {
  //Suggestions Fetch API
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  //Projects Fetch API
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

  return[suggestions.length,projects.length];
}