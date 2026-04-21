import { NavLink, useNavigate } from "react-router-dom";

import classes from "../styles/ItaPreview.module.css";

import ThreeDots from "./UI/ThreeDots";

interface Post {
  id: number;
  createdAt: string;
  userId: string;
  header: string;
  previewContent: string;
  fullContent: string[];
}

interface ItaPreviewProps {
  posts: Post[];
}

const ItaPreview: React.FC<ItaPreviewProps> = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.itaInterface}>
      {posts.map((post) => (
        <div key={post.id} className={classes.itaPost}>
          <div className={classes.userTimeInfo}>
            <p className={classes.userId}>{post.userId}</p>
            <div className={classes.timeDots}>
              <p className={classes.createdAt}>{post.createdAt}</p>
              <ThreeDots />
            </div>
          </div>

          <div
            onClick={() => navigate(`/post/${post.id}`)}
            className={classes.itaPostClick}
          >
            <div className={classes.itaHeader}>
              <h1>{post.header}</h1>
            </div>
            <div className={classes.itaContent}>
              {/* {post.fullContent.map((para, index) => (
              <p key={index}>{para}</p>
            ))} */}
              <p>{post.previewContent}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItaPreview;
