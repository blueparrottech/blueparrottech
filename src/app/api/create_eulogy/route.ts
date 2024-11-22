// pages/api/eulogy.ts
import { NextResponse } from 'next/server';
import { FormData } from '../../tools/eulogygenerator/types';
import OpenAI from "openai";
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export const config = {
  runtime: 'edge',
};

const openai = new OpenAI({
  apiKey: process.env.X_AI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export async function POST(request: Request): Promise<NextResponse> {
    console.log(' enter post');

  try {
    const formData: FormData = await request.json();
    console.log(' enter try api call');

    // Construct a message for the OpenAI API based on form data
    const messages: ChatCompletionMessageParam[] = [
      { role: "system", content: "You are Mark, an expert Eulogies write, very empathic and with expert and deep emotional writing capabilities." },
      { role: "user", content: `Generate an eulogy using the following details, which are questions made to the Eulogy requester: ${JSON.stringify(formData)}` },
    ];

    // Make the OpenAI API call
    const completion = await openai.chat.completions.create({
      model: "grok-beta",
      messages,
    });

    // Extract the response message
    const responseMessage = completion.choices[0]?.message?.content || "No response generated";

    // Respond with the generated content
    return NextResponse.json({ eulogy: responseMessage }, { status: 200 });
  } catch (error) {
    console.error('Error generating eulogy:', error);
    return NextResponse.json({ error: 'An error occurred while generating the eulogy' }, { status: 500 });
  }
}
