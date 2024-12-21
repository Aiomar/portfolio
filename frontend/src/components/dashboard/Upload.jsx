//react
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//components
import Form from "./Form";

export default function Upload() {
  //retrieve the id from the location state
  const location = useLocation();
  const id = location.state?.id;
  console.log("id : ", id); //!debug

  const [action, setAction] = useState("");
  const [method, setMethod] = useState("");

  //verifiy if the user is updating a project
  useEffect(() => {
    if (id) {
      setAction(`http://localhost:3000/project/${id}`);
      setMethod("PATCH");
    } else {
      setAction("http://localhost:3000/upload-project");
      setMethod("POST");
    }
  }, [id]);
  console.log("Action URL:", action); //! Debug
  console.log("Method:", method); //! Debug

  return (
    <>
      <Form action={action} method={method} />
    </>
  );
}
