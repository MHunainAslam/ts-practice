import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Product />
    </>
  );
}

export default App;
