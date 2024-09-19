import React, { useState } from 'react';  
import Login from './Login';  
import Signup from './Signup';  

const App = () => {  
    const [user, setUser] = useState(null);  
    const [isSignup, setIsSignup] = useState(false);  

    const handleLogin = (email, password) => {  
        setUser({ email });  
    };  

    const handleSignup = (email, password) => {  
        setUser({ email });  
    };  

    const toggleSignup = () => {  
        setIsSignup(!isSignup);  
    };  

    return (  
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">  
            {!user ? (  
                isSignup ? (  
                    <Signup onSignup={handleSignup} />  
                ) : (  
                    <Login onLogin={handleLogin} />  
                )  
            ) : (  
                <div className="p-4">  
                    <h1 className="text-2xl font-bold">Bem-vindo, {user.email}</h1>  
                </div>  
            )}  
            <button onClick={toggleSignup} className="mt-4 text-blue-500">  
                {isSignup ? 'Já tem uma conta? Faça login.' : 'Não tem uma conta? Crie uma.'}  
            </button>  
        </div>  
    );  
};  

export default App;