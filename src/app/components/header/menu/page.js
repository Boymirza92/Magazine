"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { play } from "@fortawesome/free-solid-svg-icons";
import NavIcon from "../../public/NavIcon.jpg";
import Ozodlik from "../../public/Ozodlik.png";
import Gitara from "../../public/gitara.png";
import Kapalak from "../../public/kapalak.png";
import Odam from "../../public/odam.png";
import Yol from "../../public/yol.png";
import Benjamin from "../../public/Benjamin.png";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

// Header bo'limi
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-family: ${lato.style.fontFamily}, sans-serif;
  margin-top: 1rem;
  z-index: 3;
  background-color: #fff;

  @media (max-width: 768px) {
    padding-top: 0.5rem;
  }
`;

//Search qatori
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 4rem;
  border-bottom: 2px solid rgb(241, 241, 241);
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border: none;
    width: 100%;
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
    @media (max-width: 768px) {
      display: none;
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
  display: ${(props) => (props.$isVisible ? "block" : "none")};

  @media (max-width: 768px) {
    width: 5rem;
    line-height: 0.1;
    top: 3rem;
    left: 0.3rem;
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
  color: black;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 1rem;
  }
`;

const Icon = styled.span`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 768px) {
    display: inline-block;
    justify-content: start;
    width: 0.5rem;
    height: 0.5rem;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const InputSearch = styled.input`
  width: 40rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  color: black;
  background-color: #fff;
  border: 1px solid aqua;

  @media (max-width: 768px) {
    width: 10rem;
    height: 1.5rem;
    margin-top: -0.4rem;
    font-size: 0.6rem;
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
    margin-top: -5.5rem;
    margin-left: 15rem;
    font-size: 0.6rem;
  }

  &:hover {
    color: blue;
    box-shadow: 2px 3px 3px 3px rgba(12, 9, 9, 0.05);
    border-radius: 2px;
  }
  &:active {
    color: #d3baba;
  }

  .signIn {
    margin-right: 1rem;

    @media (max-width: 768px) {
      display: none;
    }
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
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  .freedom {
    width: 6.2rem;
    height: 5.2rem;
    margin-left: 7rem;
    gap: 0px;
    opacity: 0px;

    @media (max-width: 768px) {
      display: flex;
      margin-top: 1rem;
      margin-right: 7rem;
      border: 1px solid aqua;
      border-radius: 4px;
      box-shadow: 1px 1px 10px 0.3px rgb(210, 203, 203);
    }
  }
`;
const TextBoston = styled.p`
  display: inline-block;
  margin: 0.5rem 11rem 0 0;
  font-family: "lato" sans-serif;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: #4b5157;

  @media (max-width: 768px) {
    width: 15rem;
    margin-left: 15rem;
    font-size: 0.7rem;
  }
`;
const TextHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  width: 184px;
  height: 40px;
  font-weight: 600;
  margin-right: 10rem;
  color: black;

  @media (max-width: 768px) {
    margin-left: 15rem;
    font-size: 1.5rem;
  }
`;
const Data = styled.p`
  margin-right: 2rem;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: #4b5157;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-left: 2rem;
    font-size: 0.8rem;
  }
`;
const TheWeather = styled.p`
  font-size: 0.9rem;
  color: #4b5157;
  font-family: "Lato", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    margin-top: -2.3rem;
    margin-left: 11rem;
  }

  .Sun {
    margin-right: 0.7rem;
  }
`;

//Navigatsiya bo'limi

const Navbars = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 35rem;
  background-color: #262d33;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: initial;
    border: none;
    margin-top: 1.2rem;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #262d33;

  @media (max-width: 768px) {
    display: none;
  }

  .navbar-nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    letter-spacing: 1px;
    font-size: 1rem;
    color: #fff;
    background-color: #262d33;
    border-bottom: 2px solid rgb(69, 70, 71);

    &:hover {
      color: rgb(105, 100, 112);
      &:active {
        color: rgb(51, 44, 44);
      }
    }

    a {
      color: #fff;
      &:hover {
        color: rgb(155, 151, 161);

        &:active {
          color: rgb(51, 44, 44);
        }
      }
    }
  }
