import React from 'react'

const TaskCard = () => {
    return (
        <div>
            <div className='card lg:flex justify-between'>
                <div className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]'>
                    <div className=''>
                        <img className='lg:w-[7rem] lg:h-[7rem] object-cover'
                            src='https://th.bing.com/th/id/R.57f3234f65f0f327e7b86860c5cebd71?rik=J70r%2fLnMW4FTWQ&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f06%2f10%2fhd-4k-wallpaper_065239257_309.jpg&ehk=RWo6wC7ClTZZ%2fTcTlBc58QaARl9LC0f4cJz9A0EjB2A%3d&risl=1&pid=ImgRaw&r=0'
                            alt='' />
                    </div>
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-lg'>Car Rental Website</h1>
                            <p className='text-gray-500 text-sm'>use latest frameworks and technology to make this website</p>
                        </div>
                        <div className='flex flex-wrap gap-2 items-center'>
                            {[1, 1, 1, 1].map((item) => <span className='py-1 px-5 rounded-full techStack'>
                                Angular
                            </span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
