import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Faculty from "./pages/Faculty";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Students from "./pages/students";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academic" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
