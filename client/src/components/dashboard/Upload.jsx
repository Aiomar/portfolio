//react
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//components
import Form from "./Form";

export default function Upload() {
  //retrieve the id from the location state
  const location = useLocation();
  const id = location.state?.id;

  const [action, setAction] = useState("");
  const [method, setMethod] = useState("");

  //verifiy if the user is updating a project or uploading a new one
  useEffect(() => {
    if (id) {
      setAction(`https://portfolio-8dam.onrender.com/project/${id}`);
      setMethod("PATCH");
    } else {
      setAction("https://portfolio-8dam.onrender.com/upload-project");
      setMethod("POST");
    }
  }, [id]);

  return (
    <>
      <Form action={action} method={method} />
    </>
  );
}
