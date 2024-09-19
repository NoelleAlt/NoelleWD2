import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Counter from './Components/Counter';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

  function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element= {<NotFound />}/>
        </Routes>
      </Router>
          );
        }


export default App