import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Ecommerce (){
    return(
        <div className=' '>

            <h1 className='fw-bolder fs-5  text-cyan-900'>This is ecommerce </h1>
           <Outlet/>
        </div>
    );
}