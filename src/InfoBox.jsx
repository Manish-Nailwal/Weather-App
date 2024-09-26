import { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}){
    return (<div className="Info">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1669826663048-ae1a9116af3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
          {info.city}
        </Typography>
        <Typography variant="body2" color='text.secondary' component={'span'} style={{textAlign: 'center'}}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}%</p>
            <p>Max Temp={info.maxtemp}&deg;C</p>
            <p>Min Temp={info.mintemp}&deg;C</p>
            <p>The weather can be describe as {info.weather} and it feels like {info.feeslike}&deg;C</p>
        </Typography>
      </CardContent>
      </Card>
    </div>)
}