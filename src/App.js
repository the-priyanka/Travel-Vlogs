import "./App.css";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Footer from "./pages/FooterPage";
import Home from "./pages/HomePage";
// import Life from "./pages/LifePage";
import Navbar from "./pages/NavbarPage";
import SocialIcons from "./pages/SocialIcons";
import Vlog from "./pages/VlogPage";

function App() {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <Home />
      <About />
      <Vlog />
      {/* <Life /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
