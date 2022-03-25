// import styling
import "./App.css";
import "./index.css";

// Allows to setup page for the app
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

// import components of the app
import WeeklyForecast from './components/WeeklyForecast.js'
import RainForecast from './components/RainForecast.js'
import Home from "./components/Home.js";
import RainThunderMaps from "./components/RainThunderMaps";
import Topbar from "./components/Topbar.js";
import Searchbar from "./components/Searchbar.js";
import HourlyWeather from "./components/HourlyWeather";

function App() {
    // Location of the user
    const getJSONLocation = async (query) => {
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=c771b4a71a2bb5a57117433fcf3558dd`);
        return await (res.json());
    }

    // set the weatherData to the response to the API
    const getJSONWeather = async (query) => {
        const location = await getJSONLocation(query);
        if ("0" in location) {
            setCity(location[0]["name"])
            setCountry(location[0]["country"])
            //check if the location fetch was succefull
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location["0"]["lat"]}&lon=${location["0"]["lon"]}&cnt=7&appid=c771b4a71a2bb5a57117433fcf3558dd`);
            setWeatherData(await response.json());
            return true
        }
        return false
    }

   //the state  keeps the setting of Metric 
    const [largeFont, setLF] = useState(false);

   //it keeps that setting of large font
    const [showSidebar, setSidebar] = useState(false);

    // it decides wther sidebar should be displayed or not
    const [showSearchBar, setSearchBar] = useState(false);

    // it decides wether searchbar should be displayed or not
    const[warningSearch,setWarningSearch] = useState(false);

    // it makes sure wether api shows response or not
    const [weatherData, setWeatherData] = useState({});

   //it makes sure that state  keep the city
    const [city, setCity] = useState("London")

    // country is assigned to the state
    const [country, setCountry] = useState("GB")
    
    //state to keep track of whether it is the initial render
    const initRender = useRef(true)

    // the async method helps to do the api calls.
    const fetchData = async (query) => {
        return await getJSONWeather(query)
    }

    useEffect(() => {
        if (initRender.current) {
            // initial render is fetched
            fetchData("London");
            initRender.current = false;
        } else {
            // labels are inserted into buttons
            var buttons = document.querySelectorAll("[aria-label=\"Go to slide 1\"]");
            var text = document.createTextNode("Home");
            if (!buttons[0].hasChildNodes()) {
                buttons[0].appendChild(text);
            }

            buttons = document.querySelectorAll("[aria-label=\"Go to slide 2\"]");
            text = document.createTextNode("Weekly");
            if (!buttons[0].hasChildNodes()) {
                buttons[0].appendChild(text);
            }

            buttons = document.querySelectorAll("[aria-label=\"Go to slide 3\"]");
            text = document.createTextNode("Map");
            if (!buttons[0].hasChildNodes()) {
                buttons[0].appendChild(text);
            }
        }
    });

    const toggleSide = () => {
        setSidebar(!showSidebar);
    };

    //the showsearch is toggeled
    const toggleSearch = (event) => {
        event.preventDefault();
        setSearchBar(!showSearchBar)
    }

    //event is togggled without preventing
    const toggleSearchNoArg = () => {
        setSearchBar(!showSearchBar)
    }

    const changeLocation = async (query) => {
        if(await fetchData(query))
        {
            toggleSearchNoArg();
            setWarningSearch(false);
        }
        else{
            setWarningSearch(true);
        }
    }
    // diplay the loading when api response is not ready
    if (initRender.current) {
        return (
            <div id="loading">
            </div>
        )
    }

    return (
        
        <div className={largeFont ? "App largeFont" : "App"}>
            <Topbar toggle={toggleSide}
                toggleSearch={toggleSearch} />
            <Searchbar
                toggle={toggleSearch}
                showSearchBar={showSearchBar}
                changeLocation={changeLocation}
                warningSearch={warningSearch} />
        
            <Splide
                options={{
                    arrows: false,
                    pagination: true,
                }}
            >   
                {/* 1 */}
                <SplideSlide>
                    <Home weatherData={weatherData} city={city} country={country}/>
                    <div className="rainForecast">
                        <div> Hourly Forecast </div>
                        <div class = "hourlyForecast"> 
                            <HourlyWeather /> </div>
                        <br></br>
                        <div class = "hourlyForecast">
                        <RainForecast />
                    </div>
                    </div>
                </SplideSlide>

                {/* 2 */}
                <SplideSlide>
                    <div className="weeklyForecast">
                        <WeeklyForecast />
                    </div>
                </SplideSlide>

                {/* 3 */}
                <SplideSlide>
                    <RainThunderMaps />
                </SplideSlide>
            </Splide>
            
                <div>
              {/* <HourlyWeather /> */}
            </div>
        </div>
        
    );
}

export default App;
