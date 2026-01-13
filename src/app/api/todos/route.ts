import { NextResponse } from "next/server"

const data = [
  '吃饭','睡觉','打豆豆'
]

export async function GET(request: Request) {
  return NextResponse.json({data})
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const todo = formData.get('todo') as string
  data.push(todo)
  return NextResponse.json({data})
}