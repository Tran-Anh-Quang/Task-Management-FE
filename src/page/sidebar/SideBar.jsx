import React, { useState } from 'react';
import { Avatar, Button } from '@mui/material';
import './SideBar.css'
import CreateNewTaskForm from '../task/CreateTask'
import { useLocation, useNavigate } from 'react-router-dom';

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

    const location = useLocation();

    const navigate = useNavigate();

    const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);

    const handleCloseCreateTaskForm = () => {
        setOpenCreateTaskForm(false);
    }

    const handleOpenCreateTaskModel = () => {
        setOpenCreateTaskForm(true);
    }

    const [activeMenu, setActiveMenu] = useState("HOME");

    const handleMenuChange = (item) => {

        const updatedParams = new URLSearchParams(location.search);

        if (item.name === "Create New Task") {
            handleOpenCreateTaskModel();
        }
        else if (item.name === "Home") {
            updatedParams.delete("filter")
            const queryString = updatedParams.toString();
            const updatedPath = queryString ? `${location.pathname}?${queryString}` : location.pathname;
            navigate(updatedPath);
        }
        else {
            updatedParams.set("filter", item.value);
            navigate(`${location.pathname}?${updatedParams.toString()}`);
        }
        setActiveMenu(item.name)
    }

    const handleLogout = () => {
        console.log("logout")
    }

    return (
        <>
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
                        cursor-pointer ${activeMenu === item.name ? "activeMenuItem" : "menuItem"}`} onClick={() => handleMenuChange(item)} >{item.name}</p>)
                    }
                    <Button onClick={handleLogout} sx={{ padding: ".7rem", borderRadius: "2rem" }} fullWidth className='logoutButton'>
                        Logout
                    </Button>
                </div>
            </div>
            <CreateNewTaskForm open={openCreateTaskForm} handleClose={handleCloseCreateTaskForm} />
        </>
    );
}

export default SideBar;
