import React, { useState } from 'react';  

const Login = ({ onLogin }) => {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        if (onLogin) {  
            onLogin(email, password);  
        }  
    };  

    return (  
        <form onSubmit={handleSubmit} className="flex flex-col p-4">  
            <input  
                type="email"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
                placeholder="E-mail"  
                required  
                className="mb-2 p-2 border border-gray-300 rounded"  
            />  
            <input  
                type="password"  
                value={password}  
                onChange={(e) => setPassword(e.target.value)}  
                placeholder="Senha"  
                required  
                className="mb-2 p-2 border border-gray-300 rounded"  
            />  
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">  
                Entrar  
            </button>  
        </form>  
    );  
};  

export default Login;