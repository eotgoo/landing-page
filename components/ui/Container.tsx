import { ReactNode } from "react";
import clsx from "clsx";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={clsx("max-w-6xl mx-auto px-6", className)}>{children}</div>
);
