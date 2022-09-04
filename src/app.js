import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import JoinUs from "./pages/joinUs";
import Utilizzatori from "./pages/utilizzatori";
import Investirori from "./pages/investitori";
import Propietari from "./pages/proprietari";
import Blog from './pages/blog'
import Utilities from './style/utilities.scss'
import Test from "./pages/testPage";
import Proprietà from "./pages/proprietà";
//importare qui css?

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/servizi/utilizzatori" element={<Utilizzatori />}/>
                <Route exact path="/servizi/investitori" element={<Investirori />}/>
                <Route exact path="/servizi/proprietari" element={<Propietari />}/>
                <Route exact path="/join" element={<JoinUs />}/>
                <Route exact path="/blog" element={<Blog />}/>
                <Route exact path="/proprieta" element={<Proprietà />}/>
                <Route exact path="/test" element={<Test />}/>
            </Routes>
        </>
    )
}

export default App;