import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title,cover, author_img,author, reading_time, posted_date , hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={ `cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className=' flex'>
                    <img src={author_img} alt="" className='rounded-full w-10' />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
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
Blog.proptypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;