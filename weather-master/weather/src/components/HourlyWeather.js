import axios from "axios";
import { useEffect, useState } from "react";
// state makes sure it set latitube,longitude and setHour
const HourlyWeather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hour, setHour] = useState(null);
//it saves the position to state by postition cordinates
  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
// the hourly forcaste is fetched from the api 
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(savePositionToState);
    const fetchData = async () => {
      const data = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=e7628a883268430286e210346222403&q=${latitude},${longitude}&days=5`
      );
      setHour(data.data.forecast.forecastday[0].hour);
    };
    // fetched lat and lon ,hour
    fetchData();
  }, [latitude, longitude, hour]);
// displays the time and temperature in calvin and farenhiet
  return (
    hour &&
    hour.map((h) => (
      <div>
        Hour: {new Date(h.time).getHours()}:00 Cel: {h.temp_c} Far: {h.temp_f}
      </div>
    ))
  );
};

export default HourlyWeather;