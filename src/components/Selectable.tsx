'use client';

import { Card } from "./ui/card";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { BookOpen } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

const Types = {
  large_language_model: {
    value: "Large Language Model",
    description: "A large language model is a neural network trained on a large corpus of text data. It can be used for a variety of natural language processing tasks.",
    logo: <BookOpen size={24} />,
    bgColor: "bg-blue-200",
    options: ["gpt-4o-mini", "gpt-4o-large", "gpt-4o-xl"],
  },
  extractor: {
    value: "Extractor",
    description: "Extracts information from text data.",
    logo: <BookOpen size={24} />,
    bgColor: "bg-pink-200",
    options: ["extractor-1", "extractor-2", "extractor-3"],
  },
  code: {
    value: "Code",
    description: "Executes code.",
    logo: <BookOpen size={24} />,
    bgColor: "bg-green-200",
    options: ["python", "javascript", "typescript"],
  },
}

export function Selectable({ data } : NodeProps) {
  const vals = Types[data.value as keyof typeof Types];
  return (
    <Card className="w-[280px] bg-[#1A1B1E] border-0">
      <div className="flex flex-col p-2">
        <div className="flex items-center gap-2 my-2 px-2">
          <div className={vals.bgColor + " w-8 h-8 rounded-xl p-2 flex items-center justify-center"}>
            {vals.logo}
          </div>
          <span className="text-white text-md font-medium">{vals.value}</span>
        </div>
        <Select>
          <SelectTrigger className="bg-[#27272A] border-0 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {vals.options.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-gray-400 my-2 px-2">{vals.description}</p>
      </div>
      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500" />
    </Card>
  )
};