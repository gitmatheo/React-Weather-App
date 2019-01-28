import React from "react";
import styled from "styled-components";
import img from "../img/bg.jpg";

const HeroImg = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;
const HeroImage = () => {
  return <HeroImg />;
};

export default HeroImage;
