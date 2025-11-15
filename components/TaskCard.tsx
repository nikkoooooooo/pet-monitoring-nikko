import React from 'react'


type taskCardType = {
    title: string
}


function TaskCard({ title }: taskCardType) {
  return (
    <div className='w-auto h-40'>
        <h2>{title}</h2>
    </div>
  )
}

export default TaskCard