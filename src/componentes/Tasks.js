import React from 'react';
import Task from './Task';

const Tasks = ({tasks}) => {
    
return (
// <> chama fragment 
    <>
        {tasks.map((task)=>
         (<Task task={task} />))}
    </>

)

}

export default Tasks;