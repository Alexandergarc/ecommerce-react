import React from "react";
import './itemDetail.css';
export const ItemDetail = ({data}) =>{
    return(
       <div className="container">
        <div className="detail">
            <img className="detail_image" src={data.image} alt="" />
            <div>
                <h1>{data.Title}</h1>
            </div>
        </div>
       </div>
    );
}

export default ItemDetail;