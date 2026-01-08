import { NextRequest, NextResponse } from "next/server"
import db from "@/db"

export async function GET(request: NextRequest) {
  const {searchParams} = request.nextUrl
  const pageNum=Number(searchParams.get('pageNum'))
  const pageSize=Number(searchParams.get('pageSize'))
  const query = searchParams.get('query')?.toLowerCase()
  
  const data = db.data.posts
  const keys=['title','content']  as const
  let filterData = query ? db.data.posts.filter(item =>keys.some(key=>String(item[key]??'').toLowerCase().includes(query))) : data
  
  const total = filterData.length
  
  const startIndex = (pageNum - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, total)
  
  filterData = startIndex >= total ? [] : filterData.slice(startIndex,endIndex)
  return NextResponse.json({
    code: 0,
    message: '搜索成功',
    data: {
      total,
      list:filterData
    }
  })
}

export async function POST(request: Request) {
  const data = await request.json()
  await db.update(({ posts }) => posts.unshift({
    id: Math.random().toString(36).slice(-8),
    ...data
  }))
  return NextResponse.json({
    code: 0,
    message: '添加成功',
    data
  })
  
}

