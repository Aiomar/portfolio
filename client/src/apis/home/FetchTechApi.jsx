import { useState, useEffect } from "react";

export default function FetchTechApi() {
  //tech stack fetch API
  const [stacks, setStacks] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-8dam.onrender.com/techstack")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStacks(data);
      });
  }, []);

  return stacks;
}
