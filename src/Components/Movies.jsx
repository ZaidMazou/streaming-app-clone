import React, { useEffect, useState } from 'react';
import CategorieShow from './CategorieShow';
import axios from 'axios';
import CardMovies from './CardMovies';


const Movies = () => {
    const [data, setdata] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?genre=Action',options)
        .then((res)=>setdata(res.data.results))
      },[])
    return (
        <>
        <CategorieShow name ='Movies for you'/>
        <section className="movies">
            <div className="moviesbox">
                {
                    data.map((element)=>(
                       element.primaryImage !== null ? <CardMovies key={element.id} element={element}/> :<></>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default Movies;