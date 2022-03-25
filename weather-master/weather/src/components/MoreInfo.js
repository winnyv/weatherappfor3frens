import Humidity from './Humidity.js'
import Wind from './Wind.js'

const MoreInfo = ({weatherData,isMetric}) => {
  return (
    <div id="moreinfo">
      <div className="linesInfo">
        {/* Calls Humidity function and displays the required info */}
        <Humidity hum={weatherData['current']['humidity']} cloud={weatherData['current']['clouds']} vis={weatherData['current']['visibility']} isMetric={isMetric}/>
      </div>
      <br/>

      <div className="blockInfo">
        {/* Calls Wind function and displays the required info */}
        <Wind speed={weatherData['current']['wind_speed']} dir={weatherData['current']['wind_deg']+90}/>
      </div>
    </div>

   
  )
}

export default MoreInfo
