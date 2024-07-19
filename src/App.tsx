import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDashboard from './components/Dashboard/TaskDashboard';
import TaskDetail from './components/Dashboard/TaskDetail';
import TaskForm from './components/Task/TaskForm';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PasswordReset from './components/Auth/PasswordReset';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import { TaskProvider } from './context/TaskContext';

const App: React.FC = () => {
    return (
        <Router>
            <TaskProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<TaskDashboard />} />
                    <Route path="/dashboard" element={<TaskDashboard />} />
                    <Route path="/task/:id" element={<TaskDetail />} />
                    <Route path="/create-task" element={<TaskForm onSubmit={() => {}} />} />
                    <Route path="/edit-task/:id" element={<TaskForm onSubmit={() => {}} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset-password" element={<PasswordReset />} />
                </Routes>
                <Footer />
            </TaskProvider>
        </Router>
    );
};

export default App;