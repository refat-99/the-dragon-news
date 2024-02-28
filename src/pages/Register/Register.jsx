import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';




const auth = getAuth(app)
const Register = () => {
    const [regError, setRegError] = useState('');
    const handleRegister = e =>{
        
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegError('')

        createUserWithEmailAndPassword(auth,email,password)
            .then((result) =>{
                const user = result.user;
                
            })
            .catch((error) =>{
                
                setRegError("Already use this mail");
            })
    }
    return (
        <div>
        <Navbar></Navbar>
       
        <h2 className="text-center pt-5 text-2xl">Register Your Account</h2>
        { 
            regError && <p className='text-center text-red-700'> !!{regError}</p>
        }
        <div className="hero-content">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body mt-0">
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                         {/* <input type='submit' className="btn btn-primary" value="Login"/> */}
                    </div>
                        <p className='mt-3 text-center'> 
                            <span>Already have an account?</span>
                            <Link to="/login" className='pl-2 text-blue-600'>Login Now</Link>
                        </p>
                        
                </form>
                
                </div>
                
            </div>
             
    </div>
       
    );
};

export default Register;