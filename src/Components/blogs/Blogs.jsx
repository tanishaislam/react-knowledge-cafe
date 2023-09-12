import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleToBookmarks}) => {
    const [Blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">blogs {Blogs.length}</h1>
            {
                Blogs.map(blog => <Blog handleToBookmarks = {handleToBookmarks} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToBookmarks: PropTypes.func.isRequired
}

export default Blogs;