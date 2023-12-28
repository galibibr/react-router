import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1 className="text-center text-[20px] font-bold">Our posts</h1>
      <Link to={'/blog/new'}>Add new post</Link>
      <div className="flex flex-col">
        {posts.map((post) => {
          return (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="hover:underline">
              - {post.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BlogPage;
