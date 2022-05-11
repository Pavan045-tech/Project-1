import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import './Country_search.css';

const Weather = () => {

    const [search,setsearch]=useState("");
    const [country,setcountry]=useState("");

    const fetchdata = async () => {
        const data=await fetch(`https://restcountries.com/v3.1/name/%3C${search}`);
        var deatils=await data.json();
        setcountry(deatils);
        console.log(deatils);
    }
    
    
    const datafetch = () => {
            fetchdata();
    }

    const deatils = (country,Locate) => {
        if (country) {
            return(
                <div className="details"> 
                    <h1><span>Country Name :</span>{country[0].name.common}</h1><br></br>
                    <h1><span>Official Name :</span>{country[0].name.official}</h1><br></br>
                    <h1><span>Country Population :</span>{country[0].population}</h1><br></br>
                    <h1><img className="flag" src={country[0].flags.png}></img></h1>
                    <Link className="Link" to={`/Capital_Weather/${country[0].capital}`}>Capital :{country[0].capital}</Link>
                    
                </div>
            );
        }
    }


    return(
        <div>
            <h1 className="heading">Pavan's App</h1>
            <div className="main1">
                <div className="header">
                    <input className="search" placeholder="Search by Country name!" onChange={(event)=>{setsearch(event.target.value)}}></input><br></br>
                    <button className="button1" onClick={datafetch}><img src="https://th.bing.com/th/id/R.42bda3826e9fd99a944aebf50c584cc7?rik=2dN3hp9MVCTWPQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fmagnifying-glass-transparent-6.png&ehk=sh2XdqyY8HZYw3dEBAfv2o8FZyipjXTnkvx9LJ4mnX0%3d&risl=&pid=ImgRaw&r=0"></img></button>
                    <div>{deatils(country)}</div>
                </div>
            </div>
        </div> 
    );

}

export default Weather;