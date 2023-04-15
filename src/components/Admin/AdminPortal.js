import React from 'react'
import Admin from './Admin'
import { Outlet } from 'react-router-dom'

const AdminPortal = () => {
  return (
    <div>
        <Admin/>
        <Outlet/>
              </div>
  )
}

export default AdminPortal