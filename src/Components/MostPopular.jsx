import React, { useEffect, useState } from 'react';
import CategorieShow from './CategorieShow';
import axios from 'axios';
import CardMostPopular from './CardMostPopular';

const MostPopular = () => {
    const [data, setdata] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles?list=most_pop_movies',options)
        .then((res)=>setdata(res.data.results))
    },[])
    return (
        <>
        <CategorieShow name ='Most Popular'/>
        <section className="most-popular">
            <div className="boxMost-popular">
                {
                    data.map((element)=>(
                        <CardMostPopular key={element.id} element={element}/>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default MostPopular;