import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4dc7ff;
  opacity: 0.7;
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: -1;
  animation: square 10s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(600px, 400px);
    }
  }
`;

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: lightgray;
  position: absolute;
  top: 400px;
  left: 60px;
  z-index: -1;
  animation: circle 5s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(400px, -300px);
    }
  }
`;

const Rect = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url("https://i.pinimg.com/originals/78/53/8c/78538c5d780ff8aabc89db5a61f1a9ac.png");
  background-size: cover;
  opacity: 0.9;
  position: absolute;
  top: 150px;
  left: 500px;
  z-index: -1;
  /* animation: rect 15s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(500px, 40px);
    }
  } */
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      {/* <Rect /> */}
    </>
  );
};

export default AnimatedShapes;
