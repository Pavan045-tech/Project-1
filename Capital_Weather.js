import {React,useState} from "react";
import {Link} from 'react-router-dom';
import './Capital_Weather.css';
import { useParams } from "react-router-dom";


const Name = () => {

    const [city,setcity]=useState("");
    const {location} = useParams();
 
    const data_fetch = async () => {
        let api=await fetch(`http://api.weatherstack.com/current?access_key=6dd5fdce7fe416f79f88459842ec1c12&query=${location}`);
        let data=await api.json();
        setcity(data);
        console.log(data);
    }

    const Check = () => {
        if(city){
            return(
                <div className="c1">
                    <div><img src={city.current.weather_icons}></img></div>
                    <div><h1 className="h1"><span>Weather deatils :</span>{city.current.weather_descriptions}</h1></div>
                    <div><h1 className="h1"><span>Time Zone_id :</span>{city.location.timezone_id}</h1></div>
                    <div><h1 className="h1"><span>City Temprature :</span>{273-city.current.temperature} degree celius</h1></div>
                    <div><h1 className="h1"><span>Wind Speed :</span>{city.current.wind_speed}</h1></div>
                    <div><h1 className="h1"><span>Region :</span>{city.location.region}</h1></div>
                </div>
            );
        }
    }


    return(
        <div className="click2">

            <div className="main2">
                <Check/>
                <button className="buttoon" onClick={data_fetch}>click here view deatails</button>
                <div className="dingoo">
                    <div>
                        <h1 className="header">This is Weather Page!!</h1>
                    </div>
                </div>   
            </div>
            <div>
                <button className="link"><Link to='/'>Previous Page</Link></button>
            </div>
        </div>
    );
}

export default Name;