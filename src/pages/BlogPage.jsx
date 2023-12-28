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
      <h1 className="text-center">Our posts</h1>
      <div className="flex flex-col">
        {posts.map((post) => {
          return <Link key={post.id} to={`/blog/${post.id}`}>-{ post.title }</Link>;
        })}
      </div>
    </>
  );
};

export default BlogPage;
