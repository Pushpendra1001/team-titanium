import BaseLayout from "@/components/layout/Base.layout";
import PostInnerPage from "@/components/Post/PostInnerPage";
import { useRouter } from "next/router";
import { useMemo } from 'react'
import type { ReactElement } from "react";
import posts from '../../utils/posts.json'

export default function ChallanApp() {
  const router = useRouter()

  const post = useMemo(() => {
    return posts.find((ele) => { return ele.id == router.query.post_id })
  }, [router.query.post_id])
  console.log(post,posts,router.query.post_id);
  
  return (
    <PostInnerPage post={post} />
  );
}
ChallanApp.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
