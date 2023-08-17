'use server'

import prisma from "@/lib/prisma"
import { clearList, createTodo, updateTodo } from "@/lib/todo"
import { revalidatePath } from "next/cache"

export async function createTodoAction(title: string) {
    await createTodo(title)
    revalidatePath('/')
}

export async function clearListAction() {
    await clearList()
    revalidatePath('/')
}

export async function updateTodoAction(id:string, isChecked: boolean) {
    await updateTodo(id, isChecked)
    revalidatePath('/')
}

// export async function getTodoAction() {
//     await getTodo()
//     revalidatePath('/')
// }