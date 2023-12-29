import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has('latest')

  const startsFrom = latest ? 80 : 1;
  console.log(startsFrom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {}

    if (query.length) params.post = query
    if (isLatest) params.latest = true

    setSearchParams(params);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1 className="text-center text-[20px] font-bold">Our posts</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" className="border-b"/>
        <label className="px-3">
          <input type="checkbox" name="latest" />
          New only
        </label>
        <input type="submit" value="Search" />
      </form>
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