`;

const Advertising = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: 8rem;
  margin-top: 1rem;
  background-color: #30363d;
  border-radius: 0.7rem;
  font-size: 1rem;
  z-index: 1;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-color: inherit;
    flex-wrap: wrap;
    z-index: initial;
    height: auto;
  }
`;

const Music = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17rem;
  border-right: 3px solid #423c3c;
  padding-right: 1rem;

  @media (max-width: 768px) {
    border: none;
  }
`;
const TitleMusic = styled.p`
  color: white;
  padding-right: 1rem;
`;
const Butterfly = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17rem;
  border-right: 3px solid #423c3c;
  padding-right: 1rem;

  @media (max-width: 768px) {
    border: none;
  }
`;
const ButterflyTitle = styled.p`
  padding-right: 1rem;
  color: #fff;
`;
const MusicTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17rem;
  border-right: 3px solid #423c3c;
  padding-right: 1rem;

  @media (max-width: 768px) {
    border: none;
  }
`;
const MusicTwoTitle = styled.p`
  padding-right: 1rem;
  color: #fff;
`;
const Mystery = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17rem;
  border-right: 3px solid #423c3c;
  padding-right: 1rem;

  @media (max-width: 768px) {
    border: none;
  }
`;

const MysteryTitle = styled.p`
  padding-right: 1rem;
  color: #fff;
`;

//RECOMMENDET

const RecomendetPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  height: 40rem;
  border-radius: 0.2rem;
  margin-top: 24rem;
  z-index: 15;
  position: absolute;
  max-width: 75rem;
  background-size: cover;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem
    z-index: initial;
    margin-top: 23.8rem;
  }

  @media (max-width: 702px) {
    margin-top: 36.81rem;
  }

 
`;
const Photo = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;

  .benjamin {
    border-radius: 50%;
  }

  .link {
    display: inline-block;
    color: #7c5df7;
    font-size: 0.9rem;
    padding-top: 14rem;
  }
`;
const ByBenjaminTurner = styled.div`
  display: flex;
`;
const BebjaminText = styled.p`
  color: rgb(255, 255, 255);
  margin-left: 0.7rem;
  font-size: 1rem;
  span {
    color: ;
  }
`;
const TextPhoto = styled.h1`
  font-size: 3rem;
  color: rgb(255, 255, 255);
  margin-top: 1rem;

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

const Movie = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;
const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  margin-top: 2rem;
  border-radius: 3rem;
  position: relative;
  color: white;
  font-size: 1.2rem;
  border: none;
  background-color: #3498db;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5); /* QALIN soyani qo‘shdik */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgb(231, 221, 220); /* QIZIL – kesib o‘tadigan rang */
    transition: left 0.2s ease;
    z-index: 0;
  }

  &:hover::before {
    left: 100%; /* Qizil rang chapdan o‘ngga o‘tib ketadi */
  }
  span {
    position: relative;
    z-index: 1; /* Matn ustida ko‘rinadi */
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

const IconMovie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 3rem;
  height: 3rem;
  border: 2px solid #ffffff;
  margin-left: 3rem;
  margin-top: 2rem;
  border-radius: 50%;

  &:hover {
    background-color: rgb(132, 161, 247);
  }

  @media (max-width: 550px) {
    width: 2rem;
    height: 2rem;
    font-size: 0.8rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
`;

const MovieName = styled.p`
  width: 20rem;
  margin-top: 1.2rem;

  @media (max-width: 550px) {
    height: 2rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

//RecommendetForYour

const RecommendetForYour = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  background-color: rgb(246, 227, 227);
  color: #333;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5rem;
    border: none;
    margin-top: 4.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 624px) {
    margin-top: 0.5rem;
  }
`;
const RecommendetParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  font-size: 0.8rem;
  font-weight: bold;
  border-bottom: 1px solid aqua;
  cursor: pointer;

  @media (max-width: 768px) {
    text-align: center;
    border: none;
    width: 100%;
    height: 2rem;
  }
