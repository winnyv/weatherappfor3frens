import "./App.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import Home from "./components/Home.js";
import Map from "./components/Map.js";
import Topbar from "./components/Topbar.js";
import Searchbar from "./components/Searchbar.js";
// import WeeklyForecast from './WeeklyForecast.js'
import HourlyWeather from "./components/HourlyWeather";

function App() {
    //return the location based on query
    const getJSONLocation = async (query) => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=c771b4a71a2bb5a57117433fcf3558dd`;
        const response = await fetch(url);
        return await (await response.json());
    }

    //set the weatherData to the response to the API
    const getJSONWeather = async (query) => {
        const loc = await getJSONLocation(query);
        if ("0" in loc) {
            setCity(loc[0]["name"])
            setCountry(loc[0]["country"])
            //if 0 is in the json response that means there was at least one
            // location mathing the query

            //check if the location fetch was succefull
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${loc["0"]["lat"]}&lon=${loc["0"]["lon"]}&cnt=7&appid=c771b4a71a2bb5a57117433fcf3558dd`;
            const response = await fetch(url);
            setWeatherData(await response.json());
            return true
        }
        return false
    }

    //state that keeps the setting of Metric or Imperial
    const [isMetric, setIsMetric] = useState(true);

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
            text = document.createTextNode("Training");
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
                <SplideSlide>
                    <Home weatherData={weatherData} city={city} country={country}/>
                </SplideSlide>
                <SplideSlide>
                    
                </SplideSlide>
                <SplideSlide>
                    <Map />
                </SplideSlide>
            </Splide>
            
                <div>
              <HourlyWeather />
              {/* <WeeklyForecast /> */}
            </div>
            

        </div>
        
    );
}

export default App;
