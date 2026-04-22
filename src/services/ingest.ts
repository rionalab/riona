import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { vectorStore } from "../vector/chroma.js";

export const ingestText = async (text: string) => {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  const docs = await splitter.createDocuments([text]);
  await vectorStore.addDocuments(docs);
};
