import { NextRequest } from "next/server";
import { RunEventType, RunOpts } from "@gptscript-ai/gptscript";
import { error } from "console";

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