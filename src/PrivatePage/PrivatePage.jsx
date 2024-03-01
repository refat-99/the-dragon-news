import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatePage = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation();
    // console.log(location)

        if(loading){
            return <span className="loading loading-dots loading-lg"></span>;
        }
        if(user){
            return children;
        }
       return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivatePage;