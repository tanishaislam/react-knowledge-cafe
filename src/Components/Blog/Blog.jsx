import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleToBookmarks}) => {
    const {title,cover, author_img,author, reading_time, posted_date , hashtags} = blog;
    return (
        <div className='p-7 shadow-xl'>
            <img className='w-full' src={cover} alt={ `cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className=' flex  p-5'>
                    <img src={author_img} alt="" className='rounded-full w-10' />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleToBookmarks(blog)} className='ml-2'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmarks: PropTypes.func.isRequired
}

export default Blog;