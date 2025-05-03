import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Dash from "./components/dashboard/Dash";
import Projects from "./components/dashboard/Projects";
import Suggestions from "./components/dashboard/Suggestions";
import Analytics from "./components/dashboard/Analytics";
import Upload from "./components/dashboard/Upload";
import Stack from "./components/dashboard/Stack";
import MyStack from "./components/dashboard/MyStack";
import Response from "./components/Response";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
