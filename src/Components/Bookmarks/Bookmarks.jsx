import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingtime}) => {
 
    return (
        <div className="w-1/3 bg-zinc-100 pt-6">
            <div>
                <h3 className='text-3xl text-center'>Reading time: {readingtime}</h3>
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