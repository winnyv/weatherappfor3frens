import Landing from './Landing.js'


const Home = ({weatherData,isMetric,city,country}) => {
  return (
    <div className="page home">
      <Landing weatherData={weatherData} isMetric={isMetric} city={city} country={country}/>
    </div>
  )
}

export default Home
