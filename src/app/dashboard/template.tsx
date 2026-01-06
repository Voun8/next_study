'use client'
import * as React from "react";
import Link from "next/link";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count ,setCount]=React.useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <h2>dashboard Template { count }</h2>
      <button onClick={()=>setCount(count+1)} className="bg-black text-white p-2 my-4 rounded-md cursor-pointer">Increment</button>
      {children}
    </div>
  );
}
