import React from 'react';
import { NavLink } from 'react-router-dom';

const Image = ({movie}) => {
    return (
        <div>
            <NavLink to={`/show/${movie.id}`}><img src={movie.primaryImage.url} id='img' alt="" /></NavLink>
        </div>
    );
};

export default Image;