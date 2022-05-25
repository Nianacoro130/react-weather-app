import React from 'react';
import '../../styles/home.css'

const Home = (props) => {
    //recuperes les donnes de la class parents 
    const {updateVille , fetchMeteo , setError} = props;

    return (
        <>
        <div className='container-home'> 
            <form  onSubmit={fetchMeteo}>
                <div className='search'>
                    <h1>The Forest Weather App</h1>
                    <input type="text" placeholder="search city"  onChange={e =>updateVille(e.target.value)}   /> 
                    {<span id ='error'>{setError && "Not found ! "}</span> }
                </div> 
            </form>
        </div>
        </>
    );
};

export default Home;