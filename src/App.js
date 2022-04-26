import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
          
               <p> <Link to="/">Home</Link></p>
              
               <p><Link to="/about">About Us</Link></p>
              
               <p> <Link to="/contact">Contact Us</Link> </p>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;
