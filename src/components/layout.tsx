import { type } from "os";
import React from "react";
import ScrollMove from "./ScrollMove/scroll_move";
import TopNav from "./top-nav";

type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};
export default function ScreenLayout({ children }: ChildrenProps) {
  return (
    <div className="isolate bg-white h-full overflow-y-auto overflow-x-hidden">
      <TopNav />
      <ScrollMove />
      <main className="mt-16">{children}</main>
    </div>
  );
}
