import Quote from './Quote';

const Temp = ({ normalTemp, lowTemp, highTemp, isMetric, status, city, country }) => {
    var textMainTemp;
    var textLowTemp;
    var textHighTemp;
        
    //temperature conversion based on isMetric
    if (isMetric) {
        textMainTemp = Math.round(normalTemp - 273) + "°C"
        textLowTemp = Math.round(lowTemp - 273) + "°C"
        textHighTemp = Math.round(highTemp - 273) + "°C"

    }
    else {
        textMainTemp = Math.round((normalTemp - 273) * 1.8 + 32) + "°F"
        textLowTemp = Math.round((lowTemp - 273) * 1.8 + 32) + "°F"
        textHighTemp = Math.round((highTemp - 273) * 1.8 + 32) + "°F"
    }
    return (
        <div id="mainTemp">

            <div className="secondary">
                <span className="hot">{textHighTemp}</span> <br/>
                <span className="cold">{textLowTemp}</span>
            </div>

            <div className="main">{textMainTemp}</div>
            <div className="status">{city}, {country}</div> <br/>
            <div className="status">{status}</div>
            <div className="quote"><Quote style="margin-bottom:60%"/></div>
        </div>

    )



}



export default Temp