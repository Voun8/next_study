import * as React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface IProps{
  imgUrl: StaticImageData,
  altTxt: string,
  content:string
}
export default function Hero(props:IProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image preload src={props.imgUrl} fill className='object-cover' alt={ props.altTxt } />
        <div className='absolute inset-0 bg-linear-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-white text-6xl'>{ props.content }</h1>
      </div>
    </div>
  )
}
