import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingtime}) => {
 
    return (
        <div className="w-1/3 bg-zinc-100 pt-6">
            <div className='mb-5'>
                <h3 className='text-3xl text-center text-pink-700 bg-pink-100 rounded-xl p-6 mx-8 border-solid border-2 border-pink-700'>Reading time: {readingtime}</h3>
            </div>
            <p className="text-3xl font-semibold text-center pb-4">Bookmarked blogs : {bookmarks.length}</p>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingtime: PropTypes.number.isRequired
}

export default Bookmarks;