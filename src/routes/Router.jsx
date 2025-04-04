import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Accomodation from "../pages/Accomodation";
import Errors from "../pages/Error";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AppRouter() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="*" element={<Errors />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default AppRouter;
