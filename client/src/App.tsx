import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Register from "./pages/register";
import Search from "./pages/search";

import "./styles/index.css";

const App: React.FC<{}> = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
