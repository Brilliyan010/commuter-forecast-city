// commuter-forecast-city — main.ts
// Charm the Commuter: Forecast a City That Isn't (make.fun)
// Writes one line of weather forecast (<=140 chars) for the invented city
// Nimbleville to /output/entry.txt. Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Good morning, Nimbleville: 14°C, light drizzle, and the 8:04 bus is somehow on time — pack an umbrella and a small victory lap.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
