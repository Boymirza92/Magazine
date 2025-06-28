"use client";
import React from "react";
import styled from "styled-components";

// === STYLES ===

const AppWropper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-top: 5rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20%;
  width: 100%;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 5rem;
    color:rgb(179, 115, 235);
  }
`;

const Anderson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  background-color: rgb(246, 238, 237);
  border-radius: 1rem;
  position: absolute;
    top: 43rem;
  `;


const TextContinuation = styled.div``;


const AboutMe = styled.div``;

const SticialMedia = styled.div``;

// === COMPONENT ===

const geograpy = () => {
  return (
    <AppWropper>
      <TextWrapper>
        <TextColumn>
          <h1>M</h1>
          <p>
            any geographers are trained in toponymy and cartology, this
            is not their main preoccupation. Geographers study the space and the
            temporal database distribution of phenomena,
          </p>
           <Anderson>
          <AboutMe>
            <img src="/anderson.png" alt="Anderson" />
            <h2>Mira Anderson</h2>
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
          <h6>Follow on Universal</h6>
        </Anderson>
        </TextColumn>
        <TextContinuation>
          <p>
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
    </AppWropper>
  );
};

export default geograpy;
