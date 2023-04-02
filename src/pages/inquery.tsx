import BaseLayout from "@/components/layout/Base.layout";
import Inquery from "@/components/Inquery";
import type { ReactElement } from "react";
export default function Home() {
  return (
    <Inquery />
  );
}

Home.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
