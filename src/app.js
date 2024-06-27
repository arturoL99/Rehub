import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import JoinUs from "./pages/joinUs";
import Utilizzatori from "./pages/utilizzatori";
import Investirori from "./pages/investitori";
import Propietari from "./pages/proprietari";
import Blog from './pages/blog'
import './style/utilities.scss';
import Proprietà from "./pages/proprietàPLP";
import ProprietàSingola from "./pages/proprietàPDP";
import Privacy from "./pages/privacy";
import Cookies from "./pages/cookies";
import { pushGA } from "./utils/GA4Utils";
import DataLayerEventTracker from "./utils/DataLayerUtils";

function App() {
    return (
        <main>
            <DataLayerEventTracker />
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
        </main>
    )
}

export default App;
