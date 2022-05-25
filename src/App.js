import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Meteo from './components/Meteo/Meteo';
import Home from './components/Home/Home';



const App = () => {

  const apikey = process.env.REACT_APP_APIKEY ;
  const [ville, updateVille] = useState();
  const [meteo, updateMeteo] = useState();
  const [error, setError] = useState(false);

  //get les 
  const fetchMeteo = async (e) => {
    e.preventDefault();

    try {

      //fetch 1 pou recuper les coordonnes pour fetch 2
      const responseOne = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apikey}`,);

      const lat = responseOne.data.coord.lat;
      const lon = responseOne.data.coord.lon;


      //fetch2 recupere infos precis de la meteo
      const responseTwo =  await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,&appid=${apikey}`)

        updateMeteo(responseTwo.data)


             
  
    }catch (error) {
      
      console.log(error.message);
      setError(true);
          
    }

     
  };
  return (
    <>
    { ville && meteo ? (
       <Meteo meteo={meteo} ville={ville} />
    ) : (
      <Home updateVille={updateVille} fetchMeteo={fetchMeteo}  setError={error}  />
    )}
    </>
  );
};

export default App;