"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";

const Blogs = () => {
 const { data: blogs, isLoading, isError } = useGetBlogsQuery([]);
 if (isLoading) return <p>Loading...</p>;
 if (isError) return <p>Something Went Wrong!</p>;
 return (
  <div>
   <h1 className="text-4xl text-center my-4">All Blogs From <strong className="text-accent">Blogiz</strong></h1>
   <p className="text-center text-lg max-w-2xl mx-auto text-gray-400 italic">
    Check out our latest blogs and stay updated with the newest trends and insights from our expert bloggers.
   </p>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16  max-w-6xl mx-auto">
    {blogs.map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)}
   </div>
  </div>
 );
};

export default Blogs;
