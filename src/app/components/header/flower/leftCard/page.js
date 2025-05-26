"use client";
import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 43.1rem;
background-color: #262D33;
`;

const LeftCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 34.6rem;
height: 35.6rem;
background-image: url("/CarrouselLeft1.png");
background-size: cover;
background-color:rgb(135, 145, 154);
`;

const Hot = styled.div`
background-ima
`;

const HotClick = styled.div``;

const Avatar = styled.div``;

const HeaderText = styled.div``;

const Carousel = styled.div``;

const SliderAlt = styled.div``;

const ImageOne = styled.div``;

const ImageTwo = styled.div``;

const ImageThree = styled.div``;

const RightCard = styled.div``;

const Careers = styled.div``;

const InfoCard = styled.div``;

const IsCofee = styled.div``;

const Manufaktura = styled.div``;

const ButtonCareers = styled.button``;

const WineCarouselCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CardContainer>
      <LeftCard>
        <Hot>
          <HotClick>Hot</HotClick>
        </Hot>
        <Avatar>
          <img src="/rec office.png" alt="Avatar" className="avatarka" />
          <p className="name">By Sarah Jenkins</p>
          <p className="work">Photographer</p>
        </Avatar>
        <HeaderText>
          Readers' Choice winners: Your wine country favorites
        </HeaderText>
        <Carousel>
          <h3>Photo carousel</h3>
          <SliderAlt {...settings}>
            <ImageOne>
              <img src="0" alt="Slide 1" />
            </ImageOne>
            <ImageTwo>
              <img src="0" alt="Slide 1" />
            </ImageTwo>
            <ImageThree>
              <img src="0" alt="Slide 1" />
            </ImageThree>
          </SliderAlt>
        </Carousel>
        <Slider {...settings}>
          <div>
            <img src="/images/flower1.jpg" alt="Flower 1" />
          </div>
          <div>
            <img src="/images/flower2.jpg" alt="Flower 2" />
          </div>
          <div>
            <img src="/images/flower3.jpg" alt="Flower 3" />
          </div>
        </Slider>
      </LeftCard>
      <RightCard>
        <Careers>
          <p className="careers">CAREERS</p>
          <h3 className="Interview">
            Had a Job Interview but No Callback? Here’s What to Do
          </h3>
          <p>
            Try to understand the culture of the company where you want to work
            and be authentic in your interview, experts emphasize
          </p>
          <ButtonCareers>Read more ➡</ButtonCareers>
        </Careers>
        <InfoCard>
          <IsCofee>
            <h5 className="header"></h5>
            <p className="info"></p>
            <p className="data"></p>
          </IsCofee>
          <Manufaktura>
            <h5 className="header"></h5>
            <p className="info"></p>
            <p className="data"></p>
          </Manufaktura>
        </InfoCard>
      </RightCard>
    </CardContainer>
  );
};

export default WineCarouselCard;
