import { TBlogs } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlogs }) => {
 return (
  <div>
   <h1 className="text-4xl text-center my-4">Latest Blogs From <strong className="text-accent">Blogiz</strong></h1>
   <p className="text-center text-lg max-w-2xl mx-auto text-gray-400 italic">
    Check out our latest blogs and stay updated with the newest trends and insights from our expert bloggers.
   </p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16  max-w-6xl mx-auto">
    {blogs.slice(0, 2).map((blog) => <LatestBlogCard key={blog.id} blog={blog} />)}
   </div>
  </div>
 );
};

export default LatestBlogs;
