"use client";
import React, { useState } from "react";
import Navbar from './navbar/page.js';
import Travel from './five-travel/page.js';
import Geography from './geograpy/page.js';
import Commentary from './commentary/page.js';

const TravelPage = () => {
  return (
    <div>
      <Navbar />
      <Travel />
      <Geography />
      <Commentary/>
      
    </div>
  );
}

export default TravelPage;
