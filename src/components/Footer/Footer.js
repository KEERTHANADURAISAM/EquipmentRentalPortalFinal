import React, { useState } from 'react'
import FooterData from './FooterData/FooterData'
import './Footer.css';

const Footer = () => {
    const [footer,setFooter]=useState(FooterData)
 console.log(footer)
    return (
    <div>
        {footer.map((value,index)=>{
            return <div key={index} className='card-containers-one'>

                <h3>{value.header}</h3>
                <p>{value.linkOne}</p>
                <p>{value.linkTwo}</p>
                <p>{value.linkFour}</p>
  
            </div>
          
        })}
        
        <h4 className='foo-text'>Made with ❤️|| All Rights Reserverd</h4>
    </div>
  )
}

export default Footer