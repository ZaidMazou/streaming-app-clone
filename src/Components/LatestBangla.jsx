import React, { useEffect, useState } from 'react';
import CategorieShow from './CategorieShow';
import axios from 'axios';
import CardMovies from './CardMovies';


const LatestBangla = () => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    const [data, setdata] = useState([]);
    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?genre=Comedy',options)
        .then((res)=>setdata(res.data.results))
    },[])
    return (
        <>
        <CategorieShow name = 'Latest Bangla'/>
        <section className="bangla">
            <div className="banglabox">
                {
                    data.map((element,index)=>(
                        element.primaryImage !== null ? <CardMovies key={index} element={element}/> :<></>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default LatestBangla;