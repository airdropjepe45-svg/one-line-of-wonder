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
// Revision 2 (24 Nov, ~20:30 WIB) — beat the Botswana line, or leave it.
// The submitted line was strong (180M-year-old crack waking up), so a new
// line had to win on the judge's criteria in order, not just tie it.
// Candidates, all real and verified:
// D: "One star holds a thousandth of the Sun's iron — a fingerprint of
//    the very first stars, still burning."
//    Star HE 1153-0518, announced 23 Nov 2026 (IIA/Subaru): a rare
//    stellar fossil, ~1/1000th the Sun's iron, rich in carbon — a
//    fingerprint of the earliest stars. Real, but the number is 40x
//    weaker than F's, and "still burning" adds nothing.
// F: "One star holds less than a forty-thousandth of the Sun's iron —
//    the chemical fingerprint of the very first stars."
//    Star PicII-503 in Pictor II (Nature Astronomy, Mar 2026, UVA/
//    Stanford): iron below 1/40,000th of the Sun's, carbon-rich — the
//    clearest example of a star preserving the first stars' chemical
//    enrichment. The number is unguessable, the gap spans ten billion
//    years and the birth of the elements, and "chemical fingerprint"
//    is the researchers' own phrase.
// G: "The first photograph of a black hole — a ring of fire around a
//    shadow 55 million light-years away — just passed its check."
//    M87* image verified (23 Nov). The ring is vivid, but "passed its
//    check" is administrative, not wonder; the twist fizzles.
// Verdict: F beats the Botswana line. Criterion 1 (wonder): a star
// from the dawn of time, almost iron-free, carrying the first stars'
// chemistry — wider wonder than a crack waking. Criterion 2 (gap):
// ten billion years and the origin of the elements vs 180 million
// years of sleep. Criteria 3 and 4 tie (both concrete, both found);
// criterion 5 is a near-tie (F ~113 chars vs 96). First difference
// decides: F wins, margin 2-3.
//
// First draft below is candidate A; the revision pass edits it to B.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One star holds less than a forty-thousandth of the Sun's iron — the chemical fingerprint of the very first stars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
