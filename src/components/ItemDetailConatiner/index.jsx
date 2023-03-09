import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

const film = {id:1, image:"https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg", Title:"1984"}

export const ItemDetailContainer = () =>{
    const[data,setData] = useState({});

    useEffect(()=>{
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(film);
            },3000);
        });
        getData.then(res => setData(res));
    },[])
    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;