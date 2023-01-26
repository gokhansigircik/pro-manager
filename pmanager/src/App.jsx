import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import { Navigate, Routes, Route } from "react-router-dom";
import ManagerDetail from "./pages/ManagerDetail";
import EditManager from "./pages/EditManager";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/managers" />} />
          <Route path="/managers" element={<Main />} />
          <Route path="/managers/:id" element={<ManagerDetail />} />
          <Route path="/managers/:id/edit" element={<EditManager />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
