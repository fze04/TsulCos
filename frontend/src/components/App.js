import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Products from "./Products";
import Connect from "./Form/Connect";
import Formsignup from "./Form/Formsignup";
import Formsignin from "./Form/Formsignin";


function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/components/form/connect" element={<Connect />} />
        <Route path="/components/form/formsignup" element={<Formsignup />} />
        <Route path="/components/form/formsignin" element={<Formsignin />} />
      </Routes>
      
      <Footer />
    
    </div>
  );
}

export default App;
