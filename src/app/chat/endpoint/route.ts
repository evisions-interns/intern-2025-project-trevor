import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { env } from "@/env";
import { streamText, tool, type Message } from "ai";
import z from "zod";
import { Index } from "@upstash/vector";

const openrouter = createOpenRouter({
  apiKey: env.OPENROUTER_API_KEY,
});

type Metadata = {
  name?: string;
};

const index = new Index<Metadata>({
  url: env.UPSTASH_VECTOR_REST_URL,
  token: env.UPSTASH_VECTOR_REST_READONLY_TOKEN,
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
        execute: async (params) => {
          const results = await index.query({
            data: params.query,
            topK: 5,
            includeData: true,
          });

          console.log(results);

          return results;
        },
      }),
    },
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
