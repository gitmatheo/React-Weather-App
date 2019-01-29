import React from "react";
import styled from "styled-components";
import logo from "../svg/logo.svg";
import "./Footer.css";

const MyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: rgba(255, 255, 255, 0.9);
`;

const Logo = ({ src }) => <img src={`${logo}`} alt="logo" />;

const MyLogo = styled(Logo)`
  width: 100%;
`;

const LogoWrapper = styled.div`
  width: 10%;
  padding-left: 3%;
`;

const Footer = () => {
  return (
    <MyFooter>
      <h2>
        Created with
        <i class="fas fa-heart" />
        by Mateusz Dominiak
        <a href="https://github.com/gitmatheo">
          <i class="fab fa-github" />
        </a>
      </h2>
      {/* <LogoWrapper>
        <MyLogo />
      </LogoWrapper> */}
    </MyFooter>
  );
};

export default Footer;
