import './global.scss';
import Hero from './parts/hero';
import Layout from './parts/layout';
import Resume from './parts/resume';
import Works from './parts/works';
import TimeLine from './parts/timeline';
import { useEffect, useState } from 'react';

function App() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) {
    return null;
  }

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
