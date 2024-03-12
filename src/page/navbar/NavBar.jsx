import { Avatar } from '@mui/material';
import React from 'react';
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 
        lg:px-10, flex justify-between items-center'>
            <p className='font-bold text-lg'>Task Manager</p>

            <div className='flex items-center gap-5'>
            {/* at <p> fetch username from backend */}
                <p> Dino</p>  
                <Avatar sx={{ bgcolor: '#c24dd0' }} className='bg-[#c24dd0]'>C</Avatar>
            </div>
        </div>
    );
}

export default NavBar;
