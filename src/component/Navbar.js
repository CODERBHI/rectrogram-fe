import React  from 'react'
import '../component/navbar.css'
import logo from  '../Images/logo.PNG'
import profilepic from '../Images/profilepic.jpg'
import { NavLink,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { userReducer } from '../redux/userReducer'


const Navbar = () => {

  //Implemention logout property
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //if user login then only profil pic show
  const user = useSelector((state)=>state.userReducer)
  console.log(user);
  
  
  const logout = (e) =>{
    e.preventDefault();
    console.log(`Clicked`);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({type:'LOGIN_ERROR'});
    navigate('/login');
  }



  return (
    <div>
        <nav className="navbar navbar-light bg-light shadow">
        <div className="container-fluid">
            <NavLink className="navbar-brand ms-5" to='/'>
                <img src={logo} alt="logo-img"  height="45px"/>
            </NavLink>
            <form className="d-flex me-md-5 me-sm-1">
              <input className="form-control me-2 text-muted searchbox" type="search" placeholder="Search" aria-label="Search"/>
              <a className="nav-link text-dark fs-5 search-icon" href="#">
               <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <NavLink className="nav-link text-dark fs-5" to='/posts' href="#">
               <i className="fa-solid fa-house"></i>
              </NavLink>
              
               <NavLink className="nav-link text-dark fs-5" to='/posts' href="#">
               <i className="fa-solid fa-heart"></i>
               </NavLink>
               {user ? <NavLink className="nav-link text-dark fs-5" to='/myProfile' href="#">
                 <div className="dropdown ">
                    <a className='# ' href="#" role="button"  data-bs-toggle="dropdown" >
                      <img className='img-fluid  profile-fic-nav' src={profilepic}/>
                    </a>
                    {/* to remove profile pic if not login */}
                    <ul className="dropdown-menu" id='hideProfilePic' >

                      <li>
                          <NavLink className="nav-link text-dark bg-primary text-white" to='/myProfile' href="#" > 
                          My Profile
                          </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item " href="#" onClick={(e)=>logout(e)}>
                          Logout
                        </a>
                      </li>

                    </ul> 
                 </div> 
                </NavLink> : " "}
            </form>
        </div>
        </nav>
    </div>
  )
}

export default Navbar