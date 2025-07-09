"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

// === STYLES ===

const AppWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  /* max-width: 75rem; */
  margin-top: 5rem;
  font-size: 1rem;
  color: #4b5157;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 12rem;
  width: 39rem;
  height: 100vh;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: 5.2rem;
    margin: -1.3rem 2px 0 0;
    color: rgb(179, 115, 235);
  }
`;

// == ABOUT ME ==

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

const SocialMedia = styled.div`
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

// === CAROUSEL STYLES ===

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  /* border-radius: 0.5rem; */
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: inherit;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 2;

  ${(props) =>
    props.direction === "left"
      ? "left: 11rem;"
      : props.direction === "right"
      ? "right: 11rem;"
      : ""}
`;

const SlideImage = styled.img`
  width: 80%;
  height: 35rem;
  max-width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  border: 2px solid rgb(224, 221, 227);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  .text {
    margin-left: -3rem;
  }
`;

const Photographer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-left: 2px solid rgb(207, 202, 212);
  padding-left: 1rem;

  img {
    width: 3rem;
    border-radius: 50%;
    cursor: pointer;
  }

  .phatographer {
    padding-top: 0.5rem;
    line-height: 1.2rem;

    span {
      font-size: 0.9rem;
      color: rgb(156, 133, 177);
    }
  }
`;

// === HISTORY ===

const HistoryInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 3rem;
`;

const HistoryText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 5rem;
`;

const TextConainer = styled.div`
  width: 36rem;
  font-size: 1.1rem;
`;

const MaterialOnTheme = styled.div`
  width: 16.5rem;
  font-size: 1.1rem;
  margin-top: 3rem;

  h1 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  img {
    border-radius: 0.5rem;
    cursor: pointer;
    width: 100%;
    height: 11.2rem;

    &:hover {
      transform: scale(1.02);
      transition: transform 0.3s ease;
    }
  }

  h2 {
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }

  p {
    font-size: 0.9rem;

    span {
      font-size: 0.7rem;
      margin-right: 1.5rem;

      img.seen {
        width: 1rem;
        height: 0.6rem;
      }

      .comment {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;

// === NAMES OF PLACES ===

const NamesOfPlaces = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

const GeograTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 11rem;
  margin-left: 18.5rem;
  gap: 3rem;
`;

const StyledHeadr = styled.h1`
  font-size: 1.5rem;
  width: 28.6rem;
  height: 1rem;
  font-weight: 700;
`;

