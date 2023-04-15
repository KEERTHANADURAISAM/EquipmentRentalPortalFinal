import React, { useState } from 'react'
import './style.css'
import Data from './Data'
const Viewimg = () => {
  const [view,setView]=useState(Data)
  console.log(view)

  return ( 
    <>
    {view.map((value,index)=>{
      <div className='body'>
         <div className='imgcard'>
        <img src={value.img}/>
        <div className="info">
            <h1>heading</h1>
            <p>Material</p>
            <p>Availability</p>
            <p>Rent Per Month</p>
            <button className='btn'>Add to Cart</button>
        </div>
      </div>
    </div>
   
    })}
    
    </>
  )
}

export default Viewimg



{/* <div className='body'>
   
<div className='imgcard'>
 <img src={value.img}/>
 <div className="info">
     <h1>{value.Brand}</h1>
     <p>Material:{value.Material}</p>
     <p>Availability:{value.Availability}</p>
     <p>Rent Per Month:{value.RentperHour}</p>
     <button className='btn'>Add to Cart</button>
 </div>
</div>

</div> */}