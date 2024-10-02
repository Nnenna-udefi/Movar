import Link from "next/link";
import React from "react";

type BreadProps = {
  id: number;
  title: string;
};
export const Breadcrumbs = ({ id, title }: BreadProps) => {
  return (
    <div>
      <Link href="/">Home</Link> / Movies / {id} / {title}
    </div>
  );
};
