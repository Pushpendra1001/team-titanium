import BaseLayout from "@/components/layout/Base.layout";
import MainSerch from "@/components/Report/MainSerch"
import type { ReactElement } from "react";
export default function Home() {
  return (
    <>
      <MainSerch />
    </>
  );
}

Home.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
