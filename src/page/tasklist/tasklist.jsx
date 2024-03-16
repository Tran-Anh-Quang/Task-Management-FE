import React, { useEffect } from 'react'
import TaskCard from '../task/taskcard/TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../../redux/TaskSlice';

const Tasklist = () => {
    const dispatch = useDispatch();
    const {task} = useSelector(store => store)

    useEffect(() => {
        dispatch(fetchTasks({}))
    }, [dispatch]);

    console.log("task", task)

    return (
        <div className='w-[67vw]'>
            <div className='space-y-3'>
                {
                    [1, 1, 1, 1].map((item) => <TaskCard />)
                }
            </div>
        </div>
    )
}

export default Tasklist
