import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark,displayReadingTime}) => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{

fetch('blog.json')
.then(res => res.json())
.then(data => setBlogs(data))

    },[])
    
    return (
        <div className="">
            <h3>Blogs : {blogs.length}</h3>
{
    blogs.map((blog,ind) =><Blog
   displayReadingTime={displayReadingTime}
    handleBookmark={handleBookmark}
    key={ind} blog={blog}></Blog>)
}

        </div>
    );
};
Blogs.propTypes = {

 handleBookmark:PropTypes.func
//  displayReadingTime:PropTypes.func
  };

export default Blogs;