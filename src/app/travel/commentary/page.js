import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/page.js";

// === STYLE ===

const Post = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
  font-size: 1rem;
  color: #4b5157;
`;

const PostCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4rem;
  width: 100%;
  height: 26.5rem;
  background-color: rgb(243, 229, 229);
`;

const Card = styled.div`
  width: 16.4rem;

  .imgCard {
    border-radius: 0.5rem;
    width: 16.4rem;
    height: 11rem;
  }

  h1 {
    font-size: large;
    color: black;
    margin-top: 1rem;
  }

  p {
    span {
      font-size: 0.7rem;
      margin-right: 1rem;

      img {
        width: 1rem;
        margin-right: 0.4rem;
      }
    }
  }
`;

// == COMMENT ==

const PostComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 67rem;
  color: #4b5157;
  margin: 5rem 10rem;
`;

const AddCommentariya = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 5rem;

  h1 {
    color: black;
    font-size: 2.5rem;

    span {
      color: rgb(141, 150, 159);
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 2.5rem;
    border-radius: 10rem;
    border: 1px solid rgb(189, 203, 217);
    cursor: pointer;
    color: rgb(33, 31, 31);
    font-weight: 600;

    &:hover {
      background-color: rgb(230, 233, 237);
    }
    &:active {
      background-color: rgb(220, 226, 232);
    }
  }
`;

const RiyanHall = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  border-top: 1px solid rgb(190, 200, 211);
  gap: 1rem;
  padding-top: 1rem;
`;

const LoraMarrow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-top: 1px solid rgb(190, 200, 211);
  gap: 1rem;
  padding-top: 1rem;
  margin-left: 4.5rem;
`;

const StyledImage = styled.div`
  img {
    border-radius: 50%;
    width: 3.5rem;
    cursor: pointer;
  }
`;

const CommentTitle = styled.div`
  h4 {
    font-size: 1rem;

    span {
      font-size: 0.7rem;
      color: rgb(152, 139, 139);
    }
  }

  p {
    width: 70%;
    font-size: 0.8rem;
    line-height: 1.5rem;
    span {
      font-size: 0.8rem;
      color: rgb(139, 147, 139);
    }
  }
`;

const ButtonMore = styled.button`
  width: 90%;
  height: 2.5rem;
  border-radius: 3rem;
  border: 2px solid #ccc;
  color: #2b2727ff;
  font-size: 0.9rem;
  background-color: #f1e2e2ff;

  &:hover {
    background-color:  #e0d7d7ff;
  }
`;

const SendComment = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 18rem;
  background-color: #e5ddddff;
  margin-top: 3rem;

`;

const StyledImg = styled.div`
  img {
    border-radius: 50%;
    width: 3.5rem;
    cursor: pointer;
    margin: 2rem 2rem;
  }
`;

const Send = styled.div`
  margin-top: 1rem;

  h4{
    color: black;
    font-size: 1.1rem;
  }
`;

const BoxCommentn = styled.div`
  width: 33rem;
  height: 8rem;
  background-color: aliceblue;
  border-radius: 5px;
  border: 1px solid #cccccc;
  cursor: text;
`;

const Submit = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 2rem;
  margin-top: 1rem;
  color: white;
  border: none;
  background-color: #7881fbff;

  &:hover{
    background-color: #7a5defff;
  }
`;



