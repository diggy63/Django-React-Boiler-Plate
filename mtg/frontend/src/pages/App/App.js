import React from "react";
import Home from "../Home/Home";
import Views from "../Views/Views";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/views" element={<Views />} />
        </Routes>
    )

}
