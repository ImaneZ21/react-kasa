import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Errors from "../pages/Errors";
import Header from "../components/Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;