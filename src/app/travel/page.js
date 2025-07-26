"use client";
import React, { useState } from "react";
import Navbar from './navbar/page.js';
import Travel from './five-travel/page.js';
import Geography from './geograpy/page.js';
import Commentary from './commentary/page.js';
import styled from "styled-components";

const TravelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  `;

const TravelPage = () => {
  return (
    <TravelWrapper>
      <Navbar />
      <Travel />
      <Geography />
      <Commentary/>
      
    </TravelWrapper>
  );
}

export default TravelPage;
