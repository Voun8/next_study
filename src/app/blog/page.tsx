import React from 'react'
import { Metadata } from 'next'
import BlogList from '../components/blogList'

export const metadata: Metadata = {
  title:'博客列表'
}

export default function page() {
  return (
    <BlogList/>
  )
}
