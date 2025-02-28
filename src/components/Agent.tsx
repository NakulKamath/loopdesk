'use client'

import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Handle, Position, NodeProps } from '@xyflow/react'

export function Agent({ data }: NodeProps) {
  console.log(data)
  return (
    <Card className="w-[280px] bg-[#1A1B1E] border-0">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-pink-600 w-8 h-8 rounded flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-white text-lg font-medium">Agent</span>
        </div>
        
        <p className="text-sm text-gray-400 mb-4">Define the agent&apos;s instructions, then enter a task to complete using tools.</p>

        <div className="space-y-4">
          <div>
            <Label className="text-gray-400">Model Provider</Label>
            <Select defaultValue="OpenAI">
              <SelectTrigger className="bg-[#27272A] border-0 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="OpenAI">OpenAI</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-gray-400">Model Name</Label>
            <Select defaultValue="gpt-4o-mini">
              <SelectTrigger className="bg-[#27272A] border-0 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o-mini">gpt-4o-mini</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-gray-400">OpenAI API Key</Label>
            <Input 
              className="bg-[#27272A] border-0 text-white"
              placeholder="Type something..."
            />
          </div>

          <div>
            <Label className="text-gray-400">Agent Instructions</Label>
            <Textarea 
              className="bg-[#27272A] border-0 text-white min-h-[80px]"
              placeholder="You are a helpful assistant that can..."
            />
          </div>

          <div>
            <Label className="text-gray-400">Input</Label>
            <Input 
              className="bg-[#27272A] border-0 text-white"
              placeholder="Receiving input"
              disabled
            />
          </div>
        </div>

        <div className="mt-4 py-2 border-t border-gray-800">
          <Label className="text-gray-400">Response</Label>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-2 h-2 bg-blue-500" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-blue-500" />
    </Card>
  )
}
