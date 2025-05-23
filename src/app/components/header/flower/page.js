"use client";
import React from "react";
import styled from "styled-components";

// FLOWER

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #edeff0;
`;

const FlowerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 17rem;
  background-image: url("/flover.png");
  background-size: cover;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px #000000;
`;

const Button = styled.button`
  color: #fff;
  background-color: rgb(67, 173, 226);
  border: none;
  width: 10rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin-top: 2rem;

  &:hover {
    background-color: rgb(25, 155, 210);
    transition: all 0.2s ease;
    color: black;
    // transition: all 0.2s ease;
  }
`;

//NEWS

const InterestingNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 73%;
  border-radius: 1rem;
  margin-top: 3rem;
  margin-left: 12.4rem;
`;

const News = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  border-radius: 1rem;
  background-color: #fff;
  padding: 1.5rem;
`;

const FlightCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 53rem;
  height: 17rem;
  margin: 0 1rem 1rem 0;
`;

const Image = styled.div`
  .airlines {
    width: 21rem;
    height: 15rem;
  }
`;

const Flight = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 2rem;
  padding: 1rem;
`;

const FlightText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    color: rgb(84, 112, 151);
    font-size: 0.8rem;
  }

  .bookmark {
    width: 0.8rem;
    height: 1rem;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease;
    }
  }
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30rem;
  height: 12rem;

  .header {
    width: 100%;
    color: rgb(24, 30, 38);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text {
    height: 5rem;
    font-size: 0.8rem;
    color: rgb(70, 100, 142);
  }
`;

const Comment = styled.div`
  width: 31rem;
  height: 2rem;
  color: rgb(47, 54, 63);

  span {
    font-size: 0.8rem;
    padding-right: 1rem;
  }

  .comment {
    width: 1.5rem;
    padding-right: 0.4rem;
  }

  .like {
    width: 1.7rem;
    padding-right: 0.4rem;
    margin-top: -0.1rem;
  }
`;

//FOOD

const FoodCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 53rem;
  height: 17rem;
  margin: 0 1rem 1rem 0;
`;

const ImageFood = styled.div`
  .airlines {
    width: 21rem;
    height: 15rem;
  }
`;

const Food = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 2rem;
  padding: 1rem;
`;

const FoodText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    color: rgb(84, 112, 151);
    font-size: 0.8rem;
  }

  .bookmark {
    width: 0.8rem;
    height: 1rem;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease;
    }
  }
`;

const FoodHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30rem;
  height: 12rem;

  .header {
    width: 100%;
    color: rgb(24, 30, 38);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text {
    height: 5rem;
    font-size: 0.8rem;
    color: rgb(70, 100, 142);
  }
`;

const CommentFood = styled.div`
  width: 31rem;
  height: 2rem;
  color: rgb(47, 54, 63);

  span {
    font-size: 0.8rem;
    padding-right: 1rem;
  }

  .comment {
    width: 1.5rem;
    padding-right: 0.4rem;
  }

  .like {
    width: 1.7rem;
    padding-right: 0.4rem;
    margin-top: -0.1rem;
  }
`;

//SCIENCEcARD

const ScienceCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 53rem;
  height: 17rem;
  margin: 0 1rem 1rem 0;
`;

const ImageScience = styled.div`
  .airlines {
    width: 21rem;
    height: 15rem;
  }
`;

const Science = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 2rem;
  padding: 1rem;
`;

const SciancText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    color: rgb(84, 112, 151);
    font-size: 0.8rem;
  }

  .bookmark {
    width: 0.8rem;
    height: 1rem;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease;
    }
  }
`;

const ScianText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30rem;
  height: 12rem;

  .header {
    width: 100%;
    color: rgb(24, 30, 38);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text {
    height: 5rem;
    font-size: 0.8rem;
    color: rgb(70, 100, 142);
  }
`;

const CommentScian = styled.div`
  width: 31rem;
  height: 2rem;
  color: rgb(47, 54, 63);

  span {
    font-size: 0.8rem;
    padding-right: 1rem;
  }

  .comment {
    width: 1.5rem;
    padding-right: 0.4rem;
  }

  .like {
    width: 1.7rem;
    padding-right: 0.4rem;
    margin-top: -0.1rem;
  }
`;

//HEALTH CARD

const HealtCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 53rem;
  height: 17rem;
  margin: 0 1rem 1rem 0;
`;

const ImageHealt = styled.div`
  .airlines {
    width: 21rem;
    height: 15rem;
  }
`;

const Healt = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 2rem;
  padding: 1rem;
`;

const HealtText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    color: rgb(84, 112, 151);
    font-size: 0.8rem;
  }

  .bookmark {
    width: 0.8rem;
    height: 1rem;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }
`;

const TextHealt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30rem;
  height: 12rem;

  .header {
    width: 100%;
    color: rgb(24, 30, 38);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text {
    height: 5rem;
    font-size: 0.8rem;
    color: rgb(70, 100, 142);
  }
`;

const CommentHealt = styled.div`
  width: 31rem;
  height: 2rem;
  color: rgb(47, 54, 63);

  span {
    font-size: 0.8rem;
    padding-right: 1rem;
  }

  .comment {
    width: 1.5rem;
    padding-right: 0.4rem;
  }

  .like {
    width: 1.7rem;
    padding-right: 0.4rem;
    margin-top: -0.1rem;
  }
`;

//FLOWER CARD

const FlowerCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 53rem;
  height: 17rem;
  margin: 0 1rem 1rem 0;
`;

const FlowerImg = styled.div`
  .airlines {
    width: 21rem;
    height: 15rem;
  }
`;

const Flowers = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 2rem;
  padding: 1rem;
`;

const ScianseText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    color: rgb(84, 112, 151);
    font-size: 0.8rem;
  }

  .bookmark {
    width: 0.8rem;
    height: 1rem;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }
`;

const TextFlower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30rem;
  height: 12rem;

  .header {
    width: 100%;
    color: rgb(24, 30, 38);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text {
    height: 5rem;
    font-size: 0.8rem;
    color: rgb(70, 100, 142);
  }
`;

const CommentFlower = styled.div`
  width: 31rem;
  height: 2rem;
  color: rgb(47, 54, 63);

  span {
    font-size: 0.8rem;
    padding-right: 1rem;
  }

  .comment {
    width: 1.5rem;
    padding-right: 0.4rem;
  }

  .like {
    width: 1.7rem;
    padding-right: 0.4rem;
    margin-top: -0.1rem;
  }
`;

//ART & DESINGER

const ArtCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 53rem;
  height: 17rem;
  margin: 0 1rem 1rem 0;
`;

const ArtImage = styled.div`
  .airlines {
    width: 21rem;
    height: 15rem;
  }
`;

const Art = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  height: 2rem;
  padding: 1rem;
`;

const ArtDesinger = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    color: rgb(84, 112, 151);
    font-size: 0.8rem;
  }

  .bookmark {
    width: 0.8rem;
    height: 1rem;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }
`;

const DesingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 30rem;
  height: 12rem;

  .header {
    width: 100%;
    color: rgb(24, 30, 38);
    font-size: 1.25rem;
    font-weight: bold;
  }

  .text {
    height: 5rem;
    font-size: 0.8rem;
    color: rgb(70, 100, 142);
  }
`;

const CommentArt = styled.div`
  width: 31rem;
  height: 2rem;
  color: rgb(47, 54, 63);

  span {
    font-size: 0.8rem;
    padding-right: 1rem;
  }

  .comment {
    width: 1.5rem;
    padding-right: 0.4rem;
  }

  .like {
    width: 1.7rem;
    padding-right: 0.4rem;
    margin-top: -0.1rem;
  }
`;

//RECOMMENDET

const Recommendet = styled.div`
  width: 13.5rem;
  height: 48rem;
  background-color: #fff;
  border-radius: 1rem;
  margin-left: 1.5rem;
`;

const RecomYou = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 0.01px solid #aaa;

  h4 {
    font-weight: bold;
    color: rgb(24, 30, 38);
    letter-spacing: 0.02px;
    font-size: 0.8rem;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
`;

const Office = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(198, 198, 222);
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;

const OfficeImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const PostText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const Muzic = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(198, 198, 222);
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;

const BirImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const MuzicText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const Google = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(198, 198, 222);
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;

const HandImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const GooglText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const Homes = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(198, 198, 222);
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;

const ManImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const HomesText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const AreYou = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(198, 198, 222);
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;

const TableImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const YouText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const TheNew = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(198, 198, 222);
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }
`;

const FenceImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const TheNewText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const Sunday = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease;
  }

  .text {
    font-size: 0.7rem;
    color: rgb(24, 30, 38);
  }

  .time {
    margin-top: -0.5rem;
    color: #aaa;
    font-size: 0.6rem;
  }
`;

const BattleImage = styled.div`
  .avatarka {
    width: 3.5rem;
  }
`;

const SundayText = styled.div`
  width: 7.5rem;
  padding-left: 0.5rem;
  letter-spacing: 0.3px;
`;

const ButtonMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  font-size: 0.9rem;
  background-color: inherit;
  border: none;
  padding-top: 0.5rem;
  border-top: 1px solid rgb(198, 198, 222);

  color: rgb(18, 19, 20);

  &:hover {
    font-size: 1rem;
    color: rgb(65, 74, 84);
    transition: all 0.2s ease;
  }
`;

const Flower = () => {
  return (
    <NewsContainer>
      <FlowerImage>
        <Header>
          The Big Bloom or «How Flowering <br />
          Plants Changed the World»
        </Header>
        <Button>Read more ➡</Button>
      </FlowerImage>
      <InterestingNews>
        <News>
          <FlightCart>
            <Image>
              <img src="/airlans.png" alt="Flower" className="airlines" />
            </Image>
            <Flight>
              <FlightText>
                <p>FLIGHTS</p>
                <img src="/Bookmark.png" alt="Bookmark" className="bookmark" />
              </FlightText>

              <TextHeader>
                <h2 className="header">
                  Passengers Suffer as Crowded Field Puts Pressure on Europe’s
                  Airlines
                </h2>
                <p className="text">
                  Weaker carriers have fallen by the wayside amid fierce
                  competition, while others have been hit by bad luck. The
                  result: thousands of canceled flights.
                </p>
                <Comment>
                  <span>Aug 6</span>
                  <img src="/Comment.png" alt="Comment" className="comment" />
                  <span>27</span>
                  <img src="/like icon.png" alt="Like" className="like" />
                  <span>233</span>
                </Comment>
              </TextHeader>
            </Flight>
          </FlightCart>
          <FoodCart>
            <ImageFood>
              <img src="/non.png" alt="non" className="airlines" />
            </ImageFood>
            <Food>
              <FoodText>
                <p>Food</p>
                <img src="/Bookmark.png" alt="Bookmark" className="bookmark" />
              </FoodText>
              <FoodHeader>
                <h2 className="header">
                  Three Courses, 20 Euros: The Affordable Dining Renaissance in
                  Paris
                </h2>
                <p className="text">
                  The Los Angeles area, for all of its culinary diversity, has
                  not historically been thought of as a haven for bread lovers.
                  The area has a reputation as a place where gluten fears to
                  tread.
                </p>
                <CommentFood>
                  <span>Noy 3</span>

                  <img src="/Comment.png" alt="Comment" className="comment" />
                  <span>12</span>
                  <img src="/like icon.png" alt="Like" className="like" />
                  <span>133</span>
                </CommentFood>
              </FoodHeader>
            </Food>
          </FoodCart>
          <ScienceCart>
            <ImageScience>
              <img src="/daraxtlar.png" alt="Daraxtlar" className="airlines" />
            </ImageScience>
            <Science>
              <SciancText>
                <p>SCIENCE</p>
                <img src="/Bookmark.png" alt="Bookmark" className="bookmark" />
              </SciancText>
              <ScianText>
                <h2 className="header">
                  Forests Protect the Climate. A Future With More Storms Would
                  Mean Trouble.
                </h2>
                <p className="text">
                  With an increase in extreme weather expected in the years to
                  come, forests could be changed permanently as the world
                  continues to warm
                </p>
                <CommentScian>
                  <span>Jan 12</span>
                  <img src="/Comment.png" alt="Comment" className="comment" />
                  <span>21</span>
                  <img src="/like icon.png" alt="Like" className="like" />
                  <span>323</span>
                </CommentScian>
              </ScianText>
            </Science>
          </ScienceCart>
          <HealtCart>
            <ImageHealt>
              <img src="/chomilish.png" alt="cho'milish" className="airlines" />
            </ImageHealt>
            <Healt>
              <HealtText>
                <p>HEALTH</p>
                <img src="/Bookmark.png" alt="Bookmark" className="bookmark" />
              </HealtText>
              <TextHealt>
                <h2 className="header">
                  How the Shape of Your Ears Affects What You Hear
                </h2>
                <p className="text">
                  We’re able to locate sound because our brains grasp the shape
                  of our ears. When that shape changes, we need time and
                  practice to adapt. Ears are a peculiarly individual piece of
                  anatomy.
                </p>
                <CommentHealt>
                  <span>Feb 2</span>
                  <img src="/Comment.png" alt="Comment" className="comment" />
                  <span>12</span>
                  <img src="/like icon.png" alt="Like" className="like" />
                  <span>12,3</span>
                </CommentHealt>
              </TextHealt>
            </Healt>
          </HealtCart>
          <FlowerCart>
            <FlowerImg>
              <img src="/gul.png" alt="Flower" className="airlines" />
            </FlowerImg>
            <Flowers>
              <ScianseText>
                <p>SCIENCE</p>
                <img src="/Bookmark.png" alt="Bookmark" className="bookmark" />
              </ScianseText>
              <TextFlower>
                <h2 className="header">
                  Watch the High-Flying Physics of a Plant’s Exploding Fruits
                </h2>
                <p className="text">
                  Three undergradute physics majors and their professor worked
                  out how the hairyflower wild petunia shoots tiny seeds more
                  than 20 feet through the air
                </p>
                <CommentFlower>
                  <span>Mar 21</span>
                  <img src="/Comment.png" alt="Comment" className="comment" />
                  <span>30</span>
                  <img src="/like icon.png" alt="Like" className="like" />
                  <span>155</span>
                </CommentFlower>
              </TextFlower>
            </Flowers>
          </FlowerCart>
          <ArtCart>
            <ArtImage>
              <img src="/bino.png" alt="Bino" className="airlines" />
            </ArtImage>
            <Art>
              <ArtDesinger>
                <p>ART & DESINGER</p>
                <img src="/Bookmark.png" alt="Bookmark" className="bookmark" />
              </ArtDesinger>
              <DesingText>
                <h2 className="header">
                  New Contemporary Institute Reverberates in Richmond’s Historic
                  Landscape
                </h2>
                <p className="text">
                  The center, which will open in April, takes a bold look at
                  race and other social issues that still resonate in the region
                  as well as the nation. A new Institute for Contemporary Art is
                  set to open.
                </p>
                <CommentArt>
                  <span>Aug 28</span>
                  <img src="/Comment.png" alt="Comment" className="comment" />
                  <span>199</span>
                  <img src="/like icon.png" alt="Like" className="like" />
                  <span>512</span>
                </CommentArt>
              </DesingText>
            </Art>
          </ArtCart>
        </News>
        <Recommendet>
          <RecomYou>
            <h4>RECOMMENDET FOR YOU</h4>
          </RecomYou>
          <Posts>
            <Office>
              <OfficeImage>
                <img src="/rec office.png" alt="" className="avatarka" />
              </OfficeImage>
              <PostText>
                <p className="text">Office Meetings Leave the Office</p>
                <p className="time">32 minuts ago</p>
              </PostText>
            </Office>
            <Muzic>
              <BirImage>
                <img src="/rec exper.png" alt="" className="avatarka" />
              </BirImage>
              <MuzicText>
                <p className="text">Experimental Vocal Music in Brooklyn</p>
                <p className="time">32 minuts ago</p>
              </MuzicText>
            </Muzic>
            <Google>
              <HandImage>
                <img src="/rec googles.png" alt="" className="avatarka" />
              </HandImage>
              <GooglText>
                <p className="text">Google’s Influence Over Think Tanks</p>
                <p className="time">38 minuts ago</p>
              </GooglText>
            </Google>
            <Homes>
              <ManImage>
                <img src="/rec homens.png" alt="" className="avatarka" />
              </ManImage>
              <HomesText>
                <p className="text">Homes for Sale in NYC and Connecticut</p>
                <p className="time">53 minuts ago</p>
              </HomesText>
            </Homes>
            <AreYou>
              <TableImage>
                <img src="/rec are you.png" alt="" className="avatarka" />
              </TableImage>
              <YouText>
                <p className="text">Are You There, Dad? It’s Me, Alice</p>
                <p className="time">1 hour ago</p>
              </YouText>
            </AreYou>
            <TheNew>
              <FenceImage>
                <img src="/rec sunday.png" alt="" className="avatarka" />
              </FenceImage>
              <TheNewText>
                <p className="text">The New Punk Look: Lacy and Colorful</p>
                <p className="time">1 hour ago</p>
              </TheNewText>
            </TheNew>
            <Sunday>
              <BattleImage>
                <img src="/rec shisha.png" alt="" className="avatarka" />
              </BattleImage>
              <SundayText>
                <p className="text">Sunday Best in Harlem and Brooklyn</p>
                <p className="time">2 hours ago</p>
              </SundayText>
            </Sunday>
            <ButtonMore>Read more ➡</ButtonMore>
          </Posts>
        </Recommendet>
      </InterestingNews>
    </NewsContainer>
  );
};

export default Flower;
