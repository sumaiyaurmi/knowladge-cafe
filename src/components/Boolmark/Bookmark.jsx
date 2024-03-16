import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
console.log(bookmark)

const {title}=bookmark

    return (
        <div className="bg-gray-200 rounded-xl p-3 m-4">
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;