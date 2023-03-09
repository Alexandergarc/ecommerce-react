import React, {useEffect, useState} from "react";

import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import Title from '../Title'; 

const films = [
    {id:1, image:"https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg", Title:"1984"},
    {id:2,image:"https://img1.od-cdn.com/ImageType-400/5619-1/A81/7CA/71/%7BA817CA71-2E2A-4842-8855-9C695D819FDD%7DImg400.jpg", Title:"La historia del loco"},
    { id:3,image:"https://images.cdn3.buscalibre.com/fit-in/360x360/e4/01/e401faaab2124ec3aeccf86467857807.jpg", Title:"El gran gatsby"},
]

export const ItemListContainer =({ texto }) =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(films);
            },3000);
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} undiades`);
    }

    return (
        <>
        <Title greeting ={texto} />
        <ItemCount initial ={1} stock ={5} onAdd ={onAdd} />
        <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;