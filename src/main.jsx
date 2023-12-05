import React from "react";
import ReactDOM from "react-dom/client";
import { Homepage, Termpage, Advicepage } from "./util/wholepage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.css";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/Term" element={<Termpage />}></Route>
                <Route path="/Advice" element={<Advicepage />}></Route>
            </Routes>
        </BrowserRouter>
    </>
);
