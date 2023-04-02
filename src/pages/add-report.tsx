import BaseLayout from "@/components/layout/Base.layout";
import type { ReactElement } from "react";
export default function ChallanApp() {
  return (
    <div>
      <p>Microphone:</p>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
      <p></p>
    </div>
  );
}

ChallanApp.getLayout = function (page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
