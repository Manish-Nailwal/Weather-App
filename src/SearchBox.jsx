import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './searchBox.css';
import { useState } from 'react';
export default function SearchBox({updateWeatherInfo}){
    const [city,setCity] = useState('');
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    let handleChange=async (evt)=>{
        setCity(evt.target.value);
    }
    let weatherInfo = async () =>{
        const res = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`);
        const resJson = await res.json();
        console.log(resJson);
        let info = {
            city: resJson.name,
            weather: resJson.weather[0].description,
            temp: resJson.main.temp,
            humidity: resJson.main.humidity,
            feeslike: resJson.main.feels_like,
            maxtemp: resJson.main.temp_max,
            mintemp: resJson.main.temp_min
        }
        updateWeatherInfo(info);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity('');
        weatherInfo();
    }
    return (
        <div className='searchBox'>
            <form className='search' onSubmit={handleSubmit} >
                <TextField id="outlined-basic" label="City" variant="outlined" className='Search' value={city} onChange={handleChange}/> &nbsp;&nbsp;&nbsp;
                <Button variant="contained" type='Submit' endIcon={<SearchIcon />}>Search</Button>
            </form>
        </div>
    )
}