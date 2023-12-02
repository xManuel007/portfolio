import './sass/application.scss';
import AboutMe from './components/about_me';
import Projects from './components/projects';
import RoadMap from './components/roadmap';
import HeroComponent from './components/hero';
import Layout from './components/layout';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Layout>
        <HeroComponent />
        <Resume />
        <AboutMe />
        <Projects />
        <RoadMap />
      </Layout>
    </div>
  );
}

export default App;
