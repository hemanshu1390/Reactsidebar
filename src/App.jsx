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
              {/* Add more routes as needed */}
                  {/* <Route path="/reporting" element={<Reporting />} />
                   <Route path="/projects" element={<Projects />} /> */}
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