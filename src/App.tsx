

import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";

import About from "./components/sections/About/About";
import Hero from "./components/sections/Hero/Hero";
import Services from "./components/sections/Services/Services";
import Gallery from "./components/sections/Gallery/Gallery";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import Contact from "./components/sections/Contact/Contact";


function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;