`;
const Food = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 7rem;
  gap: 0.5rem;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid aqua;
  color: #6e99ae;

  .food {
    font-weight: 500;
    color: #333;

    @media (max-width: 768px) {
      text-align: start;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    text-align: center;
    border: none;
    width: 8rem;
  }
`;

const Cars = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 7rem;
  gap: 0.5rem;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid aqua;
  color: #6e99ae;

  .cars {
    font-weight: 500;
    color: #333;

    @media (max-width: 768px) {
      text-align: start;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    text-align: center;
    border: none;
    width: 8rem;
  }
`;

const Videos = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 7rem;
  gap: 0.5rem;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid aqua;
  color: #6e99ae;

  .movies {
    font-weight: 500;
    color: #333;

    @media (max-width: 768px) {
      text-align: start;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    text-align: center;
    border: none;
    width: 8rem;
  }
`;

const Nfl = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 7rem;
  gap: 0.5rem;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid aqua;
  color: #6e99ae;

  .nfl {
    font-weight: 500;
    color: #333;

    @media (max-width: 768px) {
      text-align: start;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    text-align: center;
    border: none;
    width: 8rem;
  }
`;

const TechReviews = styled.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 7rem;
  gap: 0.5rem;
  padding-left: 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #6e99ae;

  .reviews {
    font-weight: 500;
    color: #333;

    @media (max-width: 768px) {
      text-align: start;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    text-align: center;
    border: none;
    width: 8rem;
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
            <DropdownMenu $isVisible={isDropdownVisible}>
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4354 16.3951L13.146 11.9395C14.2489 10.6301 14.8532 8.98262 14.8532 7.26749C14.8532 3.26026 11.5888 0 7.57659 0C3.56433 0 0.299988 3.26026 0.299988 7.26749C0.299988 11.2747 3.56433 14.535 7.57659 14.535C9.08284 14.535 10.5182 14.0812 11.7454 13.2199L16.0674 17.7093C16.2481 17.8967 16.4911 18 16.7514 18C16.9979 18 17.2317 17.9062 17.4092 17.7355C17.7863 17.3731 17.7983 16.7721 17.4354 16.3951ZM7.57659 1.89587C10.5423 1.89587 12.9549 4.30552 12.9549 7.26749C12.9549 10.2295 10.5423 12.6391 7.57659 12.6391C4.6109 12.6391 2.19823 10.2295 2.19823 7.26749C2.19823 4.30552 4.6109 1.89587 7.57659 1.89587Z"
            fill="#BCBFC2"
          />
        </svg>
        <Subscribe className="d-flex align-items-center gap-3">
          <Image
            src={NavIcon}
            className="Image" 
            alt="Nav Icon"
            priority
          />
          <TitleSubscribe>
            Subscribe Now <br />
            <span>3 months for $19</span>
          </TitleSubscribe>
        </Subscribe>
        <SignIn>
          <svg
            className="signIn"
            margin="15"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 16.6316C16.3675 18.2105 13.7008 19 10 19C6.29917 19 3.63251 18.2105 2 16.6316C2 13.3481 3.90591 10.9832 6.70588 10C7.60059 10.4169 8.59455 11 10 11C11.4054 11 12.3311 10.3926 13.2941 10C16.0575 10.9965 18 13.3748 18 16.6316ZM10 9C7.79086 9 6 7.20914 6 5C6 2.79086 7.79086 1 10 1C12.2091 1 14 2.79086 14 5C14 7.20914 12.2091 9 10 9Z"
              fill="#BCBFC2"
            />
          </svg>
          Sign In
        </SignIn>
      </Menu>
      <MenuTwo>
        <Image src={Ozodlik} className="freedom" alt="Freedom.jpg" />
        <TextBoston>Boston and New York Brean Brunt</TextBoston>
        <TextHeader>Universal</TextHeader>
        <Data>Monday, January 1,2018</Data>
        <TheWeather>
          <FontAwesomeIcon icon={faSun} className="Sun" /> - 23 °C
        </TheWeather>
      </MenuTwo>
      <Navbars>
        <Nav className="navbar navbar-expand-md navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  NAWS <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  OPINION <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SCIENCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LIFE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TREVEL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MONEYS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ART & DESIGN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SPORTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PEOPLE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HEALTH
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EDUCATION
                </a>
              </li>
            </ul>
          </div>
        </Nav>
        <Advertising>
          <Music>
            <TitleMusic>
              25 Songs That <br /> Tell Us Whare Music Is <br /> Going
            </TitleMusic>
            <Image
              src={Gitara}
              className="picture"
              placeholder="blur"
              alt="gitara.jpg"
            />
          </Music>
          <Butterfly>
            <ButterflyTitle>
              These Ancient <br /> Assassins Eat Their <br /> Own Kind
            </ButterflyTitle>
            <Image
              src={Kapalak}
              className="picture"
              placeholder="blur"
              alt="kapalak.jpg"
            />
          </Butterfly>
          <MusicTwo>
            <MusicTwoTitle>
              How Do You Teach <br /> People to Love <br /> Difficult Music?
            </MusicTwoTitle>
            <Image
              src={Odam}
              className="picture"
              placeholder="blur"
              alt="Odam.jpg"
            />
          </MusicTwo>
          <Mystery>
            <MysteryTitle>
              International <br />
              Soccer's Man of <br />
              Mystery
            </MysteryTitle>
            <Image
              src={Yol}
              className="picture"
              placeholder="blur"
              alt="yol.jpg"
            />
          </Mystery>
        </Advertising>
      </Navbars>
      {/* RECOMMENDET */}

      <RecomendetPhoto
        style={{
          backgroundImage: "url('/Tog.png')",
        }}
      >
        <Photo>
          <ByBenjaminTurner>
            <Image
              className="benjamin"
              src={Benjamin}
              placeholder="blur"
              alt="Benjamin.jpg"
            />
            <BebjaminText>
              By benjamin Tunner <br />
              <span style={{ color: "rgb(229, 218, 218)", fontSize: "0.8rem" }}>
                Traveler
              </span>
            </BebjaminText>
          </ByBenjaminTurner>
          <a href="#" className="link">
            DESTINATIONS
          </a>
          <TextPhoto>
            In Southeast England, White <br /> Cliffs and Fish
          </TextPhoto>
          <Movie>
            <Button>
              {" "}
              <span>Read more ➡</span>
            </Button>
            <IconMovie>▶</IconMovie>
            <MovieName>
              <br />
              The chalk cliff of Beachy Head <br /> 18:05
            </MovieName>
          </Movie>
        </Photo>

        {/* RecommendetForYour */}
        <RecommendetForYour>
          <RecommendetParagraph>RECOMMENDET FOR YOU</RecommendetParagraph>
          <Food>
            FOOD
            <span className="food">
              For Chicken-Fried Steak, Too <br /> Much Is Just{" "}
            </span>
          </Food>
          <Cars>
            CARS
            <span className="cars">
              Storm Has Car Dealers Doing <br />
              Swift Business
            </span>
          </Cars>
          <Videos>
            MOVIES
            <span className="movies">
              War Is Hell? In New Military <br />
              Dramas, It’s One-Dimensional
            </span>
          </Videos>
          <Nfl>
            NFL
            <span className="nfl">
              11 surprising stat rankings for <br /> active NFL players
            </span>
          </Nfl>
          <TechReviews>
            TECH REVIEWS
            <span className="reviews">
              The bookcases you can buy online
              <br /> and assemble yourself
            </span>
          </TechReviews>
        </RecommendetForYour>
      </RecomendetPhoto>
     
    </Header>
  );
};

export default App;
