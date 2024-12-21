import { useState, useEffect } from "react";

export default function FecthStackApi() {
  const [stacks, setStacks] = useState([]);

  //dashboard Tech Stack fetch API
  useEffect(() => {
    fetch("http://localhost:3000/techstack")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStacks(data);
      });
  }, []);

  return stacks;
}
