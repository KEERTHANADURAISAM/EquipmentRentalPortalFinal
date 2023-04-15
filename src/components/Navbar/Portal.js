import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Portal = ({add}) => {
  return (
    <div>
        <Navbar add={add}/>
        <Outlet/>
    </div>
  )
}

export default Portal