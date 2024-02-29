import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivatePage = ({children}) => {
    const {user,loading} = useContext(authContext);
        if(loading){
            return <span className="loading loading-dots loading-lg"></span>;
        }
        if(user){
            return children;
        }
       return <Navigate to="/login"></Navigate>
};

export default PrivatePage;