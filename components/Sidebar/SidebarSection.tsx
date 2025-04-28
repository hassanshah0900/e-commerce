import React, { ReactNode } from "react";

export default function SidebarSection({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <section className="mb-8">
      <h5 className="text-xs capitalize font-light mb-3 ms-2">{title}</h5>
      <div>{children}</div>
    </section>
  );
}
