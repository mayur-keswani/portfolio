import React from 'react'
import Navigation from './components/header/Navigation';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/skills/Skills';

const App =()=>{

  return (
      <>
        <Navigation/>
        <Home/>
        <Skills/>
        <Footer/>
      </>
  );
}

export default App;
