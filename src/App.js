import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import About from "./components/about";
import Features from "./components/Features";
import WorkProcess from "./components/WorkProcess";


export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <WorkProcess />
      <Features />
      <Contact />
      <About />
      <Footer />

    </div>
  );
}
