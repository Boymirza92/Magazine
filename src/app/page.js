"use client"
import React from 'react';
import "./globals.css";
import NavbarMenu from "./components/header/menu/page.js";
import Newbies from "./components/header/newbies/page.js";
export default function Home() {
  return (
    <div>
      <NavbarMenu/> 
      <Newbies/>
    </div>
  );
}
