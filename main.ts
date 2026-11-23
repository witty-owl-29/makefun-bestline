import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 240 characters, a tiny story with a turn at the end.
const line =
  "The elevator stopped between floors, and for eleven seconds nobody reached for a phone — we just stood there, strangers, remembering how to be bored together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
