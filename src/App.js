import "./App.css";
import Navigation from "./components/Navigation/Navigation.tsx";
import NavigationDots from "./components/Navigation/NavigationDots.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.tsx";
import Pavoot from "./components/pages/Pavoot.jsx";
import ProjectGrid from "./components/pages/projects/ProjectGrid.jsx";
import Skills from "./components/pages/Skills.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {
  return (
    <div className="App">
      <NavigationDots />
      <Navigation />
      <Home />
      <About />
      <Pavoot />
      <ProjectGrid />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
