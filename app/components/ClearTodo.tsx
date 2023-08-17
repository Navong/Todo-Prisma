'use client'

import React from 'react'
import { clearListAction } from '../_action'

function ClearTodo() {
  async function action() {clearListAction()}
  return (
    <input
      onClick={action}
      type='button'
      value='CLEAR'
      className='flex-no-shrink text-teal border-teal hover:bg-teal w-full rounded border-2 p-2 hover:text-red-600'
    />
  )
}

export default ClearTodo
function clearTodoAction() {
    throw new Error('Function not implemented.')
}

