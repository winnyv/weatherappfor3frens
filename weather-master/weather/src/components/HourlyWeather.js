import axios from "axios";
import { useEffect, useState } from "react";

const HourlyWeather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [hour, setHour] = useState(null);

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(savePositionToState);
    const fetchData = async () => {
      const data = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=e7628a883268430286e210346222403&q=${latitude},${longitude}&days=5`
      );
      setHour(data.data.forecast.forecastday[0].hour);
    };
    fetchData();
  }, [latitude, longitude, hour]);

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