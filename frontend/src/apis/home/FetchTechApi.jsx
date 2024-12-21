import { useState, useEffect} from "react";


export default function FetchTechApi() {
  //tech stack fetch API
  const [stacks, setStacks] = useState([]);
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