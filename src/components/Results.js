import React from "react";
import "../icons/css/weather-icons.min.css";
import styled from "styled-components";

const Results = styled.div`
  font-size: 2em;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
  text-align: center;
`;

const I = ({ className }) => <i className={`${className}`} />;
const StyledI = styled(I)`
  font-size: 2em;
  margin: 10px;
  text-align: center;
`;

const Result = props => {
  const {
    error,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    date
  } = props.weather;

  const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 33.333%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: white;
    }
    @media (max-width: 480px) {
      width: 50%;
    }
  `;

  const ResultsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    width: 80%;
    height: 40vh;
    margin: 50px auto;
    transition: 0.3s;
  `;

  let content = null;
  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h3>
          Actual weather in <strong>{city}</strong>
        </h3>
        <ResultsContainer>
          <Cart>
            <StyledI className="wi wi-time-5" />
            <p>Date and time: {date}</p>
          </Cart>
          <Cart>
            <StyledI className="wi wi-thermometer" />
            <p>Temperature: {temp} &#186;C</p>
          </Cart>
          <Cart>
            <StyledI className="wi wi-barometer" />
            <p>Pressure: {pressure} hPa</p>
          </Cart>
          <Cart>
            <StyledI className="wi wi-sunrise" />
            <p>Sunrise: {sunriseTime}</p>
          </Cart>
          <Cart>
            <StyledI className="wi wi-horizon" />
            <p>Sunset: {sunsetTime}</p>
          </Cart>
          <Cart>
            <StyledI className="wi wi-strong-wind" />
            <p>Wind speed: {wind} m/s</p>
          </Cart>
        </ResultsContainer>
      </div>
    );
  }

  return (
    <Results>{error ? `There is no ${city} in our database` : content}</Results>
  );
};

export default Result;
