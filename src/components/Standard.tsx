'use client';

import { Card } from "./ui/card";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { BookOpen, BookMarked, Home, LandPlot, Network } from "lucide-react";

const Types = {
  start: {
    value: "START",
    description: "Start of the Workflow",
    logo: <Home name="StartIcon" />,
    bgColor: "bg-blue-200",
  },
  knowledge_retrieval: {
    value: "KNOWLEDGE RETRIEVAL",
    description: "Retrieves Knowledge from Documents",
    logo: <BookOpen name="KnowledgeIcon" />,
    bgColor: "bg-pink-200",
  },
  document_extractor: {
    value: "DOCUMENT EXTRACTOR",
    description: "Extracts Text from Documents",
    logo: <BookMarked name="DocumentIcon" />,
    bgColor: "bg-green-200",
  },
  http_request: {
    value: "HTTP REQUEST",
    description: "Allows sending server requests via the HTTP protocol, suitable for retrieving external results, webhooks, generating images and other scenarios.",
    logo: <Network name="RequestIcon" />,
    bgColor: "bg-purple-200",
  },
  stop: {
    value: "STOP",
    description: "End of the Workflow",
    logo: <LandPlot name="StopIcon" />,
    bgColor: "bg-red-200",
  }
}

export function Standard({ data } : NodeProps) {
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
        <p className="text-sm text-gray-400 my-2 px-2">{vals.description}</p>
      </div>
      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500" />
    </Card>
  )
};