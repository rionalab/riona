import { OllamaEmbeddings } from "@langchain/ollama";

export const embeddings = new OllamaEmbeddings({
   baseUrl: process.env.OLLAMA_BASE_URL,
   model: process.env.OLLAMA_EMBEDDING_MODEL,
});
