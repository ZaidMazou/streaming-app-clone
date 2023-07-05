import React from 'react';

const CategorieShow = (props) => {
    return (
        <div className='heder-categorie-show'>
            <h2>{props.name}</h2>
            <h4>See All <i className="bi bi-arrow-right"></i></h4>
        </div>
    );
};

export default CategorieShow;