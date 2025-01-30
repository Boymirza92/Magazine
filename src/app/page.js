"use client"
import React from 'react';
import "./globals.css";
import NavbarMenu from "./components/header/menu/page.js";
// import Navbar from "./components/header/navbar/page.js";
export default function Home() {
  return (
    <div>
      <NavbarMenu/>
      {/* <Navbar/> */}
    </div>
  );
}
