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
import Map from "./components/Map.js";
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

    //state that keeps that setting of large font
    const [largeFont, setLF] = useState(false);

    //state  keeping whether the sidebar should be shown
    const [showSidebar, setSidebar] = useState(false);

    //state  keeping whether the search bar should be shown
    const [showSearchBar, setSearchBar] = useState(false);

    //state keeping whether the search bar should display the warning (location not found warning)
    const[warningSearch,setWarningSearch] = useState(false);

    //state  keeping whether the api respose
    const [weatherData, setWeatherData] = useState({});

    //state keeping the city
    const [city, setCity] = useState("London")

    //state keeping the country
    const [country, setCountry] = useState("GB")
    
    //state to keep track of whether it is the initial render
    const initRender = useRef(true)

    //this is an async method that will call the method that will actually do the API calls.
    const fetchData = async (query) => {
        return await getJSONWeather(query)
    }

    useEffect(() => {
        if (initRender.current) {
            //fetch data for the initial render
            fetchData("London");
            initRender.current = false;
        } else {
            //inserting the labels into the buttons
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

    //toggle showSearch and preventDefault on event
    const toggleSearch = (event) => {
        event.preventDefault();
        setSearchBar(!showSearchBar)
    }

    //toggle without preventing event
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
    //when the api response is not ready display loading 
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
                {/* PAGE 1 */}
                <SplideSlide>
                    <Home weatherData={weatherData} city={city} country={country}/>
                    <div className="rainForecast">
                        <HourlyWeather/>
                        <RainForecast />
                    </div>
                </SplideSlide>

                {/* PAGE2 */}
                <SplideSlide>
                    <div className="weeklyForecast">
                        <WeeklyForecast />
                        
                    </div>
                </SplideSlide>

                {/* PAGE3 */}
                <SplideSlide>
                    <Map />
                </SplideSlide>
            </Splide>
            
                <div>
              {/* <HourlyWeather /> */}
            </div>
        </div>
        
    );
}

export default App;
