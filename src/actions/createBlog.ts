"use server"

import { TBlog } from "@/types"
import { BACKEND_SERVER_URL } from "@/utils/config"

export const createBlog = async (data: TBlog) => {
 const res = await fetch(`${BACKEND_SERVER_URL}/blogs`, {
  method: 'POST',
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify(data),
  cache: "no-store"
 })
 return await res.json()
}
