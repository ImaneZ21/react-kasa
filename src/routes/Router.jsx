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
          <div className="page-wrapper">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<Errors />} />
        </Routes>
        </main>
        <Footer />
        </div>
      </Router>
  );
}

export default AppRouter;
