import { useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import Navigation from "./components/Navigation/Navigation";


function App() {
  return (
    <>
      <Header/>
      <main>
      <Navigation/>
          
       <Catalog/>
        
      </main>
      <footer></footer>
    </>
  );
}

export default App;
