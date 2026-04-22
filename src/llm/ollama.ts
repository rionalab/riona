/**
 * Ollama adalah platform untuk menjalankan model bahasa besar (LLM) secara lokal.
 * Dengan Ollama, Anda dapat meng-host model bahasa besar di mesin lokal Anda,
 * memungkinkan akses cepat dan kontrol penuh atas data dan model Anda.
 *
 * temperature mengatur seberapa random / kreatif jawaban AI.
 *    - Semakin kecil -> semakin kaku, konsisten
 *    - Semakin besar -> semakin acak, kreatif
 *
 * Beberapa model bisa sampai 2.0, tapi realistiknya: 0 - 1 sudah cukup.
 *
 * temperature: 0    Jawaban stabil, konsisten, cocok untuk tugas yang membutuhkan keakuratan tinggi.
 * temperature: 0.5  Jawaban lebih bervariasi, cocok untuk tugas kreatif atau eksploratif.
 * temperature: 1    Jawaban mulai halu, kadang ngarang, bisa berubah-ubah, sangat acak, cocok untuk brainstorming atau eksplorasi ide.
 */

import { ChatOllama } from "@langchain/ollama";

export const llm = new ChatOllama({
   model: process.env.OLLAMA_MODEL,
   baseUrl: process.env.OLLAMA_BASE_URL,
   temperature: 0,
});
