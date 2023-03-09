import './item.css';

import React from 'react';

const Item = ({info}) =>{
    return(
        <a href='' className='film'>
            <img src={info.image} alt="1984" />
            <p>{info.Title}</p>
        </a>
    );
}

export default Item;