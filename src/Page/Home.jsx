import About from "../Components/About";
import Footer from "../Components/common/Footer";
import Navbar from "../Components/common/Navbar";
import Contact from "../Components/Contact";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Dashboard from "./Dashboard";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      {/* <Testimonials /> */}





      
      <Contact />
      <Footer />
    </>
  );
};

export default Home;