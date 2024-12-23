import { useState, useEffect } from "react";

export default function FetchSuggestionApi() {
  const [suggestions, setSuggestions] = useState([]);

  //Suggestion fetch API
  useEffect(() => {
    fetch("https://portfolio-8dam.onrender.com/suggestions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  return suggestions;
}
