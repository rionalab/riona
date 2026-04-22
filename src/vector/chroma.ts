import { Chroma } from "@langchain/community/vectorstores/chroma";
import { ChromaClient } from "chromadb";
import { embeddings } from "../llm/embedding.js";

const chromaClient = new ChromaClient({
   host: process.env.CHROMA_HOST ?? "localhost",
   port: Number(process.env.CHROMA_PORT ?? "8000"),
   ssl: false,
});

export const vectorStore = new Chroma(embeddings, {
   collectionName: "riona-knowledge-base",
   index: chromaClient,
});
