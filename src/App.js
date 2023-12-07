import './sass/application.scss';
import RoadMap from './parts/roadmap';
import HeroComponent from './parts/hero';
import Layout from './parts/layout';
import Resume from './parts/resume';
import Works from './parts/works';

function App() {
  return (
    <div className="App">
      <Layout>
        <HeroComponent />
        <Resume />
        <Works />
        <RoadMap />
      </Layout>
    </div>
  );
}

export default App;
