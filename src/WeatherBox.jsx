import SearchBox from "./SearchBox";
import InfoBox from './InfoBox';
import { useState } from "react";

export default function WeatherBox(){
    const [info,setInfo] = useState({
        city: 'City Name',
        weather: 'haze',
        temp: 40,
        humidity: 70,
        feeslike: 42,
        maxtemp: 40,
        mintemp: 40,
    })
    let updateWeatherInfo=(data)=>{
        setInfo(data);
    }
    return(
        <>
        <h1 style={{textAlign: "center"}}>Weather App</h1>
        <SearchBox updateWeatherInfo={updateWeatherInfo}/>
        <InfoBox info={info}/>
        </>
    )
}