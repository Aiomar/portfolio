import { useState, useEffect } from "react";

export default function FecthStackApi() {
  const [stacks, setStacks] = useState([]);

  //dashboard Tech Stack fetch API
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
