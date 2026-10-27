# LessonScript

A small worksheet language with exact fractions.

DRAFT — not submitted. Event: https://syntax-summit.devpost.com/

## Inspiration

Teachers need repeatable arithmetic worksheets with understandable errors and exact answers, without executing arbitrary program code.

## What it does

Compiles a tiny language of titles, exercises and comments into a printable worksheet. It evaluates fractional arithmetic exactly, reports source-line errors and supports source export and owned saves.

## How it was built

A bounded TypeScript parser handles precedence, unary operators and parentheses. BigInt rational arithmetic avoids floating-point rounding. Next.js supplies the editor and print view; PostgreSQL supports saved work.

## Challenges

The language must remain small and predictable while rejecting JavaScript, division by zero, excessive nesting and oversized input.

## What is verified

Nine standalone tests and the production build pass, including exact arithmetic and source diagnostics. Classroom outcomes and deployed saving have not been measured.

## Technical lessons

A domain-specific language earns its value through a precise grammar and useful diagnostics, not the number of general-purpose features it exposes.

## Next steps

Resolve the conflicting student eligibility language, verify the deployed save flow and record a demonstration of the language and its implementation.

## Judging requirements

Implements an actual custom language with a concrete educational use, parser and exact evaluator. Eligibility must be clarified before submission; the demo must remain within five minutes.

## Demo sequence

1. Introduce the grammar with a short worksheet.
2. Compile expressions with exact fractional answers.
3. Show a source-line diagnostic and division-by-zero rejection.
4. Print, export, save and reopen the worksheet.

## Authorship

Prepared with ChatGPT/Codex assistance. Shared Next.js/workspace infrastructure originates in code-up-matrix/axios-fx-compliance-agent; the product module was developed on 27 October 2026. Shared code must be disclosed under the event’s reuse rules.

## Outstanding artifacts

Repository: https://github.com/code-up-matrix/lessonscript-devpost-2026. The deployed demo URL, required video, private judge access and entrant declarations must be completed from real outputs. No success receipt is claimed.
