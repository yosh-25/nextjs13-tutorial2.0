"use client";

import { useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [count, setCount]  = useState(0);
 
  return (
    <html lang="en">
      <body>
        <h2>Header</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
        {children}</body>
    </html>
  );
}
