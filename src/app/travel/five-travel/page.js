"use client";
import React, { useState } from "react";
import styled from "styled-components";

// === DATA ===
const slides = [
  {
    id: 1,
    text: "Destinations",
    title: "Five Travel Stories From 2017 to Help You Escape Into the World",
    subtitle:
      "From the coastlines of Europe to remote Kodiak Island, Alaska, here are five of our favorite stories to help you explore the world",
    data: "🕖 Aug 6, 10:23",
    image: "/mato.png",
  },
  {
    id: 2,
    text: "Destinations",
    title: "Discover the Hidden Gems of Asia — rich culture and adventure await.",
    subtitle: "Explore the mystic temples and vibrant streets where every step uncovers a piece of living history.",
    data: "🕖Aug 6, 10:23",
    image: "/travelAsia.jpg",
  },
];

// === STYLES ===
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 37rem;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  color: white;
`;

const Designation = styled.div`
  position: absolute;
  width: 33rem;
`;

const IconImage = styled.img`
  position: absolute;
  top: 8.5rem;
  left: 8rem;
  width: 1.5rem;
`;

const NavButtons = styled.div`
  position: absolute;
  top: 6rem;
  right: 14rem;
  display: flex;
  gap: 20px;
`;

const NavButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;

  .home {
    width: 1rem;
    margin: -0.5rem 0.3rem 0 0;
  }
  &:hover {
    color: rgb(247, 233, 231);
  }
`;

const Content = styled.div`
  position: absolute;
  top: 4rem;
  left: 12rem;
  max-width: 38rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color:rgb(238, 243, 244);
  }
  .subtitle {
    position: absolute;
    top: 18rem;
    max-width: 28rem;
    color: rgba(249, 249, 253, 0.8);
    font-size: 0.9rem;
  }
  .data {
    color: rgba(249, 249, 253, 0.8);
    margin-top: 10rem;
    font-size: 0.7rem;
  }
  .destination {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: rgba(48, 48, 182, 0.8);
  }
  spam {
    padding-left: 1rem;
    font-size: 0.7rem;

  }
`;

// === COMPONENT ===
const Carousel = () => {
  const [index, setIndex] = useState(0);

  const goToMain = () => setIndex(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <CarouselContainer bg={slides[index].image}>
      <Designation>
        <IconImage src="/Bookmark.png" alt="Bookcmark" />
      </Designation>
      <Content>
        <p className="destination">{slides[index].text}</p>
        <h1>{slides[index].title}</h1>
        <p className="subtitle">{slides[index].subtitle}</p>
        <p className="data">
          {slides[index].data}
          <spam className="like">
            <img src="/like icon.png" /> 555
          </spam>
          <spam className="comment">
            <img src="/Comment.png" /> 758
          </spam>
        </p>
      </Content>
      <NavButtons>
        <NavButton onClick={goToMain}>
          <spam>
            <img src="/home.png" className="home" />
          </spam>
          Back to main
        </NavButton>
        <NavButton onClick={prevSlide}>← Prev</NavButton>
        <NavButton onClick={nextSlide}>Next →</NavButton>
      </NavButtons>
    </CarouselContainer>
  );
};

export default Carousel;
