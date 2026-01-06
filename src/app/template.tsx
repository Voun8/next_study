import React from 'react'

export default function Template({children}:{children:React.ReactNode}) {
  return (
    <div className='template'>
      <h2>我是 Template</h2>
      {children}
    </div>
  )
}
