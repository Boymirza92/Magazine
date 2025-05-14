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
  margin-top: 20rem;
  margin-left: 15%;
`;

const Messages = styled.div``;

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
    margin-left: 15.7rem;
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

const Popular = styled.div``;

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
              <span> Even as the ride-hailing services future remem… &nbsp;</span>
            </h4> {" "}
            <img src="/sms.png" alt="Sms" className="smsicon" />
            {" "}
            <p className="sms">&nbsp;342</p>
          </MessageText>
        </StyledCar>
        <Popular></Popular>
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
