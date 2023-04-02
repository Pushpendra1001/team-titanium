import BaseLayout from "@/components/layout/Base.layout";
import Profile from "@/components/Profile";
import type { ReactElement } from "react";
export default function Home() {
  return (
    <Profile />
  );
}

Home.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
