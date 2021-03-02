import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMePage from "./components/pages/AboutMe";
import ProjectsPage from "./components/pages/Projects";
import ContactPage from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/">
              <AboutMePage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
