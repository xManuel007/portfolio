import './sass/application.scss';
import HeroComponent from './parts/hero';
import Layout from './parts/layout';
import Resume from './parts/resume';
import Works from './parts/works';
import TimeLine from './parts/timeline';

function App() {

  return (
    <div className="App">
      <Layout>
        <HeroComponent />
        <Resume />
        <Works />
        <TimeLine />
      </Layout>
    </div>
  );
}

export default App;
