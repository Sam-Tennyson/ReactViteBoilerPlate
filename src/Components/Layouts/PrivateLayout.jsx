import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.scss'

const PrivateLayout = ({children}) => {
  return (
    <>
      <h2>Boiler place integrated successfully</h2>
      <div className='private-screen'>
        {children}
      </div>
      <Outlet />
    </>
  )
}

export default PrivateLayout