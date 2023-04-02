import BaseLayout from "@/components/layout/Base.layout";
import HomeComp from "@/components/Home"
import type { ReactElement } from "react";
export default function Home() {
  
  return (
    <>
      <HomeComp />
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
