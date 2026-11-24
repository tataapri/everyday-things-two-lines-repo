import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "Rain is the clouds wringing out a giant sponge over the rooftops, squeezing water down in fat drops until the sponge is light enough to float away.",
  "It maps how clouds store water and release it as falling drops, but leaves out that clouds are loose wisps of tiny droplets, not a solid sponge, and rain falls when the drops grow too heavy, not because something squeezes them.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
