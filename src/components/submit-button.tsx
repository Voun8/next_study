'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton({ children ,pendingText='提交中...'}: { children: React.ReactNode,pendingText?:string }) {
  const {pending}=useFormStatus()
  return (
    <button type="submit" disabled={pending} className='border p-2 ml-2'>
      {pending ? pendingText : children}
    </button>
  )
}
