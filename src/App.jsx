import { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Route, Routes } from "react-router-dom";
import React from 'react'
import MSidebar from "./components/sidebar";
import Submi1 from "./components/submenu/submi1";
import Submi2 from "./components/submenu/submi2";
import Submenu from "./components/subm";
import Dashboard from "./components/Dashboard";
import System from "./components/system";
import Ecommerce from "./components/EC/E-commerce";
import Orders from "./components/EC/orders";
import Inbox from "./components/Inbox";
import Profile from "./components/Profile";
import Lo from "./components/Logout";
import Products from "./components/EC/products";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="bg-blue-500 p-4 flex justify-between items-center">
          <Typography variant="h6" color="white">
            My Application
          </Typography>
          <IconButton color="white" onClick={toggleSidebar}>
            <Bars3Icon className="h-6 w-6" />
          </IconButton>
        </div>
        <div className="flex flex-grow overflow-hidden">
          <MSidebar isOpen={isSidebarOpen} />
          <div className="flex-grow p-4 overflow-auto">
            <Routes>
             
              <Route path="/" element={<Dashboard/>} >
                  <Route path="/submenu" element={<Submenu/>}>
                         <Route path="subi1" element={<Submi1/>} />
                         <Route path="subi2" element={<Submi2/>} />
                   </Route> 
              </Route>
              <Route path="/E-c" element={<Ecommerce/>} >
                
                         <Route path="order" element={<Orders/>} />
                         <Route path="product" element={<Products/>} />
               
              </Route>
              {/* Add more routes as needed */}
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/lo" element={<Lo/>} /> 

                   <Route path="/inbox" element={<Inbox />} /> 
                   <Route path="/s" element={<System />} /> 

            </Routes>
          </div>
        </div>
      </div>
    </>


  );
}






// function Ec() {
//   return <div>E-Commerce Content</div>;
// }

// function Order(){
//   return <div>Orders content</div>
// }
// function Product() {
//   return <div>Product Content</div>;
// }
// function Inbox() {
//   return <div>Inbox Content</div>;
// }function Profile() {
//   return <div>Profile Content</div>;
// }function Settings() {
//   return <div>Settings Content</div>;
// }function Logout() {
//   return <div>Logout</div>;
// }

export default App;