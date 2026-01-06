import React from 'react'
import scaleSrc from '../../../../public/scale.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:'Scale'
}
export default function Scale() {
  return (
    <Hero imgUrl={scaleSrc} altTxt='scale' content='Welcome to our scale'/>
  )
}
