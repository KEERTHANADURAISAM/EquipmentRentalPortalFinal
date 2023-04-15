import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Show.css';

const Show = ({add,setAddcart}) => {
const [img,setImg]=useState([])
const [show,setShow]=useState(true);
useEffect(()=>{
loadImage()
  },[])

  const loadImage=async ()=>{
    let image = await axios.get(`https://backend-server-project.onrender.com/getequipment`);
    console.log(image);
    setImg(image.data);
    console.log(img)
   }
   const addCart=(add,setAddcart)=>{
    setShow(false)
    setAddcart(add + 1)
  
   }


   const RemoveCart=(add,setAddcart)=>{
    setShow(true)
    setAddcart(add - 1)
   }
  return (
    <div>
      {img.map((value,index)=>{
        return <div class="card-containers" key={index}>
 
        <img src = {value.img} className='equipment-img'/> 
        <h1 className='header'>{value.Brand}</h1>
      <div class="card-text"><p>Material:{value.Material}</p></div>
      {/* <div class="card-text"><p>Material:{value._id}</p></div> */}
      {show ?  <Link to={`/portal/cart/${value._id}`} className='cart-btn'onClick={()=>addCart(add,setAddcart)}>Add to Cart  </Link> : 
      <button className='cart-btn' onClick={()=>RemoveCart(add,setAddcart)}>Remove  Cart</button>
  }
  
      </div>
  
      })}     
    </div>
  );
};
export default Show;

