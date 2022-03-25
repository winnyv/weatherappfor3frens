// code for map in third page

const RainThunderMaps = () => {
  return (
    <div className="page map">
      <div id="topbar"/>
      <div>Thunder and Rain Map</div>
      <iframe width="700" height="550" src="https://embed.windy.com/embed2.html?lat=52.469&lon=3.384&detailLat=52.469&detailLon=3.384&width=650&height=450&zoom=5&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0">
      </iframe>
    </div>
  )
}

export default RainThunderMaps