import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const ShowImg = ({add,setAddcart}) => {
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
        return <div class="body" key={index}>
          <div className='wrapper'>
 <div className='imgcard'>
        <img src = {value.img}/> 
        <div className='info'> 
        <h1>{value.Brand}</h1>
      <p>Material:{value.Material}</p>
      {/* <div class="card-text"><p>Material:{value._id}</p></div> */}
      {show ?  <Link to={`/portal/cart/${value._id}`} className='btn'onClick={()=>addCart(add,setAddcart)}>Add to Cart  </Link> : 
      <button className='btn' onClick={()=>RemoveCart(add,setAddcart)}>Remove  Cart</button>
     
 }
 </div>
   </div>
      </div>
      </div>
      })}     
    </div>
  )
}

export default ShowImg