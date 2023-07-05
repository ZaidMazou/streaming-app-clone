import React, { useEffect,useState } from 'react';
import CategorieShow from './CategorieShow';
import axios from 'axios';
import CardLives from './CardLives';


const LivesNow = () => {
    const [data, setdata] = useState([]);
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?year=2023',options)
        .then((res)=>setdata(res.data.results))
    },[])

    return (
        <><CategorieShow name ='Lives Now'/>
        <section className="content1">
            <div className="content-slider">
                {
                    data.map((element,index)=>(
                        element.primaryImage !== null ? <CardLives key={index} element ={element}/> :<></>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default LivesNow;