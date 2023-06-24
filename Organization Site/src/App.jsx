import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import TurbinePage from './pages/ProjectPages/TurbinePage';
import CarPage from './pages/ProjectPages/AutoSagePage';
import WinePage from './pages/ProjectPages/WinePage';
import CTA from "./pages/LetsChatPage/CTA";

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/turbine" element={<TurbinePage />} />
        <Route path="/car" element={<CarPage />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path="/contact" element={<CTA />} />
      </Routes>
    </>
  );
}

export default App;
