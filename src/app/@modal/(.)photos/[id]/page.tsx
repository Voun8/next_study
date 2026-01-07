'use client'
import React, { use } from 'react'
import { photos } from '@/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default  function Page({params}: { params:Promise<{ id: string }> }) {
  const { id } =  use(params)
  const photo = photos.find(item => item.id === id)!
  const router=useRouter()
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={()=>router.back()}>
      <Image src={photo.src} alt={photo.alt} width={300} height={300} className='rounded-lg' onClick={e=>e.stopPropagation()}/>
    </div>
  )
}