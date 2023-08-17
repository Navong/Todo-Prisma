import { isCallChain } from "typescript";
import prisma from "./prisma";


export async function getTodos() {
    try {
        const todos = await prisma.todo.findMany()
        return { todos }
    } catch (error) {
        return { error }
    }
}

export async function createTodo(title: string) {
    try {
        const todo = await prisma.todo.create({ data: { title } })
        return { todo }
    } catch (error) {
        return { error }
    }
}

export async function clearList() {
    try {
        const todo = await prisma.todo.deleteMany()
        return { todo }
    } catch (error) {
        return { error }
    }
}

export async function updateTodo(id: string, isChecked: boolean) {
    try {
        const todo = await prisma.todo.update({
            where: { id },
            data: {
                isCompleted: isChecked
            }
        })
        return { todo }
    } catch (error) {
        return { error }
    }
}


export async function getTodo() {
    try {

    } catch (error) {
        return { error }
    }
}