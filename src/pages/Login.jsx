import React, {useState} from "react";
import '../pages/Page.css';
// import '../Images/social-desktop.PNG'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";

const Login = () =>{

    // To track Form Data and Update
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    // To store login detail in redux and navigate to myProfile page
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // To Trigger signup form
    const login = (event) =>{
        event.preventDefault();
        setLoading(true)

        const requestData = {email,password}
        console.log(requestData);
        
        axios.post(`${API_BASE_URL}/login`, requestData)
            
            .then((result)=>{
                console.log(result);
                
                if(result.status === 200){
                    setLoading(false);
                    Swal.fire({
                        icon:"success",
                        title:"User Successfully loggedin"
                    })
                    localStorage.setItem("token",result.data.result.token)
                    localStorage.setItem("user",JSON.stringify(result.data.result.user))
                    dispatch({type:'LOGIN_SUCCESS', payload:result.data.result.user})
                    navigate('/myprofile')
                }
                
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
                setEmail('')
                setPassword('')
            })
    }



    return(
        <>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-7 col-lg-7 col-sm-12 d-flex justify-content-center align-items-center">
                        <img className="socialDesktop" src={require('../Images/social-desktop.PNG')} alt="social-img" style={{height:'85%'}} />
                        <img className="socialMobile" src={require('../Images/social-mobile.PNG')} alt="social-mobile-img" style={{height:'85%'}} />
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
                                <h4 className="card-title text-center fw-bold mb-3">Log In</h4>
                                <form onSubmit={(e)=>login(e)}>
                                    <div className="mb-3">
                                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="p-2 form-control input-bg" placeholder="Phone number, username or email"/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="p-2 form-control input-bg" placeholder="Password"/>
                                    </div>
                                   
                                    <button type="submit" className="btn btn-primary form-control">Login</button>
                                    <div className="my-3 text-center">
                                        <hr className="text-muted"/>
                                        <h5 className="text-muted">or</h5>
                                        <hr className="text-muted"/>
                                    </div>

                                    <div className="my-3">
                                        <button className="custom-btn custom-btn-white form-control">
                                            <span className="text-muted">Don't have an account?</span>
                                            <Link to="/signup" className="ms-1 text-info fw-bold">Signup</Link>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;