import Humidity from './Humidity.js'
import Wind from './Wind.js'
import WeeklyForecast from './WeeklyForecast.js'

const MoreInfo = ({weatherData,isMetric}) => {
  return (
    <div id="moreinfo">
      <div className="linesInfo">
        <Humidity humidity={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} visibility={weatherData['current']['visibility']} isMetric={isMetric}/>
        <WeeklyForecast /> 
      </div>
      <br/>

      <div className="blockInfo">
        <Wind speed={weatherData['current']['wind_speed']} direction={weatherData['current']['wind_deg']+90}/>
      </div>

    </div>
  )
}

export default MoreInfo
