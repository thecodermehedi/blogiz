import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog, TProps } from "@/types";
import { BACKEND_SERVER_URL } from "@/utils/config";

export const generateStaticParams = async () => {
 const res = await fetch(`${BACKEND_SERVER_URL}/blogs`);
 const blogs: TBlog[] = await res.json();
 return blogs.slice(0, 4).map((blog) => ({
  id: blog.id
 }));
};

const Blog = async (props: TProps) => {
 const params = await props.params;
 let blog: TBlog | null = null;
 try {
  const response = await fetch(`${BACKEND_SERVER_URL}/blogs/${params.id}`);
  if (!response.ok) {
   throw new Error('Network response was not ok');
  }
  blog = await response.json();
 } catch (error) {
  console.error(error);
 }
 if (!blog) {
  return <div>Blog not found</div>;
 }
 return (
  <div>
   <BlogDetails blog={blog} />
  </div>
 );
};

export default Blog;
