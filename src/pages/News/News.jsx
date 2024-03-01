import React from 'react';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Header from '../Shared/Header/Header';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const {id} = useParams()
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h4>Comming</h4>
                    <p>{id}</p>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            
            </div>
            </>
    );
};

export default News;