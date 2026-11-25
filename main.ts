import { mkdirSync, writeFileSync } from "node:fs";

// Dad Joke Showdown entry: one mirror pun, written as a single line.
const line = 'I asked my mirror for advice this morning. It said, "Let me reflect on it."';
const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, `${line}\n`, "utf8");
