import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const libro =[
    {id:1, image:"https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg",category:'Novela', Title:"1984 Novela"},
    {id:2,image:"https://img1.od-cdn.com/ImageType-400/5619-1/A81/7CA/71/%7BA817CA71-2E2A-4842-8855-9C695D819FDD%7DImg400.jpg",category:'Novela', Title:"La historia del loco Novela"},
    { id:3,image:"https://images.cdn3.buscalibre.com/fit-in/360x360/e4/01/e401faaab2124ec3aeccf86467857807.jpg",category:"Novela", Title:"El gran gatsby Novela"},
    { id:4,image:"https://elenanofriki.com/17388-large_default/coleccion-harry-potter-salamandra-nueva-edicion.jpg",category:'Fantasia', Title:"Harry Potter"},
    { id:5,image:"https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/N32L5BKXXZMGRJ54NMGJKCKA2M.jpg",category:'Fantasia', Title:"Juego de Tronos"},
];

export const ItemDetailContainer = () =>{
    const[data,setData] = useState({});

    const {detalleId} = useParams();

    useEffect(()=>{
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(libro);
            },1000);
        });

        getData.then(res => setData(res.find(libro => libro.id === parseInt(detalleId))));
    },[detalleId])
     
    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;