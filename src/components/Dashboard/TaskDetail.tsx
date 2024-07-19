import React from 'react';
import { useParams } from 'react-router-dom';
import { useTaskContext } from '../../context/TaskContext';  

const TaskDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();  
    const { tasks } = useTaskContext();  

   
    const task = tasks.find(task => task.id === Number(id));

    if (!task) {
        return <div>Task not found</div>;  
    }

    return (
        <div className="container">
            <h2>Task Detail</h2>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
        </div>
    );
};

export default TaskDetail;