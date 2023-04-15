import React from 'react'
import Testimonial from './Testimonial'
import Data from './Data/Data'



const TestProps = (props) => {
  return (
   <div>
    
       {Data.map((value,index)=><Testimonial key={index} value={value}/>)}
       
    
</div>
  )
}

export default TestProps