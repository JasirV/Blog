import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Createblog from './Page/Createblog';
import Blogs from './Page/Blogs';
import Blog from './Page/Blog'
import { createContext, useState } from 'react';

export const BlogContext = createContext();
function App() {
 const [post ,setPost]=useState([])
  return (
    <div>
      <BlogContext.Provider value={{post,setPost}}>
      <Routes>
      <Route  path='/' element={<Createblog />}/>
      <Route path='/blogs' element={<Blogs />}/>
      <Route path='/blog/:id' element={<Blog />}/> 
    </Routes>
    </BlogContext.Provider>
    </div>
  );
}

export default App;
