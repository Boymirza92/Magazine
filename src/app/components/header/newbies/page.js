"use client";
import React from "react";
import styled from "styled-components";

//NEWBIES

const Newbies = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 50rem;
  margin-top: 21rem;
  /* margin-left: 14.2%; */
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    margin-top: 5rem;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
  @media (max-width: 655px) {
    width: 100%;
    margin-left: 0;
    margin-top: 13rem;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 52rem;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Messages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 52rem;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledCar = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 23rem;
  background-color: #fff;
  border-radius: 1rem;
  /* padding: 2rem; */
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
    justify-content: center;
  }
`;

const CarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContent = styled.div`
  width: 16rem;
  height: 15rem;
  padding: 1.5rem 2rem;

  .cars {
    font-size: 0.9rem;
    color: #6e99ae;
    letter-spacing: 0.5px;
  }

  .replicas {
    width: 16rem;
    height: 7rem;
    color: #262d33;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .text {
    width: 16rem;
    color: #4b5157;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

const ImageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  height: 15rem;
  margin-left: 1rem;


  .carImage {
    width: 16rem;
    border-radius: 1rem;
  }

  @media(max-width: 768px) {

    .carImage{
      width: 13rem;
    }
  }
  @media(max-width: 600px) {

    .carImage{
      width: 10rem;
      height: 12rem;
    }
  }
`;

const MessageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-top: 1px solid #ccc;
  margin-top: 4rem;

  .avatar {
    width: 2rem;
    border-radius: 50%;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
      transition: all 0.2s ease;
      transform: scale(1.3);
    }
  }

  h4 {
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;

    span {
      width: 1rem;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
  .smsicon {
    width: 1rem;
    margin-top: 0.5rem;

    &:hover {
      cursor: pointer;
      transition: all 0.2s ease;
      transform: scale(1.3);
    }
  }

  .sms {
    font-size: 0.7rem;
    margin-top: 1.5rem;
    color: #666;
  }
`;

const Popular = styled.div`
  width: 16.4rem;
  height: 23rem;
  background-color: #fff;
  background-image: url("/popular.png");
  border-radius: 1rem;
  padding: 1rem;

  .popular {
    width: 5rem;
    text-align: center;
    font-size: 0.9rem;
    background-color: #3dc47e;
    color: #cef0de;
    border-radius: 0.2rem;
    letter-spacing: 0.3px;
  }

  .art {
    font-size: 0.8rem;
    color: rgb(211, 222, 198);
    margin-top: 7rem;
    letter-spacing: 0.3px;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.4;
    color: #fff;
    letter-spacing: 0.5px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;

  .price {
    width: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.1);
    }
  }
`;
const Like = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 10rem;
  height: 2rem;
  gap: 0.5rem;

  .name {
    width: 12rem;
    height: 1rem;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    color: rgb(211, 222, 198);
    margin-top: 0.01rem;
  }
  p {
    font-size: 0.6rem;
    color: rgb(145, 147, 142);
    margin-top: -1rem;
  }

  .message {
    width: 1rem;
    height: 0.9rem;
    background-color: rgb(205, 219, 187);
    border-radius: 3px;
    margin-top: -1rem;

    &:hover {
      cursor: pointer;
      transition: all 0.2s ease;
      transform: scale(1.1);
    }
  }

  .like {
    width: 1rem;
    height: 1.2rem;
    margin-top: -1.1rem;

    &:hover {
      cursor: pointer;
      transition: all 0.2s ease;
      transform: scale(1.1);
    }
  }
`;

const MessagTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;

  @media(max-width: 768px){
    width: 100%;
    justify-content: center;
  }
`;

const Cats = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.4rem;
  height: 23.1rem;
  background-color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d9dbd9;
    transition: all 0.2s ease;
    transform: scale(1.05);
  }

  .cat {
    border-radius: 1rem 1rem 0 0;
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    line-height: 1.4;
    color: black;
    font-weight: 700;
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 34rem;
  height: 24rem;
  margin-left: 0.6rem;
  gap: 1rem;

  @media(max-width: 768px){
    width: 100%;
    justify-content: center;
  }
`;

const Cofee = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.4rem;
  height: 10.6rem;
  background-color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d9dbd9;
    transition: all 0.2s ease;
    transform: scale(1.05);
  }

  h4 {
    gap: 1rem;
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: rgb(28, 32, 36);
    font-weight: bold;
    margin: 1.5rem 0 0 1rem;
  }

  .text {
    line-height: 1.2;
    letter-spacing: 0.2px;
    color: rgb(29, 32, 35);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }

  .data {
    color: rgb(120, 126, 132);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }
`;

const Manufactura = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.4rem;
  height: 10.6rem;
  background-color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d9dbd9;
    transition: all 0.2s ease;
    transform: scale(1.05);
  }

  .header {
    letter-spacing: 0.2px;
    line-height: 1.4;
    color: rgb(28, 32, 36);
    font-weight: bold;
    margin: 1.5rem 0 0 1rem;
    font-size: 1rem;
  }

  .text {
    font-size: 0.8rem;
    line-height: 1.2;
    letter-spacing: 0.2px;
    color: rgb(29, 32, 35);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
  }

  .data {
    color: rgb(120, 126, 132);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }
