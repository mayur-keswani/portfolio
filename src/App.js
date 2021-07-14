import React from 'react'
import Navigation from './components/header/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home';
const App =()=>{

  return (
      <>
        <Navigation/>
        <Home/>
      </>
  );
}

export default App;
