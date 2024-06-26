import { NextRequest } from "next/server";
import { RunEventType, RunOpts } from "@gptscript-ai/gptscript";
import { error } from "console";
import g from "@/lib/gptScriptInstance";
import { json } from "stream/consumers";

const script = "app/api/run-script/story-book.gpt";

export async function POST(request: NextRequest) {
    const {story, pages, path} = await request.json();
    const opts:RunOpts ={
        disableCache: true,
        input: `--${story}, --${pages}, --${path}`
    };
    try{
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    const run = await g.run(script,opts)
                    run.on(RunEventType.Event,(data) => {
                        controller.enqueue(encoder.encode(
                            `event: ${JSON.stringify(data)}\n\n`
                        ))
                    })
                } catch (error) {
                    controller.error(error);
                    console.error("Error", error);
                }
            }
        })
    } catch(error) {
        return new Response(JSON.stringify({error:error}), {
            status:500,
        })
    }
    
}