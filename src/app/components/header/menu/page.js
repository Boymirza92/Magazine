"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Kerakli qalinliklar
  style: ["normal", "italic"], // Oddiy va kursiv
});
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "../../rasmlar/NavIcon.jpg";
import Ozodlik from "../../rasmlar/Ozodlik.png";

// Header bo'limi
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  margin-top: 1rem;
`;
//Search qatori
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 4rem;
  border-bottom: 2px solid rgb(241, 241, 241);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: none;
  }

  .SearchIcon {
    cursor: pointer;

    &:hover {
      color: blue;
      box-shadow: 2px 3px 3px 3px rgba(12, 9, 9, 0.07);
      border-radius: 50%;
      border: 0px solid rgba(12, 9, 9, 0.1);
    }

    &:active {
      background-color: rgb(230, 224, 224);
      border: 0px solid rgb(188, 179, 179);
      border-radius: 50%;
    }
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 5.2rem;
  left: 0.5rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 200px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  @media (max-width: 768px) {
    width: 5rem;
    line-height: 0.1;
  }
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: #333;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  cursor: pointer;
`;

const Icon = styled.span`
  width: 1.5rem;
  height: 1.5rem;
`;

const Title = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  &:hover {
    color: rgb(105, 100, 112);
    &:active {
      color: rgb(51, 44, 44);
    }
  }
`;

const InputSearch = styled.input`
  width: 40rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  color: black;

  @media (max-width: 768px) {
    width: 10rem;
    height: 1.5rem;
    margin: 0.5rem;
    font-size: 0.8rem;
  }

  &:hover {
    color: rgb(20, 17, 17);
    box-shadow: 2px 3px 3px 3px rgba(12, 9, 9, 0.1);
    border-radius: 2px;
  }

  &:active {
    background-color: #d3baba;
    border: 1px solid rgb(188, 179, 179);
  }
`;

const Subscribe = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .Image {
    width: 4.1rem;
    height: 2.7rem;
  }
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const TitleSubscribe = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 1rem;

  color: #555;

  span {
    color: rgb(177, 179, 181);
  }
`;

const SignIn = styled.p`
  color: #4b5157;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }

  &:hover {
    color: blue;
    box-shadow: 2px 3px 3px 3px rgba(12, 9, 9, 0.05);
    border-radius: 2px;
  }
  &:active {
    color: #d3baba;
  }

  .svg-signin {
    margin-right: 1rem;
  }
`;

//MENU TWO
const MenuTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 5rem;
  margin-top: 0.6rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
  }

  .freedom {
    width: 6.2rem;
    height: 5.2rem;
    margi-top: 3rem;
    margin-left: 7rem;
    gap: 0px;
    opacity: 0px;
  }
`;
const TextBoston = styled.p`
  display: inline-block;
  margin: 0.5rem 11rem 0 0;

  font-size: 0.9rem;
  line-height: 1.3rem;
  color: #4b5157;
`;
const TextHeader = styled.h1`
  font-size: 3rem bold;
  width: 184px;
  height: 40px;
  font-weight: 600;
  margin-right: 10rem;
`;
const Data = styled.p`
  margin-right: 2rem;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: #4b5157;
`;
const TheWeather = styled.p`
  font-size: 0.9rem;
  color: #4B5157
  font-family: 'Lato', sans-serif;
  font-weight: 400;



  .Sun {
    margin-right: 0.7rem;
  }
`;

const App = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };
  return (
    <Header>
      <Menu>
        <Section>
          <Icon onClick={toggleDropdown}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 17H1V15H19V17ZM13 11H1V9H13V11ZM1 5V3H19V5H1Z"
                fill="#BCBFC2"
              />
            </svg>
            <DropdownMenu isVisible={isDropdownVisible}>
              <DropdownItem>NEWS</DropdownItem>
              <DropdownItem>OPINION</DropdownItem>
              <DropdownItem>SCINCE</DropdownItem>
              <DropdownItem>LIFE</DropdownItem>
              <DropdownItem>TRAVEL</DropdownItem>
              <DropdownItem>MONEYS</DropdownItem>
              <DropdownItem>ART&DESIGN</DropdownItem>
              <DropdownItem>SPORTS</DropdownItem>
              <DropdownItem>PEOPLE</DropdownItem>
              <DropdownItem>HEALTH</DropdownItem>
              <DropdownItem>EDUCATION</DropdownItem>
            </DropdownMenu>
          </Icon>
          <Title>Section</Title>
        </Section>
        <InputSearch type="text" placeholder="Search..." />
        <svg
          className="SearchIcon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.4354 16.3951L13.146 11.9395C14.2489 10.6301 14.8532 8.98262 14.8532 7.26749C14.8532 3.26026 11.5888 0 7.57659 0C3.56433 0 0.299988 3.26026 0.299988 7.26749C0.299988 11.2747 3.56433 14.535 7.57659 14.535C9.08284 14.535 10.5182 14.0812 11.7454 13.2199L16.0674 17.7093C16.2481 17.8967 16.4911 18 16.7514 18C16.9979 18 17.2317 17.9062 17.4092 17.7355C17.7863 17.3731 17.7983 16.7721 17.4354 16.3951ZM7.57659 1.89587C10.5423 1.89587 12.9549 4.30552 12.9549 7.26749C12.9549 10.2295 10.5423 12.6391 7.57659 12.6391C4.6109 12.6391 2.19823 10.2295 2.19823 7.26749C2.19823 4.30552 4.6109 1.89587 7.57659 1.89587Z"
            fill="#BCBFC2"
          />
        </svg>
        <Subscribe className="d-flex align-items-center gap-3">
          <Image
            src={NavIcon}
            className="Image" // Rasmni next/image yordamida qo'shamiz
            alt="Nav Icon"
          />
          <TitleSubscribe>
            Subscribe Now <br />
            <span>3 months for $19</span>
          </TitleSubscribe>
        </Subscribe>
        <SignIn>
          <svg
            className="svg-signin"
            margin="15"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 16.6316C16.3675 18.2105 13.7008 19 10 19C6.29917 19 3.63251 18.2105 2 16.6316C2 13.3481 3.90591 10.9832 6.70588 10C7.60059 10.4169 8.59455 11 10 11C11.4054 11 12.3311 10.3926 13.2941 10C16.0575 10.9965 18 13.3748 18 16.6316ZM10 9C7.79086 9 6 7.20914 6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9Z"
              fill="#BCBFC2"
            />
          </svg>
          Sign In
        </SignIn>
      </Menu>
      <MenuTwo>
        <Image src={Ozodlik} className="freedom" alt="Freedom.jpg" />
        <TextBoston>Boston and New York Brean Rrunt</TextBoston>
        <TextHeader>Universal</TextHeader>
        <Data>Monday, January 1,2018</Data>
        <TheWeather>
          <FontAwesomeIcon icon={faSun} className="Sun" /> - 23 °C
        </TheWeather>
      </MenuTwo>
    </Header>
  );
};

export default App;
