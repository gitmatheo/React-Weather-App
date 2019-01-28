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

  let content = null;
  if (!error && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h3>
          Actual weather in <strong>{city}</strong>
        </h3>
        <div>
          <StyledI className="wi wi-time-5" />
          Date and time: {date}
        </div>
        <div>
          <StyledI className="wi wi-thermometer" />
          Temperature: {temp} &#186;C
        </div>
        <div>
          <StyledI className="wi wi-barometer" />
          Pressure: {pressure} hPa
        </div>
        <div>
          <StyledI className="wi wi-sunrise" />
          Sunrise: {sunriseTime}
        </div>
        <div>
          <StyledI className="wi wi-horizon" />
          Sunset: {sunsetTime}
        </div>
        <div>
          <StyledI className="wi wi-strong-wind" />
          Wind speed: {wind} m/s
        </div>
      </div>
    );
  }

  return (
    <Results>{error ? `There is no ${city} in our database` : content}</Results>
  );
};

export default Result;
