import axios from 'axios';
import React, { Component } from 'react';

class Weather extends Component {
  constructor() {
    super();
    this.state = { temp: 0 };
  }

  componentDidMount() {
    this.renderWeather();
  }

  renderWeather = async () => {
    try {
      const apiEndpoint = 'http://api.openweathermap.org/data/2.5/weather?id=6167865&appid=39d3d7d15fb2d75421ab63d6c7168edd';
      let res = await axios.get(apiEndpoint);
      let weather = res.data;

      this.setState({
        temp: weather.main.temp - 273.15,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="weather">
        <h2>Temp: {this.state.temp} Celsius</h2>
      </div>
    );
  }
}

export default Weather;
