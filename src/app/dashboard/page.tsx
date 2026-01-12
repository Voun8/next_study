'use client'
import React from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'DELETE',
    })
    const data = await res.json()
    if (data.success) {
      router.push('/login')
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Button type='primary' onClick={handleLogout}>退出</Button>
    </div>
  )
}
