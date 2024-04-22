import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Home } from "../pages/home";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
