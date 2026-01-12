import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({
    success: true,
    msg:'退出成功'
  })

  response.cookies.delete('token');
  return response;
}