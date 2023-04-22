import ScreenLayout from "@components/layout";
import React from "react";

type ChildrenProps = {
  children: JSX.Element[] | JSX.Element;
};
export default function LayoutContainer({ children }: ChildrenProps) {
  return <ScreenLayout>{children}</ScreenLayout>;
}
