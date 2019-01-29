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

    let results = [
      {
        icon: "wi wi-time-5",
        desc: "Date and time: ",
        response: date
      },
      {
        icon: "wi wi-thermometer",
        desc: "Temperature: ",
        response: temp
      },
      {
        icon: "wi wi-barometer",
        desc: "Pressure: ",
        response: pressure
      },
      {
        icon: "wi wi-sunrise",
        desc: "Sunrise: ",
        response: sunriseTime
      },
      {
        icon: "wi wi-horizon",
        desc: "Sunset: ",
        response: sunsetTime
      },
      {
        icon: "wi wi-strong-wind",
        desc: "Wind speed: ",
        response: wind
      }
    ];

    content = (
      <div>
        <h3>
          Actual weather in <strong>{city}</strong>
        </h3>

        <ResultsContainer>
          {results.map(element => (
            <Cart>
              <StyledI className={element.icon} />
              <p>
                {element.desc}
                {element.response}
              </p>
            </Cart>
          ))}
        </ResultsContainer>
      </div>
    );
  }

  return (
    <Results>
      {error ? `There is no "${city}" in our database` : content}
    </Results>
  );
};

export default Result;