const Comment = () => {
  return (
    <Post>
      <PostCard>
        <Card>
          <img src="/CardFood.png" alt="Food" className="imgCard" />
          <h1>An Evangelist of Singaporean Food Has a New Pulpit</h1>
          <p>
            <span>
              <img src="/seen.png" alt="Seen" />
              3265
            </span>
            <span>
              <img src="/Comment.png" alt="Comment" />
              2569
            </span>
          </p>
        </Card>
        <Card>
          <img src="/CardWater.png" alt="Water" className="imgCard" />
          <h1>At the Mouth of the Mississippi, a Weird and Fragile Beauty</h1>
          <p>
            <span>
              <img src="/seen.png" alt="Seen" />
              326
            </span>
            <span>
              <img src="/Comment.png" alt="Comment" />
              259
            </span>
          </p>
        </Card>
        <Card>
          <img src="/CardDreex.png" alt="Dreex" className="imgCard" />
          <h1>Chattanooga Is Changing. But Its Charms Remain.</h1>
          <p>
            <span>
              <img src="/seen.png" alt="Seen" />
              365
            </span>
            <span>
              <img src="/Comment.png" alt="Comment" />
              269
            </span>
          </p>
        </Card>
        <Card>
          <img src="/CardAuto.png" alt="Auto" className="imgCard" />
          <h1>How to Get by in a Country if You Don’t Know the Language</h1>
          <p>
            <span>
              <img src="/seen.png" alt="Seen" />
              5265
            </span>
            <span>
              <img src="/Comment.png" alt="Comment" />
              1569
            </span>
          </p>
        </Card>
      </PostCard>
      <PostComment>
        <AddCommentariya>
          <h1>
            Comments <span>19</span>
          </h1>
          <p>🖍 Add comment</p>
        </AddCommentariya>
        <RiyanHall>
          <StyledImage>
            <img src="/devid.png" alt="Green" className="avatar" />
          </StyledImage>
          <CommentTitle>
            <h4>
              Ryan Hall <span> &nbsp; July 17, 6:38 pm</span>
            </h4>
            <p>
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>
            <p className="like">
              <img src="/Comment.png" alt="Comment" />
              &nbsp; Reply &nbsp; &nbsp; <img src="/like.png" alt="Like" />
              <span>&nbsp;+10 &nbsp;</span>
              <img src="/dizlike.png" alt="Dizlike" />
            </p>
          </CommentTitle>
        </RiyanHall>
        <LoraMarrow>
          <StyledImage>
            <img src="/olivia.png" alt="Olivia" className="avatar" />
          </StyledImage>
          <CommentTitle>
            <h4>
              Lora Marrow <span> &nbsp; January 27, 6:02 pm</span>
            </h4>
            <p>
              Likewise, most states in the Persian Gulf were handed over to
              those who could protect and safeguard imperial interests in the
              post-withdrawal phase{" "}
            </p>
            <p className="like">
              <img src="/Comment.png" alt="Comment" />
              &nbsp; Reply &nbsp; &nbsp; <img src="/like.png" alt="Like" />
              <span>&nbsp;0 &nbsp;</span>
              <img src="/dizlike.png" alt="Dizlike" />
            </p>
          </CommentTitle>
        </LoraMarrow>
        <RiyanHall>
          <StyledImage>
            <img src="/green.png" alt="Green" className="avatar" />
          </StyledImage>
          <CommentTitle>
            <h4>
              Tara Stark <span> &nbsp; March 16, 8:38 pm</span>
            </h4>
            <p>
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>
            <p className="like">
              <img src="/Comment.png" alt="Comment" />
              &nbsp; Reply &nbsp; &nbsp; <img src="/like.png" alt="Like" />
              <span>&nbsp;125 &nbsp;</span>
              <img src="/dizlike.png" alt="Dizlike" />
            </p>
          </CommentTitle>
        </RiyanHall>
        <RiyanHall>
          <StyledImage>
            <img src="/CarouselLeftAvatar.png" alt="Green" className="avatar" />
          </StyledImage>
          <CommentTitle>
            <h4>
              Madonna Lopes <span> &nbsp; December 06, 23:38 pm</span>
            </h4>
            <p>
              In the event, "in places like Iraq and Jordan, leaders of the new
              sovereign states were brought in from the outside, tailored
              to suit colonial interests and commitments
            </p>
            <p className="like">
              <img src="/Comment.png" alt="Comment" />
              &nbsp; Reply &nbsp; &nbsp; <img src="/like.png" alt="Like" />
              <span>&nbsp;23 &nbsp;</span>
              <img src="/dizlike.png" alt="Dizlike" />
            </p>
          </CommentTitle>
        </RiyanHall>
        <ButtonMore>
          <img src="Loading.png" alt="Loading"/> Load more
        </ButtonMore>
        <SendComment>
          <StyledImg>
            <img src="/CarouselLeftAvatar.png" alt="Green" className="avatar" />
          </StyledImg>
          <Send>
            <h4>What do you think</h4>
            <BoxCommentn></BoxCommentn>
            <Submit>Submit</Submit>
          </Send>
        </SendComment>
      </PostComment>
      <Footer />
    </Post>
  );
};

export default Comment;
