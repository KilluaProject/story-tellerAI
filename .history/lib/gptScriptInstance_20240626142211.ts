import { GPTScript } from "@gptscript-ai/gptscript";

const g = new GPTScript({
    // Your GPTScript API key
  APIKey: process.env.OPENAI_API_KEY
})

export default g;