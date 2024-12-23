import { useState, useEffect } from "react";
export default function FecthAnalyticsApi() {
  //Suggestions Fetch API
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-8dam.onrender.com/suggestions")
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
    fetch("https://portfolio-8dam.onrender.com/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return[suggestions.length,projects.length];
}