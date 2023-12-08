import { useEffect } from 'react';
import './sass/application.scss';
import HeroComponent from './parts/hero';
import Layout from './parts/layout';
import Resume from './parts/resume';
import Works from './parts/works';
import TimeLine from './parts/timeline';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
