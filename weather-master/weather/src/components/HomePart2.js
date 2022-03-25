import MoreInfo from './MoreInfo.js'
import Temp from './Temp.js'

import { useState, useEffect } from 'react'

var interval;

const HomePart2 = ({weatherData, isMetric, city, country}) => {
  const[time, setTime] = useState(0)

  // time on the app
  useEffect(() => {
    const refreshTime = () => {
      setTime(((new Date()).getTime() / 1000)-((new Date()).getTimezoneOffset() * 60)+weatherData['timezone_offset']);
    }
    clearInterval(interval);
    refreshTime();
    interval = setInterval(refreshTime, 10000)
  }, [weatherData]);
  
  var times = parseInt(time);
  var dates = new Date(times * 1000);
  var hours = dates.getHours();
  var minutes = dates.getMinutes();
  if (minutes < 10) {
    minutes = '0' + parseInt(minutes)
  }

  return (
    <div id="HomePart2">
      <div id="temperature">
        {/* Displays temperature */}
        <Temp
          normal={weatherData['daily'][0]['temp']['day']}
          low={weatherData['daily'][0]['temp']['min']}
          high={weatherData['daily'][0]['temp']['max']}
          stat={weatherData['current']['weather'][0]['main']}
          isMetric={isMetric}
          city = {city}
          country = {country}
        />
      </div>

      {/* Displays Time */}
      <div id="hours">
        <p id="CurTime">{hours}:{minutes}</p>
      </div>

      {/* Displays Humidity and Wind*/}
      <MoreInfo 
        weatherData={weatherData}
        isMetric = {isMetric}
      />
    </div>
  )
}

export default HomePart2
