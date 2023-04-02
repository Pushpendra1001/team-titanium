import type { ReactElement } from "react";
import BottomBar from "../particles/BottomBar";

interface LayoutProps {
  children: ReactElement;
}

export default function BaseLayout(props:LayoutProps) {
  return (
    <main className="">
      {props.children}
      <BottomBar />
    </main>
  );
}
