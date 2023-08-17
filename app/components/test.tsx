'use client'

import { Todo } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import NewTodo from './NewTodo'
import GetDate from '@/util/date'
import { updateTodoAction } from '../_action'

type TodoProps = {
  todo: Todo
}

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
}

function Test({ todo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)

  useEffect(() => {
    // console.log(isChecked)
    updateTodoAction(todo.id, isChecked)
  }, [isChecked])

  async function handleChecked() {}

  return (
    <div>
      <div>
        <input className={`hidden`} type='checkbox'></input>
        <label
          className='flex h-10 cursor-pointer items-center rounded px-2 hover:bg-gray-900'
          onClick={() => {
            setIsChecked(prevIsCheck => !prevIsCheck)
          }}
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border-2
		  ${
        isChecked
          ? `border-[#10B981] bg-[#10B981]`
          : 'border-gray-500  text-transparent'
      }`}
          >
            <svg
              className='h-4 w-4 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fill-rule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clip-rule='evenodd'
              />
            </svg>
          </span>
          <div
            className={`flex w-full items-center justify-between ${
              isChecked ? `text-[#9CA3AF] line-through` : ''
            }`}
          >
            <span className={`ml-4 text-sm`}>{todo.title}</span>
            <span className='text-[10px]'>
              {todo.updateAt.toLocaleString('en-US', options)}
            </span>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Test
