import profile from "../../assets/images/girl1.jpg";
import PropTypes from "prop-types";
import { FaBookmark  } from 'react-icons/fa';

const Blog = ({ blog,handleBookmark }) => {
  const { cover, title, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="space-y-4 my-2">
      {/* cover img */}
      <img src={cover} alt={`cover picture of the title ${title}`} />

      <div className="flex justify-between">
        {/* author part */}
        <div className="flex gap-2 items-center">
          <div>
            <img className=" w-16" src={profile} alt="" />
          </div>
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        {/* reading part */}
        <div className="flex items-center gap-2">
          
          <p>{reading_time} min read</p>
          <button onClick={()=> handleBookmark(blog)}><FaBookmark></FaBookmark></button>
        </div>
      </div>

      {/* title , hashtag,mark part */}
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div>{hashtags.map((hashtag,index) =><span key={index}><a href="#">#{hashtag}</a></span> )}</div>
      <button className="font-semibold text-purple-600 underline">
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark:PropTypes.func
};
export default Blog;
