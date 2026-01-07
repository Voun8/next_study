import React from 'react'
import { Card } from 'antd'
import { data } from '@/data'

interface IParams{
  params: Promise<{
    id:string
  }>
}

export async function generateMetadata({params}: IParams) {
  const { id } = await params
  
  return {
    title:`博客详情 - ${id}`
  }
}

export default async function Page({params}:IParams) {
  const { id } = await params
  const item = data.find(item => item.id ===id)!
  
  return (
   <Card className='!w-full' title={item?.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
      {item?.city}
    </Card>
  )
}
