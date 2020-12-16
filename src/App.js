import React, {useEffect, createRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import NavBus from './Components/NavBus'
import './App.css';
import FoodMenu from './Components/FoodMenu';
import {useDispatch} from 'react-redux';
import {loadData} from "./store";
import Order from './Components/Order'
import Foodmenu from './Components/FoodMenu';
import SignupBuss from './Components/SignupBusiness'
import axios from 'axios'
import AuthPage from './Components/AuthPage'
import BusinessLanding from './Components/BusinessLandingPage';
function App() {
  const wrapper = createRef()
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-next-line
      const node = wrapper.current
      const FoodMenuDB = async () => {
        const FoodFetch = await axios({
          method : 'GET',
          url: 'https://jsonplaceholder.typicode.com/posts'
        }).then( result => dispatch(loadData(result)))
        .catch(err => console.log(err))
      }
      FoodMenuDB()
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
     <AuthPage/>
     </Route>
     <Route exact path="/home">
       <FoodMenu/>
       <Footer/>
     </Route>
     <Route exact path="/merchant">
     <NavBus/>
       <BusinessLanding/>
     </Route>
     <Route exact path="/merchant/signup">
     <NavBus/>
       <SignupBuss/>
     </Route>
  <Route exact path="/orders">
    <Order/>
    <Footer/>
  </Route>
     </Switch>
     

</Router>
     
   </div>
    );
}
export default App;
