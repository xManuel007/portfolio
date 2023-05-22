import './sass/application.scss';
import Header from './components/header';
import AboutMe from './components/about_me';
import Projects from './components/projects';
import RoadMap from './components/roadmap';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
