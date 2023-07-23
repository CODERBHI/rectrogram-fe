import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
// import axios from 'axios';
// import { API_BASE_URL } from '../config';
// import Swal from 'sweetalert2';
import '../pages/Page.css'

const PostOverview = () => {

  //to track all post
  // const[allposts,setAllPosts] = useState([]);

  // const getAllPosts = async () =>{
  //   create api to get all post from db
  //   const response = await axios.get(`${API_BASE_URL}/allposts` );
  //   debugger;
  //   if(response.status === 200){
  //     setAllPosts(response.data.posts)

  //   }else{
  //     Swal.fire({
  //       icon:'error',
  //       title:"Some Error Occured While getting all posts"
  //     })
  //   }
  // }
  // useEffect(()=>{
  //   getAllPosts()
  // },[])

  return (
    <>
        <div className="container mt-md-5 mt-2">
          <div className="row">
          {/* {allposts.map((post)=>{
              return(
                <div className="col-md-4 mb-2">
                  <Card postData={post}/>
                </div>
              )
          })} */}
              <div className="col-md-4 mb-2">
                <Card />
              </div>
              <div className="col-md-4 mb-2">
                <Card />
              </div>
              <div className="col-md-4 mb-2">
                <Card />
              </div>
          </div>
        </div>
    </>
  )
}

export default PostOverview