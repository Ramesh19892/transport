import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Nopage from "./pages/Nopage";


const App = () => {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Nopage/>}/>
      </Route>
    </Routes>
    </>
  );
};

export default App;
