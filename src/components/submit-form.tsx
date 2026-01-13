'use client'
import React from 'react'
import { useFormState } from 'react-dom'




import ClientButton from '@/components/client-button'
import SubmitButton from '@/components/submit-button'
import { addTodo } from '@/app/actions'

const initialState = {
  message: ''
}

export default function SubmitForm() {
  const [state, formAction] = useFormState(addTodo, initialState)
  return (
    <>
      <div className='flex'>
        <form action={formAction}>
          <input required type="text" name="todo" className='border p-2' />
          <SubmitButton pendingText='提交中...'>提交</SubmitButton>
          <ClientButton>牛牛</ClientButton>
        </form>
      </div>
      <p className='mt-2 text-teal-500 text-sm'>{state.message}</p>
    </>
  )
}
