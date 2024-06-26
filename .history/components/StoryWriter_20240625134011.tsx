import React from 'react'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select'

const StoryWriter = () => {
  return (
   <div className='container flex flex-col'>
    <section className='flex flex-1 flex-col border border-purple-400 p-5 rounded-md gap-4'>
        <Textarea/>
        <Select>
            <SelectTrigger>
                <SelectValue placeholder='Mau berapa halaman ceritanya ?'/>
            </SelectTrigger>

            <SelectContent>
                {Array.from({length 10} (i))}
            </SelectContent>

        </Select>
    </section>
     
   </div>
  )
}

export default StoryWriter