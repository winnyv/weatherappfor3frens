import HomePart2 from './HomePart2'

// The homepage will access HomePart2 to display componenents 
const Home = ({weatherData,isMetric,city,country}) => {
  return (
    <div className="page home">
      <HomePart2 weatherData={weatherData} isMetric={isMetric} city={city} country={country}/>
    </div>
  )
}

export default Home
