// Displaying humidity, visibility, cloud

const Humidity = ({hum,vis,cloud}) => {

// it prints humidity thing 
    return (
    <div id="float-container">
        <div id="float-child">
            <div className="currhumidity">Humidity: <b>{hum}%</b> <br></br>
            Visibility: <b>{vis}</b></div>  
            <div className="cloud">Cloud cover:<br></br><b>{cloud}%</b></div>
        </div>
    </div>

    )}
  
  export default Humidity
