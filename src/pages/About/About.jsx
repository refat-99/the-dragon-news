import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { authContext } from '../../Provider/AuthProvider';

const About = () => {
    const {user}= useContext(authContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center text-xl text-white bg-slate-900'>
            <h1>About Us</h1>
            <p>{user.email}</p>
            

            </div>
        </div>
    );
};

export default About;