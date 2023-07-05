import React from 'react';

const SecondCard = ({element}) => {
    return (
        <div className="fille">
            {
                element.primaryImage ? <img src={element.primaryImage.url} alt="" id="img1"/>:null
            }
        </div>
    );
};

export default SecondCard;