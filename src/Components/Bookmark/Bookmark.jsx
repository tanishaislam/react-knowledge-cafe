import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-zinc-50 p-4 m-4 rounded-xl ml-4'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;