`;

const Stressful = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.4rem;
  height: 10.6rem;
  background-color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d9dbd9;
    transition: all 0.2s ease;
    transform: scale(1.05);
  }

  h4 {
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: rgb(28, 32, 36);
    font-weight: bold;
    margin: 1.5rem 0 0 1rem;
  }

  .text {
    line-height: 1.2;
    letter-spacing: 0.2px;
    color: rgb(29, 32, 35);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }

  .data {
    color: rgb(120, 126, 132);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }
`;

const Lemon = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.4rem;
  height: 10.6rem;
  background-color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #d9dbd9;
    transition: all 0.2s ease;
    transform: scale(1.05);
  }

  h4 {
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: rgb(28, 32, 36);
    font-weight: bold;
    margin: 1.5rem 0 0 1rem;
  }

  .text {
    line-height: 1.2;
    letter-spacing: 0.2px;
    color: rgb(29, 32, 35);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }

  .data {
    color: rgb(120, 126, 132);
    margin: 1rem 0 0 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
  }
`;

// COLUMNS

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.5%;
  height: 48.2rem;
  background-color: #6e99ae;
  border-radius: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 16rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 611px) {
   
    margin-top: 21rem;
  }
`;

const ColumsHeader = styled.h4`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(195, 209, 222);
  padding: 1rem;
  border-bottom: 1px solid #fff;
`;

const Aforizm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

  }

`;

// Devid

const Devid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 13rem;
  border-bottom: 1px solid #ccc;

  h4 {
    font-size: 1rem;
  }
`;

const InfoDevid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
`;
const DevidImg = styled.div`
  .devid {
    width: 3rem;
    border-radius: 50%;
  }
`;

const DevidName = styled.div`
  width: 60%;
  margin-left: 4rem;
  margin-top: -2.5rem;

  .name {
    margin: 0rem;
    font-size: 0.8rem;
    color: #fff;
    width: 6rem;
  }
  .specialist {
    font-size: 0.7rem;
    color: #fff;
  }
`;

//ALEXANDRA

const Alexandra = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 13rem;
  border-bottom: 1px solid #ccc;
  margin-top: 1rem;

  h4 {
    font-size: 1rem;
  }
`;

const InfoAlexandr = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;
`;
const AlexImg = styled.div`
  .green {
    width: 3rem;
    border-radius: 50%;
  }
`;

const AlexName = styled.div`
  width: 70%;
  height: 3rem;
  margin-left: 4rem;
  margin-top: -2.5rem;
  gap: 0.5rem;

  .name {
    margin: 0rem;
    font-size: 0.8rem;
    color: #fff;
    width: auto;
  }
  .specialist {
    font-size: 0.7rem;
    color: #fff;
  }
`;

// OLIVIA

const Olivia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 13rem;
  // border-bottom: 1px solid #aaa;

  h4 {
    font-size: 1rem;
  }
`;

const InfoOlivia = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const OliviImg = styled.div`
  .olivia {
  disolay-inline-block;
    width: 3rem;
    border-radius: 50%;
  }
`;

const OliviaName = styled.div`
  width: 60%;
  margin-left: 4rem;
  margin-top: -2.5rem;

  .name {
    margin: 0rem;
    font-size: 0.8rem;
    color: #fff;
    width: 6rem;
  }
  .specialist {
    font-size: 0.7rem;
    color: #fff;
  }
`;

// BUTTONS

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  background-color: inherit;
  border: none;
  border-radius: 0 0 1rem 1rem;
  border-top: 1px solid #abd;

  &:hover {
    background-color: #919fa5;
    animation: 0.3s;
    color: black;
    transition: all 0.2s ease;
  }
