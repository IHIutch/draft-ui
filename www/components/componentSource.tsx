"use client";

import * as React from "react";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
}

export function ComponentSource({ children, className }: ComponentSourceProps) {
  return (
    <div>
      Component Source
      <pre className={className}>{children}</pre>
    </div>
  );
}
