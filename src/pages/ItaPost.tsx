import classes from "../styles/ItaPost.module.css";

import ThreeDots from "../components/UI/ThreeDots";

interface Post {
  id: number;
  createdAt: string;
  userId: string;
  header: string;
  previewContent: string;
  fullContent: string[];
}

interface ItaPostProps {
  posts: Post[];
}

const ItaPost: React.FC<ItaPostProps> = ({ posts }) => {
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
      ))}
    </div>
  );
};

export default ItaPost;
