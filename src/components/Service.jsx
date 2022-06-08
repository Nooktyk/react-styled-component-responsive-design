import React, { useState } from "react";
import styled from "styled-components";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";

const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
`;

const Video = styled.iframe`
  display: ${(props) => !props.open && "none"};
  height: 350px;
  width: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 0;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  align-self: center;
  background-color: #0a0809;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 25%;
`

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <Image
          open={open}
          src="https://cdn.pixabay.com/photo/2016/02/18/07/06/social-1206603_960_720.png"
        />
        <Video
          open={open}
          src="https://www.youtube.com/embed/p60kRunXkY0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            cumque a veniam! Mollitia laborum non repellendus dicta veritatis
            officiis totam, necessitatibus deleniti aliquid inventore debitis
            quam voluptates ea autem blanditiis?
          </Desc>
          <CardContainer>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
            <MiniCard></MiniCard>
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How It works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            src="https://www.youtube.com/embed/p60kRunXkY0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
