import React from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 0px 0px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin: 20px;
  }
`;

const Title = styled.h1`
  width: 70%;
  font-size: 60px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 70%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 70%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;

const Phone = styled.span`
  color: #1b1a1a;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: #232323;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Imgge = styled.img`
  width: 100%;
  height: calc(100vh - 50px);
  object-fit: cover;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventure in creative age</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam
          maxime, quae commodi mollitia exercitationem error eos rerum deserunt
          recusandae molestias maiores ut necessitatibus consectetur molestiae
          ullam veritatis ad aut.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>094-980-4453</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Imgge src="https://cdn.pixabay.com/photo/2016/10/24/09/40/businessman-1765641_960_720.png"></Imgge>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
