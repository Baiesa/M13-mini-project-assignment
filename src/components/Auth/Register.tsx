import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';  
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');  
    const [password, setPassword] = useState<string>('');  
    const { register } = useAuth();  
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await register();  
            navigate('/login');  
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;