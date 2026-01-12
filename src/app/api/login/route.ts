import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) { 
  const { username, password } = await request.json();
  
  const r=await fetch('http://10.100.30.20:8080/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
  
  const data = await r.json();
  
  // 方式一
  // return NextResponse.json({
  //   success: true,
  //   message:data.msg,
  // }, {
  //   headers: {
  //     'Set-Cookie': `token=${data.data.access_token}; path=/; Max-Age=84600; HttpOnly`,
  //   }
  // })
  
  // 方式二
  const res=NextResponse.json({
    success: true,
    message:data.msg,
  })
  res.cookies.set('token', data.data.access_token, {
    path: '/',
    maxAge: 84600,
    httpOnly: true,
  })
  return res;
}