import { NextResponse } from "next/server"
import db from '@/db'

type IParams = {
  params:Promise<{ id: string }>
}

export async function DELETE(request: Request, { params }: IParams) {
  const { id } = await params
  await db.update(({ posts }) => {
    const idx = posts.findIndex(post => post.id === id)
    posts.splice(idx,1)
  })
  return NextResponse.json({
    code: 0,
    message:'删除成功'
  })
}


export async function PATCH(request: Request, { params }: IParams) {
  const {id}=await params
  const data = await request.json()
  let idx=-1
  await db.update(({ posts }) => {
    idx = posts.findIndex(post => post.id === id)
    posts[idx]={...posts[idx],...data}
  })
  return NextResponse.json({
    code: 0,
    message: '修改成功',
    data:db.data.posts[idx]
  })
}


export async function GET(request: Request,{params}:IParams) {
  const { id } = await params
  const post = db.data.posts.find(post => post.id === id)
  return NextResponse.json({
    code: 0,
    message: '搜索成功',
    data:post
  })
}