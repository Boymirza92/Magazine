"use client";
import React from "react";
import styled from "styled-components";

// import AutoCar from "../..public/auto.png";

//NEWBIES

const Newbies = styled.div`
  display: flex;
  width: 70%;
  height: 50rem;
  border: 3px solid red;
  margin-top: 21rem;
  margin-left: 15%;
`;

const Messages = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    weight: 400;
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
    display: inline-block
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
  ;
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
    color: cef0de;
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
    p{
      font-size: 0.6rem;
      color: rgb(145, 147, 142);
      margin-top: -1rem;
    }

  .message {
    width: 1rem;
    height: 0.9rem;
    background-color: rgb(130, 134, 125);
    border-radius: 3px;
    margin-top: -1rem;

  }
  p {
    font-size: 0.6rem;
  }

  .like {
    width: 1rem;
    height: 1.2rem;
    margin-top: -1.1rem;

  }
`;

const MessagTwo = styled.div``;

const Cats = styled.div``;

const Cofee = styled.div``;

const Manufactura = styled.div``;

const Stressful = styled.div``;

const Lemon = styled.div``;

const Columns = styled.div``;

const New = () => {
  return (
    <Newbies>
      <Messages>
        <StyledCar>
          <p className="cars">CARS</p>
          <h1 className="replicas">
            The joy oblicase: <br /> A $ 5 million car <br /> for $ 50,000
          </h1>
          <p className="text">
            The 31-year-old self-taught engineer and former amateur racer spends
            his days building artful recreations of one of most iconic sports
            cars
          </p>
          <img src="/auto.png" alt="Car" className="carImage" />
          <MessageText>
            <img src="/avatarka.png" alt="Avatarka" className="avatar" />
            <h4>
              Jessica Miller:
              <span>
                {" "}
                Even as the ride-hailing services future remem… &nbsp;
              </span>
            </h4>{" "}
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
        <Cats></Cats>
        <Cofee></Cofee>
        <Manufactura></Manufactura>
        <Stressful></Stressful>
        <Lemon></Lemon>
        <Columns></Columns>
      </MessagTwo>
    </Newbies>
  );
};

export default New;
