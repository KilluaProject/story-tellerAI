import { GPTScript } from "@gptscript-ai/gptscript";

const g = new GPTScript({
    APIKey: process.env.OPENAI_KEY_API_KEY
});

export default g;