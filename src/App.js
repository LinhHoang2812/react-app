import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  console.log("hello");
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
