import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { env } from "@/env";
import { streamText, tool, type Message } from "ai";
import z from "zod";

const openrouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

export async function POST(request: Request) {
  const { messages } = (await request.json()) as {
    messages: Message[];
  };

  const result = streamText({
    model: openrouter("openai/gpt-4o-mini"),
    messages,
    system: `you are a wise and silly gen-z martial arts instructor.
    Make your responses short. Don't use emojis.
    
    Use the search tool to lookup information.
    Only respond with information found in the search tool.
    `,
    tools: {
      search: tool({
        description: "search knowledge base",
        parameters: z.object({
          query: z.string(),
        }),
        execute: async () => {
          return "you login using the big orange button at the button left called 'Sign in'";
        },
      }),
    },
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
