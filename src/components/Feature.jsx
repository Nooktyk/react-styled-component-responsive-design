import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%; ;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: grey;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 160px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src="https://cdn.pixabay.com/photo/2016/02/07/14/45/smartphone-1184883_960_720.png" />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design
          <br />
          <b>Good</b> Business
        </Title>
        <SubTitle>We know that good design means good business.</SubTitle>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          praesentium labore inventore sit harum veritatis facere asperiores
          totam illum quam, tempora deserunt provident quisquam odit ut debitis
          repellendus! Repellat, cumque.
        </Desc>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          praesentium labore inventore sit harum veritatis facere asperiores
          totam illum quam, tempora deserunt provident quisquam odit ut debitis
          repellendus! Repellat, cumque.
        </Desc>
        <Button>Learn more...</Button>
      </Right>
    </Container>
  );
};

export default Feature;
