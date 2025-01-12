import "./App.css";
import Navigation from "./src/components/Navigation/Navigation.tsx";
import NavigationDots from "./src/components/Navigation/NavigationDots.jsx";
import Home from "./src/components/pages/Home.jsx";
import About from "./src/components/pages/About.tsx";
import ProjectGrid from "./src/components/pages/projects/ProjectGrid.jsx";
import Skills from "./src/components/pages/Skills.jsx";
import Contact from "./src/components/pages/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <NavigationDots />
      <Home />
      <About />
      <ProjectGrid />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
