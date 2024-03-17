import React, { useEffect } from 'react'
import TaskCard from '../task/taskcard/TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, fetchUsersTasks } from '../../redux/TaskSlice';
import { useLocation } from 'react-router-dom';

const Tasklist = () => {
    const dispatch = useDispatch();
    const { task, auth } = useSelector(store => store)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filterValue = queryParams.get("filter");


    useEffect(() => {
        if (auth.user?.role === "ROLE_ADMIN") {
            dispatch(fetchTasks({ status: filterValue }))
        }
        else {
            dispatch(fetchUsersTasks({ status: filterValue }))
        }
    }, [filterValue, auth.user?.role, dispatch]);

    console.log("task", task)

    return (
        <div className='w-[67vw]'>
            <div className='space-y-3'>
                {
                    Array.isArray(task.tasks) && task.tasks.map((item) => <TaskCard item={item} />)
                }
            </div>
        </div>
    )
}

export default Tasklist
