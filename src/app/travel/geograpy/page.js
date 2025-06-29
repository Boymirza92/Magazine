"use client";
import React, { useState } from "react";
import styled from "styled-components";

// === STYLES ===

const AppWropper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46rem;
  margin-top: 5rem;
  font-size: 1rem;
  color: #4b5157;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 13rem;
  width: 100%;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5.2rem;
    margin: -1.3rem 2px 0 0;
    color: rgb(179, 115, 235);
  }
`;

const Anderson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 16.5rem;
  height: 23rem;
  border: 2px solid rgb(224, 221, 227);
  margin-left: 2rem;
  background-color: rgb(246, 238, 237);
  border-radius: 1rem;

  position: absolute;
  top: 43rem;
  right: 18rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
    border-top: 2px solid rgb(224, 221, 227);
    margin-top: 2rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;

  img {
    width: 5rem;
    border-radius: 50%;
    margin-top: 2rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.1s ease;
    }
  }
  h5 {
    font-weight: 700;
    margin-top: 1.2rem;
  }
`;

const SticialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 1rem;

  img {
    width: 2.5rem;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.1s ease;
    }
  }
`;

const TextContinuation = styled.div`
  h4 {
    margin: 2rem 0;
  }
  p {
    margin: 1.5rem 0;
  }
  .text {
    margin-top: -1rem;
  }
`;

// === COMPONENT ===

const Slider = () => {};

const Geograpy = () => {
  const images = ["/slider1.png", "/slider2.png", "/slide3.png"];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.lengith);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <AppWropper>
      <TextWrapper>
        <TextColumn>
          <h1>M</h1>
          <p className="text">
            any geographers are trained in toponymy and cartology, this
            is not their main preoccupation. Geographers study the space and the
            temporal database distribution of phenomena,
          </p>
          <Anderson>
            <AboutMe>
              <img src="/olivia.png" alt="Anderson" />
              <h5>Mira Anderson</h5>
              <p>Traveler & Photographer</p>
              <h6>82 aticles</h6>
            </AboutMe>
            <SticialMedia>
              <a href="https://www.instagram.com/mira_anderson/">
                <img src="/instagramm.png" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/mira_anderson/">
                <img src="/fecebook.png" alt="Fecebook" />
              </a>
              <a href="https://www.twitter.com/mira_anderson/">
                <img src="/twitter.png" alt="Twitter" />
              </a>
            </SticialMedia>
            <h6 className="title">Follow on Universal</h6>
          </Anderson>
        </TextColumn>
        <TextContinuation>
          <p className="text">
            processes, and features as well as the interaction of humans and
            their environment. Because space and place affect a variety of
            topics, such as economics, health, climate, plants and animals,
            geography is highly interdisciplinary. The interdisciplinary nature
            of the geographical approach depends on an attentiveness
            to the relationship between physical and human phenomena and its
            spatial patterns.
          </p>
          <h4>Integrated Geography</h4>
          <p>
            Geography as a discipline can be split broadly into two main
            subsidiary fields: human geography and physical geography. The
            former largely focuses on the built environment and how humans
            create, view, manage, and influence space. The latter examines the
            natural environment, and how organisms, climate, soil, water, and
            landforms produce and interact.
          </p>
          <p>
            The difference between these approaches led to a third field,
            environmental geography, which combines physical and human geography
            and concerns the interactions between the environment and humans.
          </p>
          <p>
            The accompanying text mentions seven outer regions beyond the
            encircling ocean. The descriptions of five of them have survived. In
            contrast to the Imago Mundi, an earlier Babylonian world map dating
            back to the 9th century BC depicted Babylon as being further north
            from the center of the world, though it is not certain what that
            center was supposed to represent.
          </p>
        </TextContinuation>
      </TextWrapper>
      <CarouselWrapper>
        <Arrow direction="left" onClick={prevSlide}>◀⏪</Arrow>
        <SlideImage src="{images[current]} alt={`Slide ${current +1}`}"/>
        <Arrow direction="right" onClick={nextSlide}>⏩▶</Arrow>
        <Dots>
          {images.map((_, index) =>(
            <Dot key={index} active={index ===current} onClick={()=>setCurrent(index)}/>
          ))}
        </Dots>

      </CarouselWrapper>
    </AppWropper>
  );
};

export default Geograpy;
