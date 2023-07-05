import React, { useEffect, useState } from 'react';
import Firstcontent from './Firstcontent';
import Groupeimage from './Groupeimage';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MainShower = () => {
  const [data, setdata] = useState();
    const id = useParams()

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fea723bb2dmsh6467aab41188dedp1d0affjsnfa39a30f2037',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      useEffect(()=>{
        axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${id.id}`,options)
        .then((res)=>setdata(res.data.results))
      },[])
    return (
          <div className='main'>
            { data ?
              <Firstcontent data={data}/> : <span></span>
            }
            <Groupeimage/>
          </div>
    );
};

export default MainShower;