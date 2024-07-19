import React, { useState } from 'react';
import { Task } from '../../types/taskTypes';

type TaskFormProps = {
    onSubmit: (task: Task) => void;
    existingTask?: Task;
};

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, existingTask }) => {
    const [title, setTitle] = useState(existingTask?.title || '');
    const [description, setDescription] = useState(existingTask?.description || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const task: Task = { id: existingTask?.id || Date.now(), title, description };
        onSubmit(task);
    };

    return (
        <div className="container">
            <h2>{existingTask ? 'Edit Task' : 'Create Task'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default TaskForm;