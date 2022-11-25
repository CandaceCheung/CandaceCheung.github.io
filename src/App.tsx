import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <>
                    <nav>
                      <Link to="/">Home</Link>
                      
                    </nav>
                    <Routes>
                      <Route path="/" element={<Home/>} />
                      
                    </Routes>
                </>
            </BrowserRouter>
        </div>
    );
}

export default App;
