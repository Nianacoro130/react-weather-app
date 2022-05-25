import React from 'react';
import '../../styles/meteo.css';



const Meteo = (props) => {
    const {meteo} = props;
    const madate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const tab = [props.meteo];
    


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
            mydata.push( journe , nuit , humidity , pressure , vent);   
          document.getElementById('date').innerHTML = `${(new Date(items.daily[i].dt *1000)).toLocaleDateString('fr',options)}`
          document.getElementById('day').innerHTML = `Jour - ${journe}°C `
          document.getElementById('night').innerHTML = `Nuit - ${nuit}°C `
          document.getElementById('humid').innerHTML = `Humidite - ${humidity}% `
          document.getElementById('press').innerHTML = `Pression - ${pressure}hPa `
          document.getElementById('vent').innerHTML = `Vent - ${vent} Km/h`    
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
                    </div>
                </div>
            </div>
            <div className='container-droite'>
                <div className='next-card-meteo' onClick={() => handleInfos(1)}>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[1].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[1].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo' onClick={() => handleInfos(2)} >
                    <div  id='next-date'>{`${(new Date(meteo?.daily[2].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[2].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(3)}>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[3].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[3].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(4)}>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[4].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[4].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(5)}>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[5].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[5].temp.day-273)}°C`}</div>
                </div>

                <div className='next-card-meteo'  onClick={() => handleInfos(6)}>
                    <div  id='next-date'>{`${(new Date(meteo?.daily[6].dt *1000)).toLocaleDateString('fr',options)}`}</div>
                    <div id='degres'>{`${Math.floor(meteo?.daily[6].temp.day-273)}°C`} </div>
                </div>
            </div>    
        </div> 
    );

};

export default Meteo;