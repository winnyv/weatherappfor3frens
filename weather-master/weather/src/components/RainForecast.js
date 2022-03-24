// Code for Rain forecast included

import React from 'react';
import axios from "axios";

class RainForecast extends React.Component
{
  state = 
  {
    coords : 
    {
      latitude:0,
      longitude:0
    },
    info:
    {
      hourlyRain : []
    },
    open: false
  };

  handleButtonClick = () =>{
    this.setState((state) =>{
      return{
        open: !state.open,
      };
    });
  }

  componentDidMount()
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition((pos)=> 
      {
        let curPos = 
        {
          latitude : pos.coords.latitude,
          longitude : pos.coords.longitude
        }
        this.setState({coords:curPos});

        console.log(this.state.coords);

        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&exclude=alerts,minutely,current,daily&appid=a46356085ca4d46617dbe82f8f470bab`).then(response => 
        {
          console.log(response);
          let hRain = 
          {
            hourlyRain : []
          }

          for (let i = 0; i < 25; i++) 
          {
            hRain.hourlyRain[i] = response.data.hourly[i].pop * 100;
          }
          console.log(hRain);

          this.setState({ info : hRain});
        
        })
      })
    }
  }

  render(){
    return(
      <div class = "new">
        <div class = "week">
          <div class='p1'> <strong><p> Rain Forecast </p></strong></div>
          <table class = "rest">
            <button type="button" class="button" onClick={this.handleButtonClick}>
              ▼
            </button>
            <tr>
              <th id = "Day">12 A.M</th>
              <th id = "sub">
                <span id = "temp">{this.state.info.hourlyRain[0]}</span>
              </th>
            </tr>
            
            {this.state.open && (
              <div class ="dropdown">
                <tr>
                  <th id = "Day">1 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[1]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">2 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[2]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">3 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[3]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">4 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[4]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">5 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[5]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">6 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[6]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">7 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[7]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">8 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[8]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">9 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[9]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">10 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[10]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">11 A.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[11]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">12 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[13]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">1 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[14]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">2 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[15]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">3 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[16]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">4 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[17]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">5 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[18]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">6 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[19]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">7 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[20]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">8 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[21]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">9 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[22]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">10 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[23]}</span>
                  </th>
                </tr>
                <tr>
                  <th id = "Day">11 P.M</th>
                  <th id = "sub">
                    <span id = "temp">{this.state.info.hourlyRain[24]}</span>
                  </th>
                </tr>
              </div>
            )}
          </table>
        </div>
      </div>
    )
  }
}
 
export default RainForecast;

