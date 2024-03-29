import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import JoinUs from "./pages/joinUs";
import Utilizzatori from "./pages/utilizzatori";
import Investirori from "./pages/investitori";
import Propietari from "./pages/proprietari";
import Blog from './pages/blog'
import './style/utilities.scss';
import Proprietà from "./pages/proprietà";
import ProprietàSingola from "./pages/proprietàSingola";
import Privacy from "./pages/privacy";
import Cookies from "./pages/cookies";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/servizi/utilizzatori" element={<Utilizzatori />} />
                <Route exact path="/servizi/investitori" element={<Investirori />} />
                <Route exact path="/servizi/proprietari" element={<Propietari />} />
                <Route exact path="/contatti" element={<JoinUs />} />
                <Route exact path="/news" element={<Blog />} />
                <Route exact path="/proprieta" element={<Proprietà />} />
                <Route exact path={"/proprieta/:id"} element={<ProprietàSingola />} />
                <Route exact path="/privacy" element={<Privacy />} />
                <Route exact path="/cookies" element={<Cookies />} />
            </Routes>
        </>
    )
}

export default App;
