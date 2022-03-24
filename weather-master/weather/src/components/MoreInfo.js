import Humidity from './Humidity.js'
import Wind from './Wind.js'
import WeeklyForecast from './WeeklyForecast.js'
import RainForecast from './RainForecast.js'

const MoreInfo = ({weatherData,isMetric}) => {
  return (
    <div id="moreinfo">
      <div className="linesInfo">
        <Humidity humidity={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} visibility={weatherData['current']['visibility']} isMetric={isMetric}/>
        <WeeklyForecast /> 
        <RainForecast />
      </div>
      <br/>

      <div className="blockInfo">
        <Wind speed={weatherData['current']['wind_speed']} direction={weatherData['current']['wind_deg']+90}/>
      </div>
      <p>Put weekly forecast here</p>
    </div>

   
  )
}

export default MoreInfo
