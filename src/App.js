import React from 'react';
import Header from './Components/Header';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Homeleft from './Containers/Homeleft';
import Homeright from './Containers/Homeright';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './Containers/Home.css'


function App() {
  return (
    <BrowserRouter>
    <div>
     <Header/>

     <Switch>
       
     <Route path = "/" exact component = { Home } />
     <Route path = "/About" component= { About } />
     <Route path ="/Contact" component = { Contact } />
     </Switch>
    </div>
    </BrowserRouter>
  );
}


// To show the home page all the time
const Home = () => {
  return (
      <div className="home">
   
          <Homeleft/>    
          <Homeright/>
     
      </div>
  )
}

export default App;
