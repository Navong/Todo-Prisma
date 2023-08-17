'use client'

import { type } from 'os'
import React, { FormEventHandler } from 'react'
import { clearListAction, createTodoAction } from '../_action'

const  NewTodo = () => {
  async function handleSubmit(event: any) {
    //event.preventDefault() // Prevent the default form submission
    const formData = new FormData(event.target)
    const title = formData.get('title')

    // const title = data.get('title')
    if (typeof title !== 'string' || !title) return

    // console.log(title) // Print the title to the console

    await createTodoAction(title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mt-2 flex h-8 w-full items-center rounded px-2 text-sm font-medium'>
        <button type='submit'>
          <svg
            className='h-5 w-5 fill-current text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            />
          </svg>
        </button>
        <input
          className='ml-4 h-8 flex-grow bg-transparent font-medium focus:outline-none'
          type='text'
          name='title'
          placeholder='add a new task'
        />

        <button onClick={() => clearListAction()}>Clear</button>
      </div>
    </form>
  )
}

export default NewTodo
