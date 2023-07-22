import React from 'react'
import '../component/Card.css'
import moreAction from '../Images/moreAction.PNG'
import post from '../Images/post.jpg'
import { useSelector} from 'react-redux'

const Card = (props) => {
  // only post's user can delete his post
  const user = useSelector(state => state.userReducer)
  // console.log(user);
  // console.log(props.postData.posts[0]._id);
  // console.log(user.user._id);
  
  return (
    <>
      <div class="card shadow-sm mt-2" >
        <div class="card-body px-2">
          <div className="row ">
            <div className="col-6 col-md-6 col-lg-6 d-flex"> {/* In img post.postData.image hoga  */ }
              <img className='img-fluid  profile-fic' src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="winter-pic" />

              <div className='d-flex flex-column justify-content-center ms-3 ' >
                  <p className='fs-6 fw-bold'>{props.postData.location}</p> {/* Location*/ }
                  <p className='location'>{props.postData.description}</p> {/* Title */ }
              </div>

            </div>
            {/* {props.postData.author._id === user.user._id?*/}<div className="col-6 col-md-6 col-lg-6"> 
              <img className='float-end mt-2 ' src={moreAction} alt="dot-pic" />
            </div> 
          </div>
          
          <div className="row">
            <div className="col-12 ">
              <img className='img-fluid p-2' src={post} alt="post" style={{borderRadius:'15px'}} />
            </div>
          </div>

          <div className="row  mt-2">
            <div className="col-3 d-flex justify-content-around p-2 pe-1">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-solid fa-location-arrow"></i>
            </div>
            <div className="col-7">
              <span className='float-end fw-bold pe-2 fs-6'>200 Likes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card