"use client";

import { ReactFlow, Background, ReactFlowProvider, Position, Handle } from "@xyflow/react";
import { Card } from "./ui/card";
import { Repeat } from "lucide-react";

import { Standard } from "./Standard";

const initialNodes = [
  {
    id: 'l-1',
    type: 'standard',
    position: { x: 0, y: 0 },
    data: { value : "start" },
  },
]

const nodeTypes = {
  standard: Standard,
};


export function Loop() {
  return (
    <ReactFlowProvider>
    <Card className="w-[580px] bg-[#1A1B1E] border-0">
      <div className="flex flex-col p-2">
        <div className="flex items-center gap-2 my-2 px-2">
          <div className={" bg-blue-200 w-8 h-8 rounded-xl p-2 flex items-center justify-center"}>
            <Repeat size={24} />
          </div>
          <span className="text-white text-md font-medium">Loop</span>
        </div>
        <div className="p-auto w-[560px] h-[200px]">
        <ReactFlow nodes={initialNodes} nodeTypes={nodeTypes} className="w-[280px] h-[200px]">
          <Background />
        </ReactFlow>
        </div>
      </div>
      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-blue-500" />
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-blue-500" />
    </Card>
    </ReactFlowProvider>
  )
};