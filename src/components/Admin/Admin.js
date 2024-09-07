import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate('/auth');
        }
    }, [token, navigate]);

    return (
        <div>
            Admin
        </div>
    )
}

export default Admin
