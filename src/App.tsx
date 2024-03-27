import { Outlet } from "react-router";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

// function App() {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <>

//                 </>
//             </BrowserRouter>
//         </div>
//     );
// }


function App(): JSX.Element{
    return(
        <div className="App">
            <Header />
            
            <Footer />
        </div>
    )
}

export default App;
