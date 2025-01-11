"use client";

import { createBlog } from "@/actions/createBlog";
import { TBlog } from "@/types";
import { BACKEND_SERVER_URL } from "@/utils/config";
import { useForm } from "react-hook-form";

const CreateBlogForm = () => {
 const { register, handleSubmit, formState: { errors } } = useForm<TBlog>();
 const onSubmit = async (data: TBlog) => {
  const result = await fetch(`${BACKEND_SERVER_URL}/blogs`).then((res) => res.json());
  data.id = JSON.stringify(result.length + 1);
  data.total_likes = "100";
  try {
   const response = await createBlog(data);
   console.log(response);
  } catch (error: any) {
   console.log(error);
   throw new Error(error.message);
  }
 };

 return (
  <div className="my-10">
   <h1 className="text-center text-4xl">
    Post Your <span className="text-accent">Blog</span>
   </h1>

   <div className="hero min-h-screen">
    <div className="card w-[50%] shadow-xl bg-base-100">
     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
       <label className="label">
        <span className="label-text">Title</span>
       </label>
       <input
        type="text"
        {...register("title")}
        placeholder="Title"
        className="input input-bordered"
        required
       />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Description</span>
       </label>
       <textarea
        {...register("description")}
        placeholder="Description"
        className="textarea textarea-bordered"
        required
       />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Publish Date</span>
       </label>
       <input
        {...register("publish_date")}
        type="date"
        className="input input-bordered"
        required
       />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Author Name</span>
       </label>
       <input
        type="text"
        {...register("author_name")}
        placeholder="Author Name"
        className="input input-bordered"
        required
       />
      </div>
      <div className="form-control">
       <label className="label">
        <span className="label-text">Blog Image</span>
       </label>
       <input
        type="url"
        {...register("blog_image")}
        placeholder="Image URL"
        className="input input-bordered"
        required
       />
      </div>
      <div className="form-control mt-6">
       <button type="submit" className="btn btn-accent btn-outline">
        Post
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
};

export default CreateBlogForm;
