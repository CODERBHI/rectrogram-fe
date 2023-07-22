import React from 'react';
import '../pages/Profile.css';
import profilepic from '../Images/profilepic.jpg';
import flower1 from '../Images/flower1.jpg';
import flower2 from '../Images/flower2.jpg';
import flower3 from '../Images/flower3.jpg';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import moreAction from '../Images/moreAction.PNG'
import horizontalMoreAction from '../Images/horizontalMoreAction.PNG'
// import post from '../Images/post.jpg'
import axios from 'axios';
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../config';

const Profile = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for Upload Post button
  const [showPost, setShowPost] = useState(false);

  //post show and close by post button
  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);

  //state to track Caption and Location on post button
  const[caption,setCaption] = useState('');
  const[location,setLocation] = useState('');

  //post image file upload
  const[image, setImage] = useState({preview:'',data:''})

  //Upload image to server
  const CONFIG_OBJ = {
    headers:{
      "content-type" : "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token")
    }
  }

  const handleFileSelect = (event) =>{
    const img = {
      preview: URL.createObjectURL(event.target.file[0]),
      date:event.target.file[0]
    }
    setImage(img)
  }

  //for uploadin to server
  const handleImgUpload = async () =>{
    let formData = new FormData();
    formData.append("file",image.data);

    const response = axios.post(`${API_BASE_URL}/uploadFile`,formData)
    return response;
  }

  const addPost = async () =>{
     //Add validation rule for location, image and caption 
    if(image.preview === ''){
      Swal.fire({
        icon:"error",
        title:"Post image is mandatory"
      })
    }else if(caption == ''){
      Swal.fire({
        icon:"error",
        title:"Post caption is mandatory"
      })
    }else if(caption == ''){
      Swal.fire({
        icon:"error",
        title:"Post Description is mandatory"
      })
    }else{
      // To upload image in server 
      const imgRes = await handleImgUpload()
   
      const request = {description:caption, location:location, image:`${API_BASE_URL}/${imgRes.data.fileName}`}
  
      //Write api call to create post
    }
  }

  return (
    <div className="container left-right-ma shadow-sm mt-3 p-4">
        <div className="row">
            <div className="col-md-6 d-flex flex-column ">
               <img className='img-fluid profilepic' src={profilepic} alt="myProfile-pic" />
               <p className='ms-3 fs-5 fw-bold'>Merry_Thomas</p>
               <p className='ms-3 fs-5 '>Merry Thomas</p>
               <p className='ms-3 fs-5 '>UI/UX Designer @Merry | Follow @MerryThomas</p>
               <p className='ms-3 fs-5 '>My Profile on <a href="#">www.portfolio.com/merrythomas</a></p>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                <div className='d-flex justify-content-around mx-auto'>
                    <div className='border-right pe-md-5 pe-4 text-center fw-bold'>
                      <h4>10</h4>
                      <p>Post</p>
                    </div>
                    <div className='border-right px-md-5 px-4 text-center fw-bold'>
                      <h4>20</h4>
                      <p>Followers</p>
                    </div>
                    <div className='ps-md-5 ps-4 text-center fw-bold'>
                      <h4>20</h4>
                      <p>Following</p>
                    </div>
                </div>
                {/* bottom part button section */}
                <div className='mx-auto mt-md-0 mt-3 '>
                    <button className='custom-btn custom-btn-white me-md-3 me-3'>
                      <span className='fs-6'>Edit Profile</span>
                    </button>
                    <button className='custom-btn custom-btn-white' onClick={handlePostShow}>
                      <span className='fs-6'>Upload Post</span>
                    </button>
                </div>
            </div>
        </div>
        {/* gallery Section horizontal line */}
        <div className="row my-3">
          <div className="col-12">
            <hr />
          </div>
        </div>
        {/* Gallery Section Start */}
        <div className="row mb-2">
          <div className="col-md-4 col-sm-12">
            <div className="card" onClick={handleShow} >
              <img className='img-fluid rounded-2' src={flower3} alt="flower3" />
            </div>
          </div>

          <div className="col-md-4 col-sm-12 " >
            <div className="card" onClick={handleShow}>
            <img className='img-fluid rounded-2' src={flower3} alt="flower3" />
            </div>
          </div>

          <div className="col-md-4 col-sm-12" >
            <div className="card" onClick={handleShow}>
            <img className='img-fluid rounded-2' src={flower3} alt="flower3" />
            </div>
          </div>
        </div>
        {/* upper part copy */}
        <div className="row mb-2">
          <div className="col-md-4 col-sm-12">
            <div className="card" onClick={handleShow}>
              <img className='img-fluid rounded-2' src={flower3} alt="flower3" />
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card" onClick={handleShow}>
            <img className='img-fluid rounded-2' src={flower3} alt="flower3" />
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="card" onClick={handleShow}>
            <img className='img-fluid rounded-2' src={flower3} alt="flower3" />
            </div>
          </div>
        </div>
        {/* modal start */}
            <Modal show={show} onHide={handleClose} animation={true} size='lg'>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-md-6">
                    {/* carousal left part*/}
                    <div>
                         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img src={flower1} className="d-block w-100" alt="postdetailpic"/>
                              </div>
                              <div className="carousel-item ">
                                <img src={flower2} className="d-block w-100" alt="postdetailpic"/>
                              </div>
                              <div className="carousel-item ">
                                <img src={flower1} className="d-block w-100" alt="postdetailpic"/>
                              </div>
                            </div>
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                              </button>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Card right part */}
                    <div className="card  mt-2 border-0" >
                          <div className="card-body px-2">

                            <div className="row ">
                              <div className="col-6 col-md-6 col-lg-6 d-flex">
                                <img className='img-fluid  profile-fic' src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="winter-pic" />

                                <div className='d-flex flex-column justify-content-center ms-3 ' >
                                    <p className='fs-6 fw-bold'>Title</p>
                                    <p className='location'>Description</p>
                                </div>

                              </div>
                              <div className="col-6 col-md-6 col-lg-6 ">
                                {/* dropdown menu for Edit and Delete Post */}
                                <div className="dropdown">
                                  <a className='ms-1 ' href="#" role="button"  data-bs-toggle="dropdown" >
                                   <img className='float-end  ' src={horizontalMoreAction} alt="dot-pic" />
                                  </a>
                                  <ul className="dropdown-menu" >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                      <i className="fa-solid fa-pen-to-square"></i> Edit Post
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                      <i className="fa-sharp fa-solid fa-trash"></i> Delete Post
                                      </a>
                                    </li>
                                 </ul>
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-12">
                                <span className='text-muted '>2 Hours Ago</span>
                              </div>
                            </div>
                            
                            <div className="row mt-3">
                              <div className="col-12 ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam recusandae minus quisquam dolorem soluta.</p>
                              </div>
                            </div>

                            <div className="row  mt-2">
                              <div className="col-3 d-flex justify-content-around p-2 pe-1">
                              <i className="fa-regular fa-heart"></i>
                              <i className="fa-regular fa-comment"></i>
                              <i className="fa-solid fa-location-arrow"></i>
                              </div>
                              <div className="col-12 ">
                                <span className=' fw-bold  fs-6'>200 Likes</span>
                              </div>
                            </div>
                          </div>
                      </div>
                    {/* ================ */}
                  </div>
                </div>
              </Modal.Body>
            </Modal>
        {/* Modal copy for upload post  */}
            <Modal show= {showPost} onHide={handlePostClose} size='lg' centered>
              <Modal.Header closeButton>
                <span className='fw-bold fs-6'>Upload Post</span>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                {/* Left Part Of Upload Post Button */}
                  <div className="col-md-6 col-sm-12">
                    <div className="upload-box">
                      <div className="dropZoneContainer">
                        <input type="file" name='file' id='drop_Zone' className='FileUpload' accept='.jpg,.png,
                        .jpag'  onChange={handleFileSelect} />
                
                        <div className='dropZoneOerlay'>
                          {image.preview && <img src={image.preview} width='200px' height='200px'/>}
                          <i class="fa-solid fa-cloud-arrow-up fs-2"></i>
                          <br />Drag and Drop Your Image <br />Or <br />Click to add
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Part Of Upload Post Button */}
                  <div className="col-md-6 col-sm-12">
                    {/* Inner Part Of Upload Post Button */}
                    <div className="row">
                      <div className=" col-sm-12 my-3">
                        <div class="form-floating">
                          <textarea class="form-control" onChange={(ev)=>setCaption(ev.target.value)} placeholder="Add Caption" id="floatingTextarea"></textarea>
                          <label for="floatingTextarea">Add Caption</label>
                        </div>
                      </div>

                      <div className=" col-sm-12">
                        <div className="form-floating mb-3">
                          <input type="text" class="form-control" onChange={(ev)=>setLocation(ev.target.value)} id="floatingInput" placeholder="Add Location"/>
                          <label for="floatingInput"><i className="fa-solid fa-location-dot pe-2"></i> Add Location</label>
                        </div>
                      </div>
                      
                      <div className="row ">
                        <div className="col-md-12 col-12">
                         <button type="button" onClick={()=>addPost()} className="btn btn-danger post-upload-btn fs-5 fw-700 pointer-event">Post</button>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                </div>
              </Modal.Body>
            </Modal>

    </div>
  )
}

export default Profile