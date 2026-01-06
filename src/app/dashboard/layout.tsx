'use client'
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  {name:"about",path:"/dashboard/about"},
  {name:"settings",path:"/dashboard/settings"}
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = React.useState(0)
  const pathName = usePathname()
  
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        
        {
          linkData.map(item => (
            <Link key={ item.path } className={pathName === item.path ? ' text-purple-500' : ''} href={ item.path }>About</Link>
          ))
        }
      </div>
      <h2>dashboard Layout { count }</h2>
      <button onClick={()=>setCount(count+1)} className="bg-black text-white p-2 my-4 rounded-md cursor-pointer">Increment</button>
      {children}
    </div>
  );
}
