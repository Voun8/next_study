'use client'
import { addTodo } from '@/app/actions'
import React from 'react'

export default function ClientButton({ children }: { children: React.ReactNode }) {
  return (
    <button type='button' className='border p-2 ml-2' onClick={async () => {
      const formData=new FormData()
      formData.append('todo','🐮')
      await addTodo(formData)
    }}>{children}</button>
  )
}
