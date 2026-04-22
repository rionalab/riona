# R I O N A

## Struktur

kenapa test ga diletakkan di src
src = production code
test = validation / testing code

Rule yang harus lo pegang
Semua logic app -> src/
Semua testing -> test/
Jangan import dari test ke src (haram)

## Flow

User -> API -> ask()
-> ambil context dari Chroma
-> inject ke prompt
-> kirim ke Ollama
-> balik ke user

## Next step (jangan lompat)

Kalau ini udah jalan:

Multi document ingest (PDF, email, dll)
Prompt engineering (biar jawabannya ga halu)
Memory (conversation history)
Tool calling (API Phoenix / Impala)

## TODO

Chunking (text splitter)
Score threshold (filter hasil Chroma)
Prompt constraint (anti halusinasi)
