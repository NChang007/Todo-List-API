import React from 'react'
import TodoList from './TodoList'

function Footer({todos}) {
  return (
    <div className='footerdiv'>
        <p>{`${todos.length}`+ ' Todos Left'}</p>
    </div>
  )
}

export default Footer