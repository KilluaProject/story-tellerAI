'use client'

import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

const StoryWriter = () => {

const [story,setStory] =useState<string>("");
const [pages,setPages] = useState<number>();
const [progress, setProgress] =useState("")
const [runFinished, setRunFinished] = useState<boolean | null >(null)

  return (
   <div className='container flex flex-col'>
    <section className='flex flex-1 flex-col border border-purple-400 p-5 rounded-md gap-4'>
        <Textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        className='flex-1 text-black active:border-purple-400'
        placeholder='Tulis Cerita tentang kucing berbadan buaya berteman dengan anjing berbadan kudanil'/>

        <Select onValueChange={value => setPages(parseInt(value)) }>
            <SelectTrigger>
                <SelectValue className='placeholder:text-opacity-50 select-none' placeholder='Mau berapa halaman ceritanya ?'/>
            </SelectTrigger>

            <SelectContent >
                {Array.from({length: 10}, (_,i) => (

                    <SelectItem key={i} value={String(i+1)}>
                    { i + 1 }
                    </SelectItem>

                ))}
            </SelectContent>

        </Select>
        <Button
        disabled = {!story || !pages}
        className='w-full'>Buat cerita</Button>
    </section>

    <section className='flex-1 mt-5'>
        <div className='flex flex-col-reverse w-full gap-2 bg-slate-600 text-gray-200 rounded-md font-mono h-96 p-10 overflow-y-auto'>
            <div>
                {runFinished === null && (
                    <>
                        <span className='animate-pulse'>Membuat cerita...</span>
                    </>
                )}
                <span className='mr-5'>{">>"}</span>
                {progress}
            </div>         
        </div>
    </section>
     
   </div>
  )
}

export default StoryWriter