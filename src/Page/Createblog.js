import React, { useContext, useRef } from 'react'
import logo from './572-removebg-preview.png'
import {  Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { BlogContext } from '../App'
const Createblog = () => {
  const {post,setPost}=useContext(BlogContext);
  const Title=useRef({});
  const Content=useRef({});
  const handleChange=()=>{
    if (Title.current.value=== ""&&Content.current.value==="") {
      toast.error("Please input the task");
      return;
    }
    const NewTitle=Title.current.value;
    const NewContent=Content.current.value;
    const value ={title:NewTitle,content:NewContent ,id:Date.now()};
    setPost([...post,value]);
  };
 

  return (
    <div>
      <Navbar className="shadow p-3 mb-5 bg-white rounded" style={{height:"5.5rem"}}> 
        <Navbar.Brand >
        <img  src={logo} style={{width:"8rem", height:"7rem"}} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='m-5'>
           <h6>Write your Thought Here</h6>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
   <>
   <div className=' shadow p-3 mb-0 bg-white rounded' style={{margin:"auto", width:"50rem",background:"black", textAlign:"center", height:"80vh"}}>
   <h1 className='mt-3'>CREATE BLOG</h1>
   <input type="text" placeholder='Add Titile...' className='mt-3 rounded' style={{width:"35rem", height:"3rem", textAlign:"center"}} ref={Title}/>
   <textarea className='mt-5 rounded' name="" id="" cols="80" rows="12" placeholder='Write.body...' ref={Content}></textarea>
   <br />
   <Link to="/blogs">
   <button type="Submit" className="btn btn-primary mt-2 h-10 w-25" onClick={handleChange}>Save</button>
   </Link>
   </div>
   </>
    </div>
  )
}

export default Createblog