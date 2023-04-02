import BaseLayout from "@/components/layout/Base.layout";
import type { ReactElement } from "react";
import Post from "@/components/Post";
export default function Home() {
  return (
    <>
      <Post />
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
