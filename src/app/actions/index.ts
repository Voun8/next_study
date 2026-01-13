'use server'

import { sleep } from "@/utils"
import { revalidatePath } from "next/cache"

const data=['吃饭','睡觉','打豆豆']

export async function getTodos() {
  return data
}

export async function addTodo(formData: FormData) {
  await sleep(3000)
  // console.log(Object.fromEntries(formData));
  
  const todo = formData.get('todo') as string
  data.push(todo)
  revalidatePath('/')
}