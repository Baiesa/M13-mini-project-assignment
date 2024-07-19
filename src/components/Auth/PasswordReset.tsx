import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';  

const PasswordReset: React.FC = () => {
    const [email, setEmail] = useState('');
    const { resetPassword } = useAuth();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert('Password reset link sent to your email');
        } catch (error) {
            console.error('Password reset failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required 
            />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default PasswordReset;