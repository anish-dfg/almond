// INFO: reference: https://platform.openai.com/docs/api-reference/chat/create

import { Usage } from "~/services/openai/usage";

export interface SystemMessage {
  content: string;
  role: string;
  name?: string;
}

export interface TextContentPart {
  type: string;
  text: string;
}

export interface ImageData {
  url: string;
  detail?: string;
}

export interface ImageContentPart {
  type: string;
  imageUrl: ImageData;
}

export type TextOrContentParts =
  | string
  | (TextContentPart | ImageContentPart)[];

export interface UserMessage {
  content: TextOrContentParts;
}

export interface ToolFuncCallParams {
  name: string;
  args: string[];
}

export interface AssistantMessageToolCall {
  id: string;
  type: string;
  function: ToolFuncCallParams[];
}

export interface AssistantMessage {
  content?: string;
  role: string;
  name?: string;
  toolCalls?: AssistantMessageToolCall[];
}

export interface ToolMessage {
  role: string;
  content: string;
  tool_call_id: string;
}

export type Message =
  | SystemMessage
  | UserMessage
  | AssistantMessage
  | ToolMessage;

export interface ResponseFormat {
  type: "text" | "json_object";
}

export interface ToolFunc {
  description?: string;
  name: string;
  parameters?: unknown;
}

export interface Tool {
  type: string;
  function: ToolFunc;
}

export interface FuncIdentifier {
  name: string;
}

export interface ToolSpec {
  type: string;
  function: FuncIdentifier;
}

export interface CompletionRequest {
  messages: Message[];
  model: string;
  frequencyPenalty: number;
  logitBias: { [key: string]: number };
  logprobs: boolean;
  topLogprobs?: number;
  maxTokens?: number;
  n?: number;
  presencePenalty: number;
  responseFormat?: ResponseFormat;
  seed: number;
  stop?: string | string[];
  stream?: boolean;
  temperature?: number;
  topP?: number;
  tools?: Tool[];
  toolChoice: string | ToolSpec;
  user?: string;
}

export interface ToolCall {
  id: string;
  type: string;
  function: ToolFuncCallParams;
}

export interface CompletionMessage {
  content?: string;
  toolCalls: ToolCall[];
  role: string;
}

export interface Choice {
  finish_reason: string;
  index: number;
  message: CompletionMessage;
}

export interface TopLogProbs {
  token: string;
  logProb: number;
  bytes: unknown;
}

export interface LogProbsContent {
  token: string;
  logProb: number;
  bytes: unknown;
  topLogProbs: TopLogProbs[];
}

export interface LogProbs {
  content?: LogProbsContent[];
}

export interface CompletionResponse {
  id: string;
  choices: CompletionMessage[];
  logprobs?: LogProbs;
  created: number;
  model: string;
  systemFingerprint: string;
  object: string;
  usage: Usage;
}
