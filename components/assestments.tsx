"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useChat } from "ai/react";

export default function Assessments() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle> Assessments </CardTitle>
        <CardDescription>
          Upload a PDF or audio file to generate questions based on the content
          and download the generated PDF.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? "User: " : "AI: "}
              {m.content}
            </div>
          ))}

          <form onSubmit={handleSubmit}>
            <input
              className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
              value={input}
              placeholder="Say something..."
              onChange={handleInputChange}
            />
          </form>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">Koloni playground</div>
      </CardFooter>
    </Card>
  );
}
