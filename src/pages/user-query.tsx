import BaseLayout from "@/components/layout/Base.layout";
import type { ReactElement } from "react";
import UserQuery from "@/components/Profile/UserQuery";
export default function userQuery() {
  return (
    <UserQuery />
  );
}

userQuery.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
