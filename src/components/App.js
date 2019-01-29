import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
import HeroImage from "./HeroImage";
import Loader from "./Loader";
import Footer from "./Footer";
import styled, { createGlobalStyle } from "styled-components";

//API KEY
const APIKey = `098f9bf6c16084074659b3cfd6958052`;

//Styles for styled components
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
  }
  @media (max-width: 768px) {
  body {
    font-size: 9px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 7px;
  }
}
`;

const Header = styled.h1`
  font-size: 3.5em;
  color: rgba(255, 255, 255, 0.8);
`;

const WeatherApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

//APP

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    error: "",
    isLoading: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
    }&APPID=${APIKey}&units=metric`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(
        response => response.json(),
        this.setState({
          isLoading: true
        })
      )
      .then(data => {
        const time = new Date().toLocaleString();

        this.setState(prevState => ({
          error: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value,
          isLoading: false,
          value: ""
        }));
      })
      .catch(error => {
        this.setState(prevState => ({
          error: true,
          isLoading: false,
          city: prevState.value
        }));
      });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <HeroImage />
        <WeatherApp className="App">
          <Header>Simple React Weather App</Header>
          <Form
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
            className={this.state.afterLoading ? "active" : null}
          />

          {this.state.isLoading ? <Loader /> : <Results weather={this.state} />}
          <Footer />
        </WeatherApp>
      </>
    );
  }
}

export default App;
