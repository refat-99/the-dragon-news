import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';




const Login = () => {
    const rifat = useContext(authContext)
    console.log(rifat.name)
    const handleLogin = e =>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);
       }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center pt-5 text-2xl">Login Your Account</h2>
            <p className='text-center text-xl text-white bg-primary-focus'>{rifat.name}</p>
            <p className='text-center text-xl text-white bg-primary-focus'>{rifat.age}</p>
            <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body mt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="example@gmail.com" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                              <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                              </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                             {/* <input type='submit' className="btn btn-primary" value="Login"/> */}
                        </div>
                            <p className='mt-3 text-center'> 
                                <span>Do not have an account?</span>
                                <Link to="/register" className='pl-2 text-blue-600'>Register</Link>
                            </p>
                    </form>
                    </div>
                    
                </div>
                 
        </div>
    );
};

export default Login;