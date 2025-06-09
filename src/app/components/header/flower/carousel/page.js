"use client";

import React, { useState } from "react";
import styled from "styled-components";


// === STYLES ===

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 43.1rem;
  padding: 2rem;
  background-color: #262d33;
  gap: 2rem;
  margin: 3rem auto;
`;

const LeftCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33.5rem;
  height: 35.6rem;
   background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-color: rgb(135, 145, 154);
  padding: 1.5rem;
  gap: 1rem;
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
`;

const Hot = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 3px;
  background-color: #ff6f61;
  width: 3rem;
  height: 1.7rem;
  cursor: pointer;
  align-self: flex-start;
`;

const HotClick = styled.p`
  color: white;
  font-size: 0.9rem;
  padding-top: 0.2rem;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .avatarka {
    width: 2.8rem;
    border-radius: 50%;
  }

  .name {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .work {
    font-size: 0.7rem;
    margin-top: -1rem;
    opacity: 0.6;
  }
`;

const HeaderText = styled.h1`
  text-align: center;
  color: white;
  font-weight: 600;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

const Botton = styled.button`
  width: 12rem;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #4592ff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin: 2rem 10rem;

  span {
    color: white;
  }

  img {
    width: 1.3rem;
  }

  &:hover {
    background-color: #207cc7;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.$isActive ? "#333" : "#ccc")};
  cursor: pointer;
`;

// RIGHT CARD STYLED

const RightCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 34.6rem;
  height: 35.6rem;
  background-color: #262d33;
  border-radius: 10px;
`;

const Careers = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url("./RightCardImage.png");
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  background-color: #b4d1e0;
  width: 34.6rem;
  height: 24rem;
  border-radius: 10px;
  padding: 1.5rem;

  .careers {
    color:rgb(87, 122, 140);
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }
  h3 {
    width: 15rem;
    font-size: 1.5rem;
    color: black;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .text {
    width: 14rem;
    font-size: 0.9rem;
    color: #4b5157;
    letter-spacing: 0.2px;
  }
  button {
    border: none;
    width: 8.6rem;
    height: 2.5rem;
    border-radius: 2rem;
    background-color: #4592ff;
    letter-spacing: 0.4px;

    &:hover {
      background-color: rgb(18, 117, 238);
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #262d33;
  margin-top: 2rem;
  gap: 2rem;
  box-size: border-box;

`;

const Coffee = styled.div`
  width: 16.4rem;
  heigth: 10.6rem;
  color: #4b5157;
  background-color: rgb(247, 247, 247);
  border-radius: 10px;
  padding: 1.5rem;

  h5{
  font-size: 1rem;
  color: #262D33;
  font-weight: 600;
  letter-spacing: 0.5px;
  }
  .text{
  color: #4B5157;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  }

  .data{
  color:rgb(139, 150, 161);
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  }
`;

const Manufacture = styled.div`
  width: 16.4rem;
  heigth: 10.6rem;
  color: #4b5157;
  background-color: rgb(247, 247, 247);
  border-radius: 10px;
  padding: 1.5rem;

  h5{
  font-size: 1rem;
  color: #262D33;
  font-weight: 600;
  letter-spacing: 0.5px;
  }
  .text{
  color: #4B5157;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  }

  .data{
  color:rgb(139, 150, 161);
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  }
`;

// === COMPONENT ===

const slidesData = [
  {
    bgImage: "/CarrouselLeft1.png",
    name: "Sarah Jenkins",
    work: "Photographer",
    title: "Readers' Choice winners: Your wine country favorites",
    photoCount: 22,
  },
  {
    bgImage: "/popular.png",
    name: "John Carter",
    work: "Journalist",
    title: "Explore Beautiful Lakes",
    photoCount: 15,
  },
  {
    bgImage: "/non.png",
    name: "Emily Park",
    work: "Blogger",
    title: "Top 10 Travel Spots for 2025",
    photoCount: 30,
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slidesData[currentIndex];

  return (
    <Layout>
      <div>
        <LeftCard $bgImage={currentSlide.bgImage}>
          <div>
            <Hot>
              <HotClick>Hot</HotClick>
            </Hot>
            <Avatar>
              <img
                src="/CarouselLeftAvatar.png"
                alt="Avatar"
                className="avatarka"
              />
              <p className="name">By {currentSlide.name}</p>
              <p className="work">{currentSlide.work}</p>
            </Avatar>
            <HeaderText>{currentSlide.title}</HeaderText>
            <Botton>
              <img src="/BottonGalereyaIcon.png" alt="icon" />
              <span> Watch photos {currentSlide.photoCount}</span>
            </Botton>
          </div>

          <div>
            <DotsContainer>
              {slidesData.map((_, index) => (
                <Dot
                  key={index}
                  $isActive={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </DotsContainer>
          </div>
        </LeftCard>
      </div>

      <RightCard>
        <Careers>
          <p className="careers">CAREERS</p>
          <h3>Had a Job Interview but No Callback? Here’s What to Do</h3>
          <p className="text">
            Try to understand the culture of the company where you want to work
            and be authentic in your interview, experts emphasize.
          </p>
          <button>Read more →</button>
        </Careers>

        <CardInfo>
          <Coffee>
            <h5>Is Coffee Bad for Bones?</h5>
            <p className="text">
              Coffee drinkers may excrete more calcium, but it doesn't appear to
              weaken bones
            </p>
            <p className="data">Oct 15</p>
          </Coffee>
          <Manufacture>
            <h5>What We Manufacture</h5>
            <p className="text">
              A global history of the factory and the modern world that all
              should read
            </p>
            <p className="data">Oct 14</p>
          </Manufacture>
        </CardInfo>
      </RightCard>
    </Layout>
  );
}
