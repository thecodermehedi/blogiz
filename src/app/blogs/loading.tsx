import LoadingCard from "@/components/ui/LoadingCard";
import { TBlog } from "@/types";
import { BACKEND_SERVER_URL } from "@/utils/config";

const BlogLoading = async () => {
 const res = await fetch(`${BACKEND_SERVER_URL}/blogs`);
 const blogs = await res.json();
 return (
  <div className="grid grid-cols-3 gap-4">
   {blogs.map((blog: TBlog) => (<LoadingCard key={blog.id} />))}
  </div>
 );
};

export default BlogLoading;
