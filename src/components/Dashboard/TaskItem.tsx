import React from 'react';
import { Task } from '../../types/taskTypes';

type TaskItemProps = {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onEdit(task)} className="btn btn-secondary">Edit</button>
            <button onClick={() => onDelete(task.id)} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default TaskItem;