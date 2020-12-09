import React, {useEffect, createRef} from 'react';
//import { BrowserRouter as Route, Router, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import './App.css';

function App() {
  const wrapper = createRef()
  useEffect(() => {
    // eslint-disable-next-line
      const node = wrapper.current
  })
 
  return (
   <div ref={wrapper}>
  
    <Navbar/>
     <Header/>
     <Landing/>
     <Footer/>
   </div>
    );
}

export default App;
