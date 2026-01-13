'use server'
import { z } from 'zod'
import { sleep } from "@/utils"
import { revalidatePath } from "next/cache"

const data=['吃饭','睡觉','打豆豆']

export async function getTodos() {
  return data
}

const schema = z.object({
  todo: z.string().min(2,{message:'最少输入2个字符'}).max(5,{message:'最多输入5个字符'})
})
export async function addTodo(prevState:{message:string},formData: FormData) {
  await sleep(3000)
  // console.log(Object.fromEntries(formData));
  
  const todo = formData.get('todo') as string
  const raw = Object.fromEntries(formData)

  const validateFields = schema.safeParse(raw)
  
  if(!validateFields.success){
    return {
      ...prevState,
      message:validateFields.error?.flatten().fieldErrors.todo?.join(',')??'输入有误'
    }
  }

  data.push(todo)
  revalidatePath('/')

  return {
    ...prevState,
    message:`添加 ${todo} 成功`
  }
}