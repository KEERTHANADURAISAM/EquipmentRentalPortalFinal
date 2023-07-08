import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Cart.css';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

const Cart = () => {
  const navigate=useNavigate()
 const [permonth,setPerMonth]=useState(300)

  const [month, setMonth] = useState('')
  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  const params = useParams();
  console.log(params);
  const [obj,setObj] = useState({});
  useEffect(()=>{
getImgDetails();
  },[])


  let getImgDetails = async () =>{
    try {
      let object = await axios.get(`https://backend-server-project.onrender.com/getimg/${params.id}`);
      console.log(object.data);
setObj(object.data);
    } catch (error) {
      console.log(error);
    }
  }
  // payment redirect function
  const buttonMove=(obj)=>{
    if(obj === 'Available'){
console.log('success');
return navigate('/payment')
    }
      return navigate('/portal/cart/:id')
    }

    return (
    <div className='body'>
          <div className='wrapper'>
 <div className='imgcard'>
        <img src = {obj.img}/> 
        <div className='info'> 
        <h1>{obj.Brand}</h1>
      <p>Material:{obj.Material}</p>
      <p>Maximum_Weight:{obj.Maximum_Weight}</p>
      <p>Availability:{obj.Availability}</p>
      <p>RentperMonth:{obj.RentperHour}</p>
      <FormControl fullWidth >
  <InputLabel id="demo-simple-select-label" >Month</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={month}
    label="month"
    onChange={handleChange}
    className='input-lable'
  >
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={6}>6</MenuItem>
    <MenuItem value={12}>12</MenuItem>
  </Select>
</FormControl>
{/* <Link to='/payment'> */}
      <button className='btn' onClick={()=>buttonMove(obj.Availability)}>BOOK NOW</button>
      {/* </Link> */}
</div>
      </div>
      </div> 
           
    </div>
  )
}

export default Cart


