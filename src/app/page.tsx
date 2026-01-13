'use client'
import React, { useEffect } from 'react'
export default function Page() {
  const [todos, setTodos] = React.useState([])

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res=await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: new FormData(e.currentTarget)
    })

    const {data} = await res.json()
    setTodos(data)
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch('http://localhost:3000/api/todos')).json()
      setTodos(data)
    }
    fetchData()
  }, [])

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" className='border p-2' />
        <button type="submit" className='border p-2 ml-2'>Add</button>
      </form>
      <ul className='leading-8 mt-4'>
        {
          todos.map((todo,index) => (
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </div>
  )
}
