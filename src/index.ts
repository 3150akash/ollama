// import { Ollama } from "@langchain/community/llms/ollama";
// import { PromptTemplate,  } from "@langchain/core/prompts";
// // import { Ollama } from 'ollama'

// const ollama = new Ollama({
//   baseUrl: "http://localhost:11434", // Default value
//   model: "llama2", // Default value
// });

// const initiateChat = async (templateFormat: string, templateLiteral : {[key:string]: string} = {}) => {

//   const prompt = PromptTemplate.fromTemplate(templateFormat);
//   const formattedPrompt = await prompt.format(templateLiteral);

//   const stream = await ollama.stream(formattedPrompt );
  
//   const chunks = [];
//   for await (const chunk of stream) {
//     chunks.push(chunk);
//   }
  
//   console.log(chunks.join(""));

// const ollama = new Ollama({ host: 'http://localhost:11434' })
// const response = await ollama.chat({
//   model: 'llama2',
//   messages: [{ role: 'user', content: formattedPrompt }],
// })
// console.log(response)
// };


import { Ollama } from "@langchain/community/llms/ollama";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const ollama = new Ollama({
    baseUrl: "http://localhost:11434", // Default value
    model: "llama2", // Default value
  });
const model = ollama;
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });

const initiateChat = async () => {
    const res1 = await chain.call({ input: "Hi! I'm Jim." });
    console.log({ res1 });
    const res2 = await chain.call({ input: "What is 1+1" });
    console.log({ res2 });
    const res3 = await chain.call({ input: "What is My Name" });
    console.log({ res3 });
}


initiateChat()
