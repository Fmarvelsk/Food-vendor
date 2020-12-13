import React, {useEffect, createRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import './App.css';
import FoodMenu from './Components/FoodMenu';
import {useDispatch} from 'react-redux';
import {loadData} from "./store";
import Foodmenu from './Components/FoodMenu';
import axios from 'axios'

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
