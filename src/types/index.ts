export type TBlog = {
 id: string
 title: string
 description: string
 author_name: string
 blog_image: string
 publish_date: string
 total_likes: string
}

export type TBlogs = TBlog[]

type TParams = { [key: string]: string };
type TQuery = { [key: string]: string | string[] | undefined };

export type TProps = {
 params: Promise<TParams>
 searchParams: Promise<TQuery>
};
