import React from 'react';
import { NavLink } from 'react-router-dom';

const CardMovies = ({element}) => {
    return (
        <div className='contentmoviesbox'>
            <NavLink to={'show/'+element.id}><img src={element.primaryImage.url} alt=""/></NavLink>
            <p>{element.titleText.text}</p>
        </div>
    );
};
export default CardMovies;