import React from 'react'
import { photos } from '@/data'
import Image from 'next/image'

export default async function Page({params}:{params:Promise<{id:string}>}) {
  
  const { id } = await params
  const photo = photos.find(item=>item.id===id)!
  return (
    <div className='container mx-auto pt-8'>
      <Image width={400} height={400} src={photo.src} alt={photo.alt} className='rounded-lg block mx-auto' />
      <div className='border-dashed border-2 border-gray-500 rounded-lg p-3  mt-5'>
        <p>
          <strong>Title:</strong>{ photo.alt}
        </p>
        <p>
          <strong>Price:</strong>{ photo.price}
        </p>
        <p>
          <strong>Desc:</strong>
        </p>
      </div>
    </div>
  )
}
