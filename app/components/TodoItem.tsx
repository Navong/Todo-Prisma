'use client'

import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Todo } from '@prisma/client'
import React, { useState } from 'react'

type TodoProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoProps) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted)

  return (
    <div className='h-100 bg-teal-lightest flex w-full items-center font-sans'>
      <div className='mb-4 flex w-full items-center justify-between'>
        <p
          className={`text-grey-darkest text-l w-full ${
            isChecked ? `line-through` : ''
          }`}
        >
          {todo.title}
        </p>
        <div className='flex'>
          <AiOutlineCheckCircle/>
          
        </div>
      </div>
    </div>
  )
}

export default TodoItem
