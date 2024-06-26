import React from 'react'
import { Textarea } from './ui/textarea'
import { Select } from './ui/select'

const StoryWriter = () => {
  return (
   <div className='container flex flex-col'>
    <section className='flex flex-1 flex-col border border-purple-400 p-5 rounded-md gap-4'>
        <Textarea/>
        <Select>
            

        </Select>
    </section>
     
   </div>
  )
}

export default StoryWriter