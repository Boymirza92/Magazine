"use client";
import React, { useState } from "react";
import Navbar from './navbar/page.js';
import Travel from './five-travel/page.js';
import Geography from './geograpy/page.js';

const TravelPage = () => {
  return (
    <div>
      <Navbar />
      <Travel />
      <Geography />
      
    </div>
  );
}

export default TravelPage;
