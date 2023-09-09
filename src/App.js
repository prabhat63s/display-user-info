import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home"
import Create from "./component/Create"
import Update from "./component/Update"
import Read from "./component/Read"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/create" element={ <Create /> } />
            <Route path="/update/:id" element={ <Update /> } />
            <Route path="/read/:id" element={ <Read /> } />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
