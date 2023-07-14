import React from 'react';

const SecondCard = ({element}) => {
    return (
        <div className="fille">
            {
                element.primaryImage ? <a href={'/show/'+element.id}><img src={element.primaryImage.url} alt="" id="img1"/></a>:null
            }
        </div>
    );
};

export default SecondCard;