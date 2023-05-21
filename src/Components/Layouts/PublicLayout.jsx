import React from 'react'
import './style.scss'

const PublicLayout = ({children}) => {
  return (
    <>
       <div className=' mx-2 sidebar_right adjust'>
        {children}
      </div>
    </>
  )
}

export default PublicLayout