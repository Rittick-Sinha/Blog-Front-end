import React from 'react';
import Home from './Components/Home/Home';
import Blog from './/Components/Blog/Blog';
import Error from './/Components/Error/Error';
import Contact from './/Components/Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/*" element={<Error />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
