import React, { createContext, useReducer, ReactNode, useContext } from 'react';

export interface Task {
    id: number;
    title: string;
    description: string;
}

interface TaskContextType {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);


const taskReducer = (state: Task[], action: { type: string; payload: any }): Task[] => {
    switch (action.type) {
        case 'EDIT_TASK':
            return state.map(task => task.id === action.payload.id ? action.payload : task);
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const onEdit = (task: Task) => {
        dispatch({ type: 'EDIT_TASK', payload: task });
    };

    const onDelete = (id: number) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    return (
        <TaskContext.Provider value={{ tasks, onEdit, onDelete }}>
            {children}
        </TaskContext.Provider>
    );
};

const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};

export { TaskProvider, useTaskContext };