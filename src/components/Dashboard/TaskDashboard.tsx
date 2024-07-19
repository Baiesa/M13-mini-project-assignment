import React from 'react';
import { useTaskContext } from '../../context/TaskContext';  
import TaskList from '../Task/TaskList';  

const TaskDashboard: React.FC = () => {
    const { tasks, onEdit, onDelete } = useTaskContext();  

    return (
        <div className="container">
            <h2>Task Dashboard</h2>
            <TaskList tasks={tasks} onEdit={onEdit} onDelete={onDelete} />  {/* Pass tasks and handlers to TaskList */}
        </div>
    );
};

export default TaskDashboard;