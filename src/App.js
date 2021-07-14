import React from 'react'
import Navigation from './components/header/Navigation';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

const App =()=>{

  return (
      <>
        <Navigation/>
        <Home/>
        <Footer/>
      </>
  );
}

export default App;
