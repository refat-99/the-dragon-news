import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { authContext } from '../../Provider/AuthProvider';
import Footer from '../Shared/Footer/Footer';

const About = () => {
    const {user}= useContext(authContext);

    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center text-xl text-white bg-slate-900'>
            <h1>About Me</h1>
            <p>{user && user.email}</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;