"use client";
import React from "react";
import styled from "styled-components";

// import AutoCar from "../..public/auto.png";

//NEWBIES

const Newbies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 72%;
  height: 50rem;
  margin-top: 21rem;
  margin-left: 14.2%;
  gap: 1rem;
`;

const Messages = styled.div`
  display: flex;
  width: 52rem;
  gap: 1.5rem;
`;

const StyledCar = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 23rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;

  .cars {
    font-size: 0.9rem;
    color: #6e99ae;
    letter-spacing: 0.5px;
  }

  h1 {
    width: 16rem;
    height: 7rem;
    color: #262d33;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .text {
    width: 16rem;
    height: 80px;
    color: #4b5157;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 0.9rem;
  }

  .carImage {
    width: 16rem;
    margin-left: 16rem;
    margin-top: -18.3rem;
    border-radius: 1rem;
  }
`;

const MessageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  border-top: 1px solid #ccc;
  margin-top: 3rem;

  .avatar {
    width: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  h4 {
    display: inline-block;
    margin-right: 1rem;
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
    
  }

  p {
    font-size: 0.7rem;
    padding-top: 0.8rem;
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
    // margin-left: -5rem;
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
  }

  .like {
    width: 1rem;
    height: 1.2rem;
    margin-top: -1.1rem;
  }
`;

const MessagTwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 52rem;
  gap: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 2rem;
`;

const Cats = styled.div`
  display: flex;

  flex-direction: column;
  width: 16.4rem;
  height: 23.1rem;
  background-color: #fff;
  border-radius: 1rem;

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
`;

const Cofee = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.4rem;
  height: 10.6rem;
  background-color: #fff;
  border-radius: 1rem;

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

const Right = styled.div``;

const Columns = styled.div`
  width: 12.5rem;
  height: 48.2rem;
  background-color: #6e99ae;
  margin-left: 6.12rem;
  border-radius: 1rem;
`;

const ColumsHeader = styled.h4`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(195, 209, 222);
  padding: 1rem;
  border-bottom: 1px solid #fff;
`;

const Aforizm = styled.div`
  padding: 1rem;
`;

const Devid = styled.div`
  display: flex;
  flex-direction: column;
  height: 13rem;
  border-bottom: 2px solid #ccc;

  h4 {
    font-size: 1rem;
  }

  .devid {
    width: 3rem;
    border-radius: 50%;
  }
  .name {
    font-size: 0.8rem;
    color: #fff;
  }
  .specialist {
    font-size: 0.7rem;
    color: #fff;
  }
`;

const Alexandra = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  border-bottom: 2px solid #ccc;

  h4 {
    font-size: 1rem;
  }

  .green {
    width: 3rem;
    border-radius: 50%;
  }
  .name {
    font-size: 0.8rem;
    color: #fff;
  }
  .specialist {
    font-size: 0.7rem;
    color: #fff;
  }
`;

const Olivia = styled.div`
  display: flex;
  flex-direction: column;
  height: 15rem;
  border-bottom: 2px solid #ccc;

  h4 {
    font-size: 1rem;
  }

  .olivia {
    width: 3rem;
    border-radius: 50%;
  }
  .name {
    font-size: 0.8rem;
    color: #fff;
  }
  .specialist {
    font-size: 0.7rem;
    color: #fff;
  }
`;

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aaa;
`;

// HTML QISMI

const New = () => {
  return (
    <Newbies>
      <Left>
        <Messages>
          <StyledCar>
            <p className="cars">CARS</p>
            <h1 className="replicas">
              The joy oblicase: <br /> A $ 5 million car <br /> for $ 50,000
            </h1>
            <p className="text">
              The 31-year-old self-taught engineer and former amateur racer
              spends his days building artful recreations of one of most iconic
              sports cars
            </p>
            <img src="/auto.png" alt="Car" className="carImage" />
            <MessageText>
              <img src="/avatarka.png" alt="Avatarka" className="avatar" />
              <h4>
                Jessica Miller:
                <span>
                  &nbsp; Even as the ride-hailing services future remem… &nbsp;
                </span>
              </h4>
              <img src="/sms.png" alt="Sms" className="smsicon" />{" "}
              <p className="sms">&nbsp;342</p>
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
                <img src="/sms1.png" alt="sms" className="message" />
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
            <img src="/devid.png" alt="Devid" className="devid" />
            <p className="name">Devid Williams</p>
            <p className="specialist">Architect</p>
          </Devid>
          <Alexandra>
            <h4>The details are not the details. They make the design.</h4>
            <img src="/green.png" alt="Green" className="green" />
            <p className="name">Alexandra Green</p>
            <p className="specialist">Interior desinger</p>
          </Alexandra>
          <Olivia>
            <h4>Live life to the fullest, and focus on the positive</h4>
            <img src="/olivia.png" alt="Olivia" className="olivia" />
            <p className="name">Olivia Thompson</p>
            <p className="specialist">Coacher</p>
          </Olivia>
        </Aforizm>
        <Buttons>Read more</Buttons>
      </Columns>
    </Newbies>
  );
};

export default New;
