import React, { useState } from 'react'
import '../pages/Page.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Swal from 'sweetalert2';

const Signup = () => {
// To track Form Data and Update
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    // To Trigger signup form
    const signup = (event) =>{
        event.preventDefault();
        setLoading(true)

        const requestData = {fullName,email,password}
        console.log(requestData);
        
        axios.post(`${API_BASE_URL}/signup`, requestData)
            
            .then((result)=>{
                console.log(result);
                
                if(result.status === 201){
                    setLoading(false);
                    Swal.fire({
                        icon:"success",
                        title:"User Successfully Register"
                    })
                }
                setFullName('')
                setEmail('')
                setPassword('')
                
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false);
                Swal.fire({
                    icon:"error",
                    title:"Some error occurred please try again later"
                })
            })
    }


  return (
    <div className="container login-container">
                <div className="row">
                    <div className="col-md-7 col-lg-7 col-sm-12 d-flex justify-content-center align-items-center">
                        <img className="socialDesktop img-fluid" src={require('../Images/social-desktop.PNG')} alt="social-img" style={{height:'85%'}} />
                        <img className="socialMobile img-fluid" src={require('../Images/social-mobile.PNG')} alt="social-mobile-img" style={{height:'85%'}} />
                    </div>
                    <div className="col-md-5 col-lg-5 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="card shadow" >
                            {/* Loading Effect */}
                            { loading ?
                                <div className='col-md-12 mt-3 text-center'>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div> : ""
                            }
                           
                            
                            <div className="card-body px-5">
                                <h4 className="card-title text-center fw-bold mb-3">Sign Up</h4>
                                <form onSubmit={(e)=>signup(e)}>
                                    <div className="mb-3">
                                        <input type="number"   className="p-2 form-control input-bg" placeholder="Phone"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" value={email} onChange={(ev)=>setEmail(ev.target.value)} className="p-2 form-control input-bg" placeholder="Email"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" value={fullName} onChange={(ev)=>setFullName(ev.target.value)} className="p-2 form-control input-bg" placeholder="Full Name"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" value={password} onChange={(ev)=>setPassword(ev.target.value)} className="p-2 form-control input-bg" placeholder="Password"/>
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary form-control cursor-pointer">Sign Up</button>
                                    <div className="my-3 text-center">
                                        <hr className="text-muted"/>
                                        <h5 className="text-muted">or</h5>
                                        <hr className="text-muted"/>
                                    </div>

                                    <div className="my-3">
                                        <button className="custom-btn custom-btn-white form-control">
                                            <span className="text-muted">Already have an account?</span>
                                            <Link to= "/login" className="ms-1 text-info fw-bold">Log In</Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
  )
}

export default Signup