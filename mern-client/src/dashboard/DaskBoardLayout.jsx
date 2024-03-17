import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebarr from "./Sidebarr"
const DaskBoardLayout = () => {
    return (
        <div className='flex gap-4 flex-col md:flex-row'>
            <Sidebarr />
            <Outlet />
        </div>
    )
}

export default DaskBoardLayout