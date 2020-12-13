import React, {useEffect, createRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import './App.css';
import FoodMenu from './Components/FoodMenu';

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
       <FoodMenu/>
       <Footer/>
     </Route>
     </Switch>
</Router>
     
   </div>
    );
}

export default App;
