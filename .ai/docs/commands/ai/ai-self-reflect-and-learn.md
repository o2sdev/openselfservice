# ai-self-reflect-and-learn (AI Command)

## Purpose

`/ai-self-reflect-and-learn` is a **meta-command for AI agents** working in this repository.  
Its goal is to:

- analyze the **current chat session**,
- find places where the user had to correct or guide the agent,
- turn these moments into **persistent rules** in local rule files,  
so that future agents avoid repeating the same mistakes.

---

## Scope & Context

- **Scope:** current chat session (`scope = "session"`).
- **Context:** whole O2S monorepo, but the command operates only on:
  - `AGENTS.md`,
  - `.cursor/rules/**`,
  - `.cursor/commands/**`,
  - `.ai/**`.
- It never touches application code or configuration files.

---

## High-Level Behavior

1. **Collects context** from the current session and relevant rule files.
2. Optionally, **accepts an explicit problem description** from the user:
   - passed as an argument to the command, or
   - written in the first message after invoking `/ai-self-reflect-and-learn`,
   and treats it as a high-priority issue to reflect on.
3. **Identifies issues** where the user:
   - pointed out errors,
   - requested corrections,
   - highlighted misalignment with project rules.
4. For each issue (including explicitly provided ones), generates a structured reflection:
   - **Observed issue**
   - **Root causes – co źle rozumiałem**
   - **Improvement plan – jak i gdzie poprawię, aby się nie powtarzało**
   - **Concrete rules for future messages – lista proponowanych zmian w plikach reguł**
5. Presents all proposals in chat and **asks for explicit approval**.
6. After approval, **updates only rule files** with dated entries (and git username if available).

---

## Guard-Rails

- Never modify any file **without explicit user approval**.
- Only modify files that are clearly **rule files**:
  - `AGENTS.md`
  - `.cursor/rules/**`
  - `.cursor/commands/**`
  - `.ai/**`
- If unsure whether a file is a rule file:
  - ask the user for confirmation, or
  - skip modifying that file and mention it in the summary.

---

## When to Use

Run `/ai-self-reflect-and-learn` when:

- the user repeatedly corrects the agent during a session,
- new project-specific expectations emerge (architecture, marketing language, writing style),
- you want to **convert corrections into durable rules** instead of relying on memory in a single chat.


