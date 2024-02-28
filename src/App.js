import './global.scss';
import Hero from './parts/hero';
import Layout from './parts/layout';
import Resume from './parts/resume';
import Works from './parts/works';
import TimeLine from './parts/timeline';

function App() {

  return (
    <div className="App">
      <Layout>
        <Hero />
        <Resume />
        <Works />
        <TimeLine />
      </Layout>
    </div>
  );
}

export default App;
