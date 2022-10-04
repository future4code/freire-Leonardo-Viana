import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPage } from "../pages/Menu/MenuPage";


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<MenuPage/>}/>            
        </Routes>
        </BrowserRouter>
    )
}

export default Router