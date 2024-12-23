import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TechStackForm from "./TechStackForm";

export default function Stack() {
  const location = useLocation();
  const id = location.state?.id;

  const [action, setAction] = useState("");
  const [method, setMethod] = useState("");

  //verifiy if the user uploading or updating an item in tech stack
  useEffect(() => {
    if (id) {
      setAction(`https://portfolio-8dam.onrender.com/techstack/${id}`);
      setMethod("PATCH");
    } else {
      setAction("https://portfolio-8dam.onrender.com/techstack");
      setMethod("POST");
    }
  }, [id]);

  return (
    <>
      <TechStackForm action={action} method={method} />
    </>
  );
}
