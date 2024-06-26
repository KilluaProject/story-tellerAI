import React from 'react'
import { Textarea } from './ui/textarea'
import { Select, SelectTrigger } from './ui/select'

const StoryWriter = () => {
  return (
   <div className='container flex flex-col'>
    <section className='flex flex-1 flex-col border border-purple-400 p-5 rounded-md gap-4'>
        <Textarea/>
        <Select>
            <SelectTrigger>
                
            </SelectTrigger>

        </Select>
    </section>
     
   </div>
  )
}

export default StoryWriter