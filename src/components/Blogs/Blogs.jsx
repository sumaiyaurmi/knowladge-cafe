import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{

fetch('blog.json')
.then(res => res.json())
.then(data => setBlogs(data))

    },[])
    
    return (
        <div className="w-2/3">
            <h3>Blogs : {blogs.length}</h3>
{
    blogs.map((blog,ind) =><Blog key={ind} blog={blog}></Blog>)
}

        </div>
    );
};

export default Blogs;