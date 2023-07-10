import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Groupeimage = () => {
    const [movies, setmovies] = useState();
    const options = {
        method: 'GET',
        params: {
            'genre': 'Drama',
            'year': '2024'
        },
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        }
    };
    useEffect(()=>{
        axios.get('https://moviesdatabase.p.rapidapi.com/titles',options)
        .then((res)=>setmovies(res.data.results))
      },)
    return (
        <div className='groupeimage'>
            <p>Movies for you</p><br />
            <div className="images">
                {
                    movies ?
                    movies.map((element,index)=>(
                        element.primaryImage ? <NavLink to={'/show/'+element.id}><img src={element.primaryImage.url} id='img' alt=""key={index} /></NavLink> :null
                    )): <span></span>
                }
            </div>
        </div>
    );
};
export default Groupeimage;