import React from "react";
import styled from "styled-components";
import logo from "../svg/logo.svg";

const Logo = ({ src }) => <img src={`${logo}`} />;

const MyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: rgba(255, 255, 255, 0.9);
`;
const MyLogo = styled(Logo)`
  width: 100%;
  height: auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
  overflow: hidden;
  // background-color: grey;
`;

const Footer = () => {
  return (
    <MyFooter>
      <h2>Created with ♥️ by Mateusz Dominiak</h2>
      <LogoWrapper>
        <MyLogo />
      </LogoWrapper>
    </MyFooter>
  );
};

export default Footer;
