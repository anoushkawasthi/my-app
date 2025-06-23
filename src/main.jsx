import React from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import Header from "./header.jsx";
import Appy from "./Appy.jsx";

const App = () => {
  return (  
    <div>
      <Header />
      <Appy />
      </div>
  );
};  

// Render the React app
const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
