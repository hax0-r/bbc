import './App.css'
import Home from './pages/Home'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Router from './Router/Router';
import Navbar from './components/Navbar';

function App() {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Navbar />
      <Router />
    </>
  )
}

export default App
