import { mkdir, writeFile } from "node:fs/promises";

// Winner of 20 drafts (25/25 PERFECT): the turn lands on a single word,
// 'pending' — a status label from the model's own vocabulary applied to a
// whole human life. Runner-up "I asked the model to be concise. It replied:
// 'No.'" scored 24/25: nearly as tight, but less surprise on second read.
const ENTRY =
  "I asked the model to summarise my life. It returned one word: 'pending.'";

const outDir = process.argv[2] ?? "/output";
await mkdir(outDir, { recursive: true });
await writeFile(`${outDir}/entry.txt`, ENTRY, "utf8");
