"use client";

import { ReactFlow, Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, Connection, NodeChange, EdgeChange } from '@xyflow/react';
import { useState, useCallback } from 'react';
import '@xyflow/react/dist/style.css';

import { Agent } from '@/components/Agent';
import { Standard } from '@/components/Standard';
import { Selectable } from '@/components/Selectable';
import { Loop } from '@/components/Loop';
 
const initialNodes = [
  {
    id: '2',
    type: 'agent',
    position: { x: 0, y: 100 },
    data: { value : 123 },
  },
  {
    id: '3',
    type: 'standard',
    position: { x: 300, y: 200 },
    data: { value : "start" },
  },
  {
    id: '4',
    type: 'standard',
    position: { x: 600, y: 100 },
    data: { value : "knowledge_retrieval" },
  },
  {
    id: '5',
    type: 'standard',
    position: { x: 900, y: 200 },
    data: { value : "document_extractor" },
  },
  {
    id: '6',
    type: 'standard',
    position: { x: 1200, y: 100 },
    data: { value : "stop" },
  },
  {
    id: '7',
    type: 'standard',
    position: { x: 1500, y: 200 },
    data: { value : "http_request" },
  },
  {
    id: '8',
    type: 'selectable',
    position: { x: 1800, y: 100 },
    data: { value : "large_language_model" },
  },
  {
    id: '9',
    type: 'selectable',
    position: { x: 2100, y: 200 },
    data: { value : "extractor" },
  },
  {
    id: '10',
    type: 'selectable',
    position: { x: 2400, y: 100 },
    data: { value : "code" },
  },
  {
    id: '11',
    type: 'loop',
    position: { x: 2700, y: 200 },
    data: { value : "loop" },
  }
];

const initialEdges = [
  { id: 'e2-3', source: '2', target: '3'},
  { id: 'e2-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
  { id: 'e9-10', source: '9', target: '10' },
];

const nodeTypes = {
  agent: Agent,
  standard: Standard,
  selectable: Selectable,
  loop: Loop,
};

 
function Page() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = { ...connection, id: `${connection.source}-${connection.target}` };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds) as typeof initialNodes),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds) as typeof initialEdges),
    [],
  );
  return (
    <div className='h-full w-full'>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
 
export default Page;