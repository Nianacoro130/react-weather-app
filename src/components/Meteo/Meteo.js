import React from 'react';
import '../../styles/meteo.css';



const Meteo = (props) => {
    const {meteo} = props;
    const madate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const tab = [props.meteo];
    
    console.log(tab)

    /*meteo background*/
    let  meteoInfos = {
        Rain :"Rain",
        Clouds:"Clouds",
        Clear:"Clear",
        Snow  :"Snow",
        mist: "Haze",
        Drizzle :"Drizzle",
        Haze:"Haze",
    };

    let meteoIcons = {
        "clear sky": "01d.png",
        "few clouds":"02d.png",
        "scattered clouds" : "03d.png",
        "broken clouds" :"04d.png",
        "overcast clouds":"04d.png",
        "rain" : "10d.png",
        "light rain" : "10d.png",
        "moderate rain": "10d.png",
        "heavy intensity rain" : "10d.png",
        "very heavy rain" : "10d.png",
        "extreme rain": "10d.png",
        "freezing rain":"13d.png",
        "light intensity shower rain":"09d.png",
        "shower rain":"09.png",
        "heavy intensity shower rain":"09d.png",
        "ragged shower rain":"09d.png",
        "light snow":"13d.png",
        "Snow":"13d.png",
        "Heavy snow":"13d.png",
        "Sleet":"13d.png",
        "Light shower sleet":"13d.png",
        "Shower sleet" :"13d.png",
        "Light rain and snow":"13d.png",
        "Rain and snow":"13d.png",
        "Light shower snow":"13d.png",
        "Shower snow":"13d.png",
        "Heavy shower snow":"13d.png",
        "mist":"50d.png",
        "Smoke":"50d.png",
        "Haze":"50d.png",
        "sand/ dust whirls" : "50d.png",
        "fog":"50d.png",
        "sand":"50d.png",
        "dust":"50d.png",
        "volcanic ash":"50d.png",
        "squalls":"50d.png",
        "tornado":"50d.png",
    };

      const temp = meteoInfos[props.meteo.current.weather[0].main];

    
    
      let changebackground = (url) => {
         document.body.style.background ="url(../img/"+url+".jpg)";
      };

      changebackground(temp);

    


    //btn retour
    const handleRetour = () => {
        window.location.reload();
    }
    
    //function change infos meteo
    const handleInfos = (i) => {
        tab.map(items => {
           const mydata = []
            const journe = Math.floor(items.daily[i]?.temp.day - 273);
            const nuit = Math.floor(items.daily[i]?.temp.night - 273);
            const humidity = items.daily[i]?.humidity;
            const pressure = items.daily[i]?.pressure;
            const vent =  items.daily[i]?.wind_speed;
            const icon = meteoIcons[items.daily[i]?.weather[0].description];
            mydata.push( journe , nuit , humidity , pressure , vent);   
          document.getElementById('date').innerHTML = `${(new Date(items.daily[i].dt *1000)).toLocaleDateString('fr',options)}`
          document.getElementById('day').innerHTML = `Jour - ${journe}°C `
          document.getElementById('night').innerHTML = `Nuit - ${nuit}°C `
          document.getElementById('humid').innerHTML = `Humidite - ${humidity}% `
          document.getElementById('press').innerHTML = `Pression - ${pressure}hPa `
          document.getElementById('vent').innerHTML = `Vent - ${vent} Km/h`   
          document.getElementById('iconweather').innerHTML = `<img src=${`https://openweathermap.org/img/wn/${icon}`} alt="icon weather"/>`   
          
          
        })

        return 0;
    }

    
    


    return (
        <div className='meteo-container' id="meteoc" >
            <button id='btn-retour' onClick={handleRetour}>Retour</button> 
            <div className='container-gauche'>
                <div className='card-meteo' id="meteo-card" onClick={() => handleInfos(0)}>
                    <span id="date">{madate.toLocaleDateString('fr',options)} </span>
                    <div className="infos-meteo">
                    <p id="day">Jour - {`${Math.floor(meteo?.daily[0]?.temp.day - 273)}°C`}</p>
                    <p id="night">Nuit - {`${Math.floor(meteo?.daily[0]?.temp.night- 273)}°C`}</p>
                    <p id="humid"name={"humidity"}>Humidite - {`${meteo?.current?.humidity}%`}</p>
                    <p id="press"name={"pressure"}>Pression - {`${meteo?.current?.pressure}hPa`}</p>
                    <p id="vent" name={"wind"}>Vent - {`${meteo?.current?.wind_speed} km/h`}</p>
                    <p id="iconweather">
                        <img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[0].weather[0].description]}`}alt="icon weather"/>
                    </p>
                    </div>
                </div>
            </div>
            <div className='container-droite'>
                <div className='next-card-meteo' onClick={() => handleInfos(1)}>
                    <span id="icon"><img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[1].weather[0].description]}`}alt="icon weather"/></span>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[1].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[1].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo' onClick={() => handleInfos(2)} >
                <span id="icon"><img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[2].weather[0].description]}`} alt="icon weather"/></span>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[2].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[2].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(3)}>
                <span id="icon"><img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[3].weather[0].description]}`}alt="icon weather"/></span>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[3].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[3].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(4)}>
                <span id="icon"><img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[4].weather[0].description]}`}alt="icon weather"/></span>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[4].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[4].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(5)}>
                <span id="icon"><img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[5].weather[0].description]}`} alt="icon weather"/></span>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[5].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[5].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(6)}>
                <span id="icon"><img src={`https://openweathermap.org/img/wn/${meteoIcons[meteo?.daily[6].weather[0].description]}`}alt="icon weather"/></span>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[6].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[6].temp.day-273)}°C`} </div>
                </div>
            </div>    
        </div> 
    );

};

export default Meteo;