import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import './SideBar.css'

const menu = [
    { name: "Home", value: "home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "Done", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "Assigned", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
    { name: "Not Assigned", value: "PENDING", role: ["ROLE_ADMIN"] },
    { name: "Create New Task", value: "", role: ["ROLE_ADMIN"] },
    { name: "Notification", value: "NOTIFICATION", role: ["ROLE_CUSTOMER"] }
]

const role = "ROLE_ADMIN"

const SideBar = () => {
    const [activeMenu, setActiveMenu] = useState("HOME");
    return (
        <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
            <div className='space-y-5 h-full'>
                <div className='flex justify-center'>
                    <Avatar
                        sx={{ width: "8rem", height: "8rem" }}
                        className='border-2 border-[#c24dd0]'
                        src='https://cdn4.iconfinder.com/data/icons/profession-avatar-5/64/29-programmer-512.png' />
                </div>
                {
                    menu.filter((item) => item.role.includes(role))
                        .map((item) => <p className={`py-3 px-5 rounded-full text-center 
                        cursor-pointer ${activeMenu === item.name ? "activeMenuItem" : "menuItem"}`} onClick={() => setActiveMenu(item.name)} >{item.name}</p>)
                }
            </div>
        </div>
    );
}

export default SideBar;
