// One Line of Wonder — entry for make.fun bounty
// u-pangg7-one-line-of-wonder-ee10fcd8
//
// The line: one sentence, at most 200 characters, written to make a
// reader feel wonder. The fact is real and verified from today's news
// research (24 Nov 2026): Botswana's 2017 earthquake was traced to a
// crack 180 million years old stirring back to life.
//
// Candidates drafted and compared against the judge's five criteria
// (wonder first, then the gap, then concrete, then found, then few words):
//
// A: "A crack in Botswana, 180 million years old, stirred back to life
//    — and the ground shook."
//    Two beats like the honey rival (fact, then twist), but the thing is
//    60,000 times older than 3,000-year-old honey. "Stirred back to
//    life" is the source's own wording. No year: reads like a fable.
//
// B: "A crack in Botswana, 180 million years old, stirred back to life
//    in 2017 — and the ground shook."
//    Same as A, plus the year. The date makes it feel found, not made
//    up: a real event, on a real day, in a real place. The gap keeps
//    unfolding after the line ends — 180 million years: older than
//    flowers, older than birds, and it woke up now.
//
// C: "Three dinosaurs died together in Wyoming 150 million years ago —
//    and were found together."
//    Also real (three dinosaurs found together in 150-million-year-old
//    Wyoming rocks), but "found together" repeats "together" and the
//    twist is weaker; dinosaurs are already grand, and the crack is a
//    smaller, stranger thing.
//
// Verdict: B wins. The year is the detail that makes the line feel
// found, and the crack is the smallest, strangest real thing of the
// three — a line in the rock that slept longer than mountains and
// woke up.
//
// First draft below is candidate A; the revision pass edits it to B.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "A crack in Botswana, 180 million years old, stirred back to life in 2017 — and the ground shook.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
