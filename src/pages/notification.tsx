import BaseLayout from "@/components/layout/Base.layout";
import Notification from "@/components/Notification";
import type { ReactElement } from "react";
export default function Home() {
  return (
    <Notification />
  );
}

Home.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
