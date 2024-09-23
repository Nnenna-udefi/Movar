import React from "react";

type BreadProps = {
  id: number;
  title: string;
};
export const Breadcrumbs = ({ id, title }: BreadProps) => {
  return (
    <div>
      Home / Movies / {id} / {title}
    </div>
  );
};
