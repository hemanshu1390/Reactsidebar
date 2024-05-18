import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Submenu(){
    return(
        <>
        <div className=' '>

            <h1 className='fw-bolder fs-5  text-cyan-900'>This is Submenu</h1>
        </div>
        <Outlet/>
        </>
    );
}