import React, {useEffect, createRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import './App.css';
import Foodnav from './Components/FoodNav';

function App() {
  const wrapper = createRef()
  useEffect(() => {
    // eslint-disable-next-line
      const node = wrapper.current
  })
 
  return (
   <div ref={wrapper}>

<Router>
  <Switch>
  <Route exact path="/">
    <Navbar/>
     <Header/>
     <Landing/>
     <Footer/>
     </Route>
     <Route path="/home">
       <Foodnav/>
     </Route>
     </Switch>
</Router>
     
   </div>
    );
}

export default App;
