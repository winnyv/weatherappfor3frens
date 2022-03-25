import Quote from './Quote';

const Temp = ({ normal, low, high, isMetric, stat, city, country }) => {
    var tMain;
    var tLow;
    var tHigh;
        tMain = Math.round(normal - 273) + "°C"
        tLow = Math.round(low - 273) + "°C"
        tHigh = Math.round(high - 273) + "°C"

    
   
    return (
        <div id="mainTemp">

            <div className="secondary">
                <span className="hot">{tHigh}</span> <br/>
                <span className="cold">{tLow}</span>
            </div>

            <div className="main">{tMain}</div>
            <div className="status">{city}, {country}</div> <br/>
            <div className="status">{stat}</div>
            <div className="quote"><Quote style="margin-bottom:60%"/></div>
        </div>
    )
}

export default Temp