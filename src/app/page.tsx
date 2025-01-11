import LatestBlogs from "@/components/latest-blogs/LatestBlogs";
import { BACKEND_SERVER_URL } from "@/utils/config";

const HomePage = async () => {
 const response = await fetch(`${BACKEND_SERVER_URL}/blogs`, {
  next: {
   revalidate: 30,
  }
 });
 const blogs = await response.json();
 return (
  <LatestBlogs blogs={blogs} />
 );
};

export default HomePage;
