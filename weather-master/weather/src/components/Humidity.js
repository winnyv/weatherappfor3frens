const Humidity = ({humidity,visibility,cloud}) => {

    var length;


    return (
    <div id="float-container">
        <div id="float-child">
            <div className="currhumidity">Humidity: <b>{humidity}%</b> <br></br>
            Visibility: <b>{visibility}</b></div>  
        </div>
        <div id="float-child">
            <div className="cloud">Cloud cover:<br></br><b>{cloud}%</b></div>
        </div>
    </div>

    )}
  
  export default Humidity
