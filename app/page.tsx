import prisma from '@/lib/prisma'
import { getTodos } from '@/lib/todo'
import { Session } from 'inspector'
import TodoItem from './components/TodoItem'
import NewTodo from './components/NewTodo'
import ClearTodo from './components/ClearTodo'
import Test from './components/test'

export default async function Home() {
  const { todos } = await getTodos()

  return (
    <div className='h-screen w-screen items-center justify-center font-medium'>
      <div className='flex h-full flex-grow items-center justify-center bg-gray-900'>
        <div className='w-1/2 max-w-full rounded-lg bg-gray-800 p-8 text-gray-200 shadow-lg'>
          <div className='mb-6 flex items-center'>
            <svg
              className='h-8 w-8 stroke-current text-indigo-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4'
              />
            </svg>
            <h4 className='ml-3 text-lg font-semibold'>Sam's Jobs</h4>
          </div>
          {todos?.map(todo => <Test key={todo.id} todo={todo} />)}
          <NewTodo />
        </div>
      </div>
    </div>
  )
}
