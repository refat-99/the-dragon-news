import React, { useState } from 'react';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Header from '../Shared/Header/Header';
import {useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';


const News = () => {
    const news = useLoaderData()
    // console.log(news)
    const {id} = useParams()

    const found = news.find((news) => news._id === id);
    console.log(found)
  
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                <div className="card bg-base-100 shadow-xl mb-2	">
                <figure><img src={found.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{found.title}</h2>
                   <p>{found.details}</p>
                  
                </div>
            </div>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            
            </div>
            <Footer></Footer>
            </>
    );
};

export default News;