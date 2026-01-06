import * as React from 'react'
import Hero from '@/components/hero'
import homeSrc from '../../../public/home.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:'Home'
}


export default function Page() {
  return (
    <Hero imgUrl={homeSrc} altTxt='Home' content='Welcome to our website'/>
  )
}