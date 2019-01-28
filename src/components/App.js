import React, { Component } from "react";
import Form from "./Form";
import Results from "./Results";
import HeroImage from "./HeroImage";
import Loader from "./Loader";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";
import "./App.css";

const APIKey = `098f9bf6c16084074659b3cfd6958052`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: 'Montserrat', sans-serif;
  }
`;

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
          city: prevState.value
        }));
      });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <HeroImage />
        <div className="App">
          <h1>Simple React Weather App</h1>
          <Form
            value={this.state.value}
            change={this.handleInputChange}
            submit={this.handleCitySubmit}
          />

          {this.state.isLoading ? <Loader /> : <Results weather={this.state} />}
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
