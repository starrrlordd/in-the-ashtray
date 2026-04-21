import { useParams } from "react-router-dom";

import { ITA_POST } from "../data/Ita_post";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();

  const post = ITA_POST.find((p) => p.id === id);

  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>{post.header}</h1>

      {post.fullContent.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
};

export default PostPage;
