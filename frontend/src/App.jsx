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
    <Routes>
      <Route path="/" element={<Home />} />

      {/*Protected Dashboard Rotue */}
      <Route element={<ProtectedRoute />}>
        {/*Dashboard Route */}
        <Route path="/dashboard" element={<Dash />}>
          {/*Analytics and Status Route*/}
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/current-projects" element={<Projects />} />
          <Route path="/dashboard/suggestions" element={<Suggestions />} />
          <Route path="/dashboard/techstack" element={<MyStack />} />

          {/*Update and Upload routes */}
          <Route path="/dashboard/upload-project" element={<Upload />} />
          <Route path="/dashboard/update-techstack" element={<Stack />} />
        </Route>
      </Route>

      {/*Response Route */}
      <Route path="/pojectnothosted" element={<Response />} />

      {/*Auth Route */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
