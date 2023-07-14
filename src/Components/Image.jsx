import React from 'react';
import { NavLink } from 'react-router-dom';

const Image = ({movie}) => {
    return (
        <div>
            <a href={`/show/`+movie.id}><img src={movie.primaryImage.url} id='img' alt="" /></a>
        </div>
    );
};

export default Image;