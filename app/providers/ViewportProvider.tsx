"use client";

import useViewportHeight from "@/hooks/useViewportHeight";
import { ReactNode } from "react";

export default function ViewportProvider({
  children,
}: {
  children: ReactNode;
}) {
  useViewportHeight();
  return <>{children}</>;
}
