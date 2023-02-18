import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const AppLayout = () => {
  return (
    <div sx={{
        flexDirection: "row",
        justifyContent: "center"
    }}>
        <Sidebar />
        <div className='main'>
            <Outlet />
        </div>
    </div>
  )
}

export default AppLayout