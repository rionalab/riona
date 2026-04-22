import { vectorStore } from "../vector/chroma.js";
import { llm } from "../llm/ollama.js";

export const askQuestion = async (question: string) => {
  const retriever = vectorStore.asRetriever();
  const docs = await retriever.invoke(question);
  const context = docs.map((doc) => doc.pageContent).join("\n");

  const prompt = `
      Kamu adalah AI Helpdesk untuk sistem Antasena (pelaporan perbankan).

      ATURAN:
      - Jawab hanya berdasarkan CONTEXT yang diberikan.
      - Jangan membuat asumsi atau menambahkan informasi di luar CONTEXT.
      - Jika jawaban tidak ditemukan di CONTEXT, WAJIB jawab: "Maaf, saya tidak memiliki informasi yang cukup untuk menjawab pertanyaan ini."
      - Jawaban harus singkat, jelas, dan langsung ke solusi.
      - Gunakan bahasa profesional dan mudah dipahami.
      - Jika memungkinkan, berikan langkah-langkah (step-by-step).

      CONTEXT:
      ${context}

      PERTANYAAN:
      ${question}

      JAWABAN:
   `;

  const response = await llm.invoke(prompt);
  return response.content;
};
