'use client'

import React from 'react'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const StoryWriter = () => {
  return (
   <div className='container flex flex-col'>
    <section className='flex flex-1 flex-col border border-purple-400 p-5 rounded-md gap-4'>
        <Textarea/>
        <Select>
            <SelectTrigger>
                <SelectValue placeholder='Mau berapa halaman ceritanya ?'/>
            </SelectTrigger>

            <SelectContent className='w-full'>
                {Array.from({length: 10}, (_,i) => (

                    <SelectItem key={i} value={String(i+1)}>
                    { i + 1 }
                    </SelectItem>

                ))}
            </SelectContent>

        </Select>
    </section>
     
   </div>
  )
}

export default StoryWriter