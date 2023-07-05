import React from 'react';
import { NavLink } from 'react-router-dom';

const CardLives = ({element}) => {
    return (
        <div className="content-1">
            <div className="img-content1">
                <NavLink to={'show/'+element.id}><img src={element.primaryImage.url} alt=""/></NavLink>
                <div className="content-content1">
                    <h3>{element.titleText.text}</h3>
                    <p>750 watching now</p>
                    <a href="">Lives Now</a>
                </div>
            </div>
        </div>
    );
};

export default CardLives;