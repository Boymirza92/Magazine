"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

// ==== STYLES ==== //

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  padding: 2rem;
  margin-top: -3rem;
  text-align: center;
  box-sizing: border-box;
  gap: 3rem;
`;

const Registration = styled.div`
  margin-top: 2rem;

  h1 {
    color: rgb(49, 49, 51);
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 18rem;
  height: 2.5rem;
  background-color: inherit;

  &:focus {
    outline: none;
    border-color: #0070f3;
    color: black;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 1.3rem;
  font-size: 1rem;
  cursor: pointer;
  height: 2.5rem;
  width: 8rem;

  &:hover {
    background-color: #005ec2;
  }
  &:active {
    transform: scale(0.98);
    background-color: #005ea1;
  }
`;
// === NAVIGATOR FOOTER === //

const NavigationFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 71rem;
  height: 15rem;
  margin-top: 2rem;
`;

const News = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 11.82rem;
  height: auto;
  padding-top: 2rem;
  border-top: 5px solid red;

  &:hover {
    color: rgb(58, 74, 89);
  }

  h4 {
    color: #4b5157;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    /* cursor: pointer; */

    &:hover {
      color: rgb(28, 37, 45);
      font-size: 0.83rem;
      cursor: pointer;
    }
  }
`;

const NewLink = styled(Link)`
  color: #262d33;
  font-size: 0.7rem;
  margin-bottom: 0.3rem;

  &:hover {
    font-size: 0.71rem;
    color: rgb(86, 86, 94);
  }
`;

const Arts = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 11.82rem;
  height: auto;
  padding-top: 2rem;
  border-top: 5px solid #ac8ee3;

  h4 {
    color: #4b5157;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;

    &:hover {
      color: rgb(28, 37, 45);
      font-size: 0.83rem;
      cursor: pointer;
    }
  }
`;

const Travel = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 11.82rem;
  height: auto;
  padding-top: 2rem;
  border-top: 5px solid rgb(142, 93, 234);

  h4 {
    color: #4b5157;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;

    &:hover {
      color: rgb(28, 37, 45);
      font-size: 0.83rem;
      cursor: pointer;
    }
  }
`;

const Sports = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 11.82rem;
  height: auto;
  padding-top: 2rem;
  border-top: 5px solid rgb(181, 183, 107);

  h4 {
    color: #4b5157;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;

    &:hover {
      color: rgb(28, 37, 45);
      font-size: 0.83rem;
      cursor: pointer;
    }
  }
`;

const Tech = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 11.82rem;
  height: auto;
  padding-top: 2rem;
  border-top: 5px solid rgb(233, 36, 46);

  h4 {
    color: #4b5157;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;

    &:hover {
      color: rgb(28, 37, 45);
      font-size: 0.83rem;
      cursor: pointer;
    }
  }
`;

const Moneys = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 11.82rem;
  height: auto;
  padding-top: 2rem;
  border-top: 5px solid rgb(74, 61, 100);

  h4 {
    color: #4b5157;
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 1rem;

    &:hover {
      color: rgb(28, 37, 45);
      font-size: 0.83rem;
      cursor: pointer;
    }
  }
`;

// === NETWORK === //

const SocialNetwork = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 71rem;
  border-top: 2px solid #d9dadb;
  border-bottom: 2px solid #d9dadb;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const SocialNavigation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  color: #4b5157;
  gap: 2rem;
  letter-spacing: 0.2px;
  font-weight: 600;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  color: rgb(246, 248, 250);
  background-color: #4592ff;
  border-radius: 50%;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: #3578e5;
  }
`;

const NetworkLink = styled.div`
  cursor: pointer;

  &:hover {
    color: rgb(32, 37, 43);
  }
`;

const SocialLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;

  a img {
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease;
    }
  }
`;

const AboutMe = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 71rem;
  color: rgb(166, 173, 180);

  .text {
    text-align: left;
    width: 44rem;
    font-size: 0.8rem;
    line-height: 1.5;
    margin-right: 2rem;
  }

  .data {
    text-align: left;
    font-size: 0.8rem;
  }
`;

// ==== FOOTER COMPONENT ====

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Form submitted with email:", email);
  };

  return (
    <FooterContainer>
      <Registration>
        <h1>Subscribe now and get 20% off</h1>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <Button type="submit">Subscribe</Button>
        </Form>
      </Registration>
      <NavigationFooter>
        <News>
          <h4>News</h4>
          <NewLink href="/">Nation</NewLink>
          <NewLink href="/">World</NewLink>
          <NewLink href="/">Politics</NewLink>
          <NewLink href="/">Solar Eclipse</NewLink>
        </News>
        <Arts>
          <h4>Art</h4>
          <NewLink href="/">Ars & Design</NewLink>
          <NewLink href="/">movies</NewLink>
          <NewLink href="/">People</NewLink>
          <NewLink href="/">Vide: Art</NewLink>
          <NewLink href="/">Theater</NewLink>
        </Arts>
        <Travel>
          <h4>Travel</h4>
          <NewLink href="/">Destination</NewLink>
          <NewLink href="/">Flights</NewLink>
          <NewLink href="/">Business Travel</NewLink>
        </Travel>
        <Sports>
          <h4>Sports</h4>
          <NewLink href="/">Olymplics</NewLink>
          <NewLink href="/">Motor Sports</NewLink>
          <NewLink href="/">Volleyball</NewLink>
          <NewLink href="/">MMA</NewLink>
          <NewLink href="/">Cycling</NewLink>
        </Sports>
        <Tech>
          <h4>Tech</h4>
          <NewLink href="/">Tech</NewLink>
          <NewLink href="/">Tech Columnists</NewLink>
          <NewLink href="/">Tech reviews</NewLink>
          <NewLink href="/">Talking Tech</NewLink>
        </Tech>
        <Moneys>
          <h4>Moneys</h4>
          <NewLink href="/">Markets</NewLink>
          <NewLink href="/">Business</NewLink>
          <NewLink href="/">Personal Finance</NewLink>
          <NewLink href="/">Retirement</NewLink>
          <NewLink href="/">Careers</NewLink>
        </Moneys>
      </NavigationFooter>
      <SocialNetwork>
        <SocialNavigation>
          <Logo>JNV</Logo>
          <NetworkLink>CONTACT US</NetworkLink>
          <NetworkLink>WORK WITH US</NetworkLink>
          <NetworkLink>ADVERTISE</NetworkLink>
          <NetworkLink>YOUR AD CHOISE</NetworkLink>
        </SocialNavigation>
        <SocialLogo>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagramm.png" alt="Instagram" width="40" height="40" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/fecebook.png" alt="Facebook" width="40" height="40" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.png" alt="Twitter" width="40" height="40" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/you tube.png" alt="Youtube" width="40" height="40" />
          </a>
        </SocialLogo>
      </SocialNetwork>

      <AboutMe>
        <p className="text">
          Universal’s business concept is to offer fashion and quality at the
          best price in a sustainable way. Universal has since it was founded in
          2015 grown into one of the world's leading fashion companies.{" "}
        </p>
        <p className="data">© 2019 Universal UI Kit</p>
      </AboutMe>
    </FooterContainer>
  );
};

export default Footer;
