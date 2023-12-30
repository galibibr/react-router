import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1 className="text-center text-[20px] font-bold">Our posts</h1>
      <BlogFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <Link to={"/blog/new"} className="hover:underline">
        Add new post
      </Link>
      <div className="flex flex-col">
        {posts
          .filter((e) => e.title.includes(postQuery) && e.id >= startsFrom)
          .map((post) => {
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
