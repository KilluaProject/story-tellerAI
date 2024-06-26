'use client'

import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { Frame } from '@gptscript-ai/gptscript'
import renderEventMessage from '@/lib/renderEventMessage'


const storiesPath = "public/stories"

const StoryWriter = () => {


const [story,setStory] =useState<string>("");
const [pages,setPages] = useState<number>();
const [progress, setProgress] =useState("")
const [runStarted, setRunStarted] = useState<boolean>(false)
const [runFinished, setRunFinished] = useState<boolean | null >(null)
const [currentTools, setCurrentTols] = useState("")
const [events, setEvents] = useState<Frame[]>([])


async function runScript(){
    setRunStarted(true);
    setRunFinished(false);
    
    const response = await fetch ('api/run-script', {
        method:'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({story, pages, path: storiesPath}),

    });

    if (response.ok && response.body) {
        // handle strem for the api
        //..
        console.log("Streaming Started");
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        handleStream(reader, decoder);

    } else{
        setRunFinished(true);
        setRunStarted(false);
        console.error('failed to stream')
    }
}

    async function handleStream(reader:ReadableStreamDefaultReader<Uint8Array>, decoder:TextDecoder) {
        
        while(true){
            const {done, value} = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value, {stream: true})

            const eventData = chunk
            .split("\n\n")
            .filter((line) => line.startsWith("event:"))
            .map((line) => line.replace(/^event:/,""))

            eventData.forEach(data => {
                try {

                    const parsedData = JSON.parse(data);
                     

                    if (parsedData.type === "callProgress") {
                        setProgress(
                            parsedData.output[parsedData.output.length - 1].content
                        );
                        setCurrentTols(parsedData.tool?.description || "");
                    }  else if ( parsedData.type === 'callStarted'){
                        setCurrentTols(parsedData.tool?.description || "");
                    } else if ( parsedData.type === 'runFinish'){
                       setRunFinished(true);
                       setRunStarted(false);
                    } else {
                        setEvents((prevEvent) => [...prevEvent, parsedData]);
                    }

                    
                } catch (error) {
                    console.log("error bang", error)
                }
            })
        }
    }
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
                {Array.from({length: 15}, (_,i) => (

                    <SelectItem key={i} value={String(i+1)}>
                    { i + 1 }
                    </SelectItem>

                ))}
            </SelectContent>

        </Select>
        <Button
        disabled = {!story || !pages || runStarted }
        onClick={runScript}
        className='w-full'>Buat cerita
        </Button>
    </section>

    <section className='flex-1 mt-5'>
        <div className='flex flex-col-reverse w-full gap-2 bg-slate-600 text-gray-200 rounded-md font-mono h-96 p-10 overflow-y-auto'>
            <div>
                {runFinished === null && (
                    <>
                        <p className='animate-pulse mr-5'>Aku menunggu kamu membuat cerita yang seru lohh ... </p>
                        <br />
                    </>
                )}
                <span className='mr-5'>{">>"}</span>
                {progress}
            </div>        

            {currentTools && (
                <div className='py-10'>
                    <span className='mr-5'>{"[Current Tools]"}</span>
                    {currentTools}
                </div>
            )} 

            <div className='gap-5'>
                {events.map((event, index) => (
                    <div className='mr-5' key={index}>
                        <span>{">>"}</span>
                        {renderEventMessage(event)}
                    </div>
                ))}
            </div>

            {runStarted && (
                <div>
                    <span className='animate-in mr-5'>{"[AI StoryTeller has Started]"}</span>
                    <br /> 
                </div>
            )}
        </div>
    </section>
     
   </div>
  )
}

export default StoryWriter