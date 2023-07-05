import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SecondCard from './SecondCard';

const SecondShower = () => {
    const [movies, setmovies] = useState();
    const options = {
        method: 'GET',
        params: {
            'genre': 'Action',
            'year': '2023'
        },
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        }
    };
    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles',options)
        .then((res)=>setmovies(res.data.results))
      },[])
    return (
        <div className='second'>
            {
                movies ?
                movies.map((element)=>(
                    <SecondCard key={element.id} element={element}/>
                )) : null
            }
        </div>
    );
};
export default SecondShower;