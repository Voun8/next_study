'use client'
import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
  {name:'Performance',path:'/performance'},
  {name:'Reliability',path:'/reliability'},
  {name:'Scale',path:'/scale'}
]

export default function Header() {
  const pathName = usePathname()
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map(item => (
              <Link className={ pathName===item.path?'text-purple-500':'' } key={item.path} href={item.path}>{item.name}</Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
