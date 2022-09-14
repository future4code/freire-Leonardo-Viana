import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPostPage from "../pages/DetailPostPage/DetailPostPage";
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/feed/post/:id" element={<DetailPostPage/>}/>            
        </Routes>
        </BrowserRouter>
    )
}