const William = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;

  p {
    font-size: 0.9rem;

    span {
      font-size: 0.8rem;
      color: rgb(156, 133, 177);
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Styledtext = styled.div`
  width: 40rem;
  margin: 3rem 18.5rem;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
  margin: 1rem 18.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #444;
  font-weight: 500;
  border: 2px solid #d9dadb;
  padding: 0 1rem;
  border-radius: 4px;
  &:hover {
    transform: scaleX(1.05);
    box-shadow: #444 1px 2px 2px;
    transition: transform 0.15s ease;
    background-color: rgb(226, 228, 229);
    border-color: rgb(195, 219, 231);
  }
`;

// === SHOW YOUR SUPPORT ===

const ShowYourSupport = styled.div`
  width: 100%;
  margin-left: 18.5rem;
  /* border-top: 1px solid; */

   &::before {
    content: "";
    width: 50rem;
    height: 1.5px;
    background: #ccc;
    margin: 3rem 0 1rem 0;
    display: block;
   }

  h1{
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const ThroughSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

const LikeIt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 2.5rem;
  gap: 0.5rem;
  cursor: pointer;
  background-color: rgb(136, 130, 130);
  border-radius: 3rem;
  font-size: 0.9rem;

  img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.4rem;

    span {
      font-size: 0.9rem;
      color: white;
    }
  }

  &:hover {
    transform: scaleX(1.1);
    transition: transform 0.1s ease;
    background-color: rgb(104, 92, 92);
  }
`;

const Faceebook = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 2.5rem;
  gap: 0.5rem;
  cursor: pointer;
  background-color: #4267b2;
  border-radius: 3rem;
  font-size: 0.9rem;

  img {
    width: 1.5rem;
    height: 1.5rem;

    span {
      font-size: 0.9rem;
      color: white;
    }
  }

  &:hover {
    transform: scaleX(1.1);
    transition: transform 0.1s ease;
    background-color: rgb(48, 85, 158);
  }
`;

const Twitter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 8.5rem;
  height: 2.5rem;
  gap: 0.5rem;
  cursor: pointer;
  background-color: rgb(111, 152, 234);
  border-radius: 3rem;
  font-size: 0.9rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    transform: scaleX(1.1);
    transition: transform 0.1s ease;
    background-color: rgb(76, 129, 234);
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  color: rgb(253, 245, 245);

  span {
    font-size: 0.8rem;
    color: rgb(206, 200, 200);
  }
`;

const More = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointor;

  &:hover{
    transform: scale(1.1);
  }
`;

const Menu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0.8rem;
  background: white;
  padding: 8px 0;
  list-style: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 10;

  
  display: ${(props) => (props.$open ? "block" : "none")};
`;

const MenuItem = styled.li`
  padding: 8px 16px;


  &:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
    color: #333333;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

const LinkStyled = styled.a``;

const Geography = () => {
  const images = ["/carouselImage.png", "/Dengiz1.jpg", "/flover.png"];

  const [current, setCurrent] = useState(0);

  const [open, setOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <AppWrapper>
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
            <SocialMedia>
              <a href="https://www.instagram.com/mira_anderson/">
                <img src="/instagramm.png" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/mira_anderson/">
                <img src="/fecebook.png" alt="Fecebook" />
              </a>
              <a href="https://www.twitter.com/mira_anderson/">
                <img src="/twitter.png" alt="Twitter" />
              </a>
            </SocialMedia>
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
        <Arrow direction="left" onClick={prevSlide}>
          <span>
            <img src="/slideleft.png" style={{ width: "3rem" }} />
          </span>
        </Arrow>
        <SlideImage src={images[current]} alt={`Slide ${current + 1}`} />
        <Arrow direction="right" onClick={nextSlide}>
          <span>
            <img src="/slideright.png" style={{ width: "3rem" }} />
          </span>
        </Arrow>
        <Info>
          <p className="text">
            Geostatistics deal with quantitative data analysis, specifically the
            application of statistical methodology
          </p>
          <Photographer>
            <img src="/devid.png" alt="Photographer" />
            <p className="phatographer">
              Andrev Washington <br /> <span>Photographer</span>
            </p>
          </Photographer>
        </Info>
      </CarouselWrapper>
      <HistoryInfo>
        <HistoryText>
          <TextConainer>
            <p>
              The oldest known world maps date back to ancient Babylon from the
              9th century BC. The best known Babylonian world map, however, is
              the Imago Mundi of 600 BC. The map as reconstructed by Eckhard
              Unger shows Babylon on the Euphrates, surrounded by a circular
              landmass showing Assyria, Urartu and several cities, in turn
              surrounded by a "bitter river" (Oceanus), with seven islands
              arranged around it so as to form a seven-pointed star.
            </p>
            <p>
              The accompanying text mentions seven outer regions beyond the
              encircling ocean. The descriptions of five of them have survived.
              In contrast to the Imago Mundi, an earlier Babylonian world map
              dating back to the 9th century BC depicted Babylon as being
              further north from the center of the world, though it is not
              certain what that center was supposed to represent.
            </p>
            <p>
              The ideas of Anaximander: considered by later Greek writers to be
              the true founder of geography, come to us through fragments quoted
              by his successors. Anaximander is credited with the invention of
              the gnomon, the simple, yet efficient Greek instrument that
              allowed the early measurement of latitude. Thales is also credited
              with the prediction of eclipses. The foundations of geography can
              be traced to the ancient cultures, such as the ancient, medieval,
              and early modern Chinese.
            </p>
          </TextConainer>
          <MaterialOnTheme>
            <h1>Material On Theme</h1>
            <img src="/jirafa.png" alt="Jirafa" />
            <h2>Application of Postcolonial Theory in the Middle East</h2>
            <p>
              In the essays "Overstating the Arab State", by Nazih Ayubi, and
              "Is Jordan Palestine?", by Raphael Israel, the authors deal with
              the psychologically fragmented postcolonial identity.
            </p>
            <p className="comment">
              <span>
                <img src="/seen.png" alt="Seen" className="seen" /> 1625
              </span>
              <span>
                <img src="/comment.png" alt="comment" className="comment" />{" "}
                1625
              </span>
            </p>
          </MaterialOnTheme>
        </HistoryText>
        <NamesOfPlaces>
          <GeograTitle>
            <StyledHeadr>
              Names of places... are not geography... know by heart a whole
              gazetteer full of them would not, in itself, constitute anyone
              a geographer. Geography has higher aims than this: it seeks to
              classify phenomena.
            </StyledHeadr>
            <William>
              <img src="/devid.png" alt="William" />
              <p>
                William Peterson <br />
                <span>Travel Agent</span>
              </p>
            </William>
          </GeograTitle>
          <Styledtext>
            <p>
              The Greeks, who were the first to explore geography as both art
              and science, achieved this through Cartography, Philosophy, and
              Literature, or through Mathematics. There is some debate about who
              was the first person to assert that the Earth is spherical in
              shape, with the credit going either to Parmenides or Pythagoras.
              Anaxagoras was able to demonstrate that the profile of the Earth
              was circular by explaining eclipses. However, he still believed
              that the Earth was a flat disk, as did many of his contemporaries.
            </p>
            <p>
              The first rigorous system of latitude and longitude lines is
              credited to Hipparchus. He employed a sexagesimal system that was
              derived from Babylonian mathematics.
            </p>
          </Styledtext>
          <Navbar>
            <NavLink href="/#">Travel</NavLink>
            <NavLink href="/#">Destinations</NavLink>
            <NavLink href="/#">Nature</NavLink>
            <NavLink href="/#">World</NavLink>
            <NavLink href="/#">Alaska</NavLink>
          </Navbar>
        </NamesOfPlaces>
        <ShowYourSupport>
          <h1>Show Your Support</h1>
          <ThroughSocialMedia>
            <LikeIt>
              <SocialLink href="#">
                <img src="/like icon.png" />
                Like it <span>42</span>
              </SocialLink>
            </LikeIt>
            <Faceebook>
              <SocialLink href="www.faceebook.com">
                <img src="/fecebook.png" />
                Share <span>80</span>
              </SocialLink>
            </Faceebook>
            <Twitter>
              <SocialLink href="www.twitter.com">
                <img src="/twitter.png" />
                Tweet <span>33</span>
              </SocialLink>
            </Twitter>
            <More>
              <DropdownButton onClick={() => setOpen(!open)}>
                <img src="/More.png" alt="More" />
              </DropdownButton>
              <Menu $open={open}>
                <MenuItem>
                  <LinkStyled href="www.telegramm.com">
                    <img src="/telegram.png" alt="Telegramm" />
                  </LinkStyled>
                </MenuItem>
                <MenuItem>
                  <LinkStyled href="www.instagramm.com">
                    <img src="/instagramm.png" alt="Instagramm" />
                  </LinkStyled>
                </MenuItem>
                <MenuItem>
                  <LinkStyled href="www.youtube.com">
                    <img src="/you tube.png" alt="You Tube" />
                  </LinkStyled>
                </MenuItem>
              </Menu>
            </More>
          </ThroughSocialMedia>
        </ShowYourSupport>
      </HistoryInfo>
    </AppWrapper>
  );
};

export default Geography;
