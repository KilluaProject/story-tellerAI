import React from 'react'
import { Textarea } from './ui/textarea'

const StoryWriter = () => {
  return (
   <div className='container flex flex-col'>
    <section className='flex flex-1 flex-col border border-purple-400 p-5 rounded-md gap-4'>
        <Textarea/>
        <p>tes</p>
    </section>
   </div>
  )
}

export default StoryWriter