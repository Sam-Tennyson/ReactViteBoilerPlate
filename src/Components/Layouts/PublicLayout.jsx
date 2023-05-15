import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.scss'
const PublicLayout = ({children}) => {
  return (
    <>
        {/* <Header /> */}
        <h2>Boiler plate integrated Successfully</h2>
        {/* <Sidebar /> */}

          <div className=' mx-2 sidebar_right adjust'>
          {children}
          </div>
          {/* <div className="p-4 left-sidebar adjust">
            <LeftSidebar />
          </div> */}
        <Outlet />
    </>
  )
}

export default PublicLayout