`;

// HTML QISMI

const New = () => {
  return (
    <Newbies>
      <Left>
        <Messages>
          <StyledCar>
            <CarContainer>
              <TextContent>
                <p className="cars">CARS</p>
                <h1 className="replicas">
                  The joy oblicase: <br /> A $ 5 million car <br /> for $ 50,000
                </h1>
                <p className="text">
                  The 31-year-old self-taught engineer and former amateur racer
                  spends his days building artful recreations of one of most
                  iconic sports cars
                </p>
              </TextContent>
              <ImageContent>
                <img src="/auto.png" alt="Car" className="carImage" />
              </ImageContent>
            </CarContainer>
            <MessageText>
              <img src="/avatarka.png" alt="Avatarka" className="avatar" />
              <h4>
                Jessica Miller:
                <span>
                  &nbsp; Even as the ride-hailing services future remem… &nbsp;
                </span>
              </h4>
              <img src="/Comment.png" alt="Sms" className="smsicon" />{" "}
              <p className="sms">&nbsp;&nbsp;342</p>
            </MessageText>
          </StyledCar>
          <Popular>
            <p className="popular">Popular</p>
            <p className="art">ART & DESIGN</p>
            <h4>
              INVISIBLE INK: THE <br /> WEIRD WORLD OF <br />
              TATTOO REMOVAL - <br /> IN PICTURES
            </h4>
            <Price>
              <img src="/avatarka.png" alt="Avatarka" className="price" />
              <Like>
                <p className="name">By Sarah Jencins</p>
                <p>Sep 26 &nbsp;</p>
                <img src="/Comment.png" alt="sms" className="message" />
                <p>16 &nbsp;</p>&nbsp;
                <img src="/ola.png" alt="Like" className="like" />
                <p>832</p>
              </Like>
            </Price>
          </Popular>
        </Messages>
        <MessagTwo>
          <Cats>
            <img src="/cat.png" alt="Cat" className="cat" />
            <h3>200+ Doomed Cats Saved From Euthanization</h3>
          </Cats>
          <Info>
            <Cofee>
              <h4>Is Coffee Bad for Bones?</h4>
              <p className="text">
                Coffee drinkers may excrete more calcium, but it doesn’t appear
                to weaken bones
              </p>
              <p className="data">Oct 14</p>
            </Cofee>
            <Manufactura>
              <h4 className="header">What We Manufacture</h4>
              <p className="text">
                A global history of the factory and the modern world that all
                should read
              </p>
              <p className="data">Oct 15</p>
            </Manufactura>
            <Stressful>
              <h4>It’s a Stressful World</h4>
              <p className="text">
                Can a cruise skeptic enjoy four days on the seas with his family
                and a bunch of princesses?
              </p>
              <p className="data">oct 15</p>
            </Stressful>
            <Lemon>
              <h4>A Treat for Lemon Lovers</h4>
              <p className="text">
                This tangerine, ginger and chocolate tart has verve, depth and a
                hint of spice
              </p>
              <p className="data">Oct 14</p>
            </Lemon>
          </Info>
        </MessagTwo>
      </Left>
      <Columns>
        <ColumsHeader>COLUMNS</ColumsHeader>
        <Aforizm>
          <Devid>
            <h4>Architecture is the thoughtful making of space</h4>
            <InfoDevid>
              <DevidImg>
                <img src="/devid.png" alt="Devid" className="devid" />
              </DevidImg>
              <DevidName>
                <p className="name">Devid Williams</p>
                <p className="specialist">Architect</p>
              </DevidName>
            </InfoDevid>
          </Devid>
          <Alexandra>
            <h4>Architecture is the thoughtful making of space</h4>
            <InfoAlexandr>
              <AlexImg>
                <img src="/green.png" alt="Green" className="green" />
              </AlexImg>
              <AlexName>
                <p className="name">Alexandra Green</p>
                <p className="specialist">Interrior desinger</p>
              </AlexName>
            </InfoAlexandr>
          </Alexandra>
          <Olivia>
            <h4>Architecture is the thoughtful making of space</h4>
            <InfoOlivia>
              <OliviImg>
                <img src="/olivia.png" alt="Olivia" className="olivia" />
              </OliviImg>
              <OliviaName>
                <p className="name">Olivia Thomson</p>
                <p className="specialist">Coach</p>
              </OliviaName>
            </InfoOlivia>
          </Olivia>
        </Aforizm>
        <Buttons>Read more</Buttons>
      </Columns>
    </Newbies>
  );
};

export default New;
