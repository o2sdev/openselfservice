# ai-self-reflect-and-learn

This command helps AI agents self-reflect on the current chat session, learn from mistakes pointed out by the user, and update local rule files so that future work in this repository is more accurate and consistent.

It is a **meta-command for agents** – it does not operate on O2S business modules (frontend, api-harmonization, blocks, integrations, etc.), but on **agent behavior** and the **rules that guide it**.

---

## Purpose

- **Analyze the current chat session** and (optionally) recent code changes to find moments where the user had to correct or guide the agent.
- **Identify root causes** of these issues (misunderstandings, missed rules from `AGENTS.md`, repository-specific conventions, etc.).
- **Propose concrete improvements** in the form of new/updated guidelines in local rule files.
- **Apply those improvements to rule files** (only after explicit user approval) so that future AI work in this repo is better aligned with expectations.

---

## Rule Files & Locations

This command treats the following locations as **rule sources / rule targets**:

- `AGENTS.md`
- `.cursor/rules/**` (e.g. marketing, docs, other AI-related rules)
- `.cursor/commands/**` (other command specs which may need adjustments)
- `.ai/**` (present or future AI-focused rules, including docs for AI commands)

**Guard-rail:**  
The command **MAY ONLY modify files that are clearly rule files** in the locations above. It MUST NOT touch application code, configs, or any other project files.

---

## Usage

```text
/ai-self-reflect-and-learn
```

# Optional focused usage – with explicit problem description

The user may also invoke the command with an **explicit description of a problem** they want to turn into new rules, for example:

```text
/ai-self-reflect-and-learn "Miałeś problem z poprawnym użyciem AGENTS.md przy tworzeniu komendy X"
```

or by writing the description in the **first message after invoking** the command.  
In that case, the command MUST treat this description as a **high-priority issue to reflect on**, even if it is not trivially detectable from the rest of the session.

### When to Run

- After a session where the user:
  - repeatedly corrected the agent,
  - pointed out misunderstandings of `AGENTS.md` or other rules,
  - clarified how O2S architecture, naming, or marketing language should be handled.
- When you want to **capture fresh learnings** into persistent rules without manually editing rule files.

### Who Can Trigger

- The **user** (developer) can trigger it explicitly.
- The **agent** may suggest running it, but:
  - MUST clearly ask the user for confirmation before running,
  - MUST clearly ask for approval before applying any file changes.

---

## Input

### Required Conceptual Inputs

- **Scope**  
  - Current value: `"session"`.  
  - Meaning: analyze the **current chat session** as the primary data source.
  - On this project, this is the only supported scope for now.

- **Last conversation / session history**  
  - Taken from the **current Cursor chat session** (no explicit parameter needed in most cases).
  - If the environment does not expose history automatically, the command should ask the user to:
    - paste the relevant fragment(s), or
    - describe the key corrections they made to the agent.

- **Optional explicit problem description (user focus)**  
  - The user may specify **one concrete problem** that the LLM had during this session (or a set of closely related problems).
  - This can be passed:
    - as a string argument to the command (if supported by the environment), or
    - as a short description in the first message right after `/ai-self-reflect-and-learn`.
  - The command MUST:
    - always treat this description as a separate issue to analyze,
    - try to match it to specific places in the conversation,
    - ask the user for more details if it cannot find enough context in history.

### Built-in Goals (not parametrized)

These goals are always active and do **not** require explicit parameters:

- **Learn from mistakes**  
  If the user asked for concrete corrections during the session, turn these into:
  - observed issues,
  - root causes,
  - rules that prevent similar issues in the future.

- **Use `AGENTS.md` and other rule files better**  
  Detect situations where the agent:
  - ignored existing rules,
  - underused architecture guidelines,
  - missed marketing/communication guidelines,
  and encode improvements for better rule usage in the future.

---

## Behavior (Step-by-Step)

When `/ai-self-reflect-and-learn` is invoked, follow this flow:

### 1. Collect Context

1. Load `AGENTS.md` (always treat it as a primary source of truth).
2. Inspect the **current chat session** to find:
   - places where the user corrected the agent,
   - requests for changes in behavior,
   - comments that something is against project conventions or rules.
3. If the user provided an **explicit problem description** (as a command argument or first follow-up message), treat it as:
   - an additional, high-priority **issue candidate**,
   - a hint for which parts of the conversation to inspect first.
   If you cannot locate matching fragments in the session, still keep this description as a standalone issue and ask the user for any missing context.
4. Optionally, if it adds clear value:
   - inspect recent code changes (via tools like `read_file`, `list_dir`, `grep`),
   - read relevant rule files:
     - `.cursor/rules/**`
     - `.cursor/commands/**`
     - `.ai/**` (if present).

If there is **not enough context** (no corrections, too little history, etc.), explain this to the user and suggest:
- pasting relevant fragments of the conversation, or
- describing concrete issues they want to learn from.

### 2. Identify Issues that Required User Intervention

For the collected context:

1. Find all points where:
   - the user explicitly pointed out a mistake,
   - the user requested a correction or different behavior,
   - the agent failed to follow `AGENTS.md` or other rules.
2. If an **explicit problem description** was provided, always create at least one **issue** based on that description, even if it is not perfectly aligned with automatically detected corrections.
3. For each identified point or explicit description, define a single **issue** that the command will reflect on (you may group very similar ones if it makes the reflection clearer).

### 3. Analyze Each Issue (Self-Diagnosis)

For every issue, build a structured reflection:

- **Observed issue**  
  Short, concrete description of what went wrong from the user’s perspective.

- **Root causes – co źle rozumiałem**  
  Explanation of why the issue happened, e.g.:
  - misreading or ignoring `AGENTS.md`,
  - misunderstanding project architecture,
  - incorrect assumptions about tools or files,
  - insufficient clarifying questions.

- **Improvement plan – jak i gdzie poprawię, aby się nie powtarzało**  
  Concrete, actionable steps, for example:
  - “Add a guideline to AGENTS.md under section X about Y”
  - “Always use file Z as a reference before generating marketing content”
  - “Ask for confirmation when assumption A is uncertain”

- **Concrete rules for future messages – lista proponowanych zmian w plikach reguł**  
  For each needed change:
  - target file (e.g. `AGENTS.md`, `.cursor/rules/marketing/...`, `.ai/...`),
  - section or area where the rule should be added,
  - exact proposed text of the new/updated rule.
  - each entry SHOULD be prefixed with:
    - the current date (`YYYY-MM-DD`),
    - and, if available, the git username (e.g. `@janjagoda`).

### 4. Present a Summary for User Review

In the chat response:

1. List all issues in a consistent, scannable format, for example:
   - **Observed issue**
   - **Root causes – co źle rozumiałem**
   - **Improvement plan – jak i gdzie poprawię, aby się nie powtarzało**
   - **Concrete rules for future messages – lista proponowanych zmian w plikach reguł**
2. Clearly show:
   - **which files** you propose to change,
   - **what exact rules** you propose to add or update.
3. Ask explicitly:
   - “Czy akceptujesz te propozycje zmian?”  
   - Allow the user to:
     - accept all,
     - accept some,
     - reject or edit specific proposals.

### 5. Never Modify Files Before Explicit Approval

The command MUST NOT:

- call any file-modifying tool (e.g. patch / write tools),
- update any rule file (`AGENTS.md`, `.cursor/rules/**`, `.cursor/commands/**`, `.ai/**`),

until:

- the user has explicitly approved a concrete set of changes, and
- any partial approvals have been properly filtered (only accepted items are applied).

### 6. Apply Approved Changes to Rule Files

Once the user approves some or all proposals:

1. For each approved rule change:
   - apply it to the correct file:
     - `AGENTS.md`,
     - `.cursor/rules/**`,
     - `.cursor/commands/**`,
     - `.ai/**` (e.g. AI-specific guides, command docs, etc.).
   - ensure each new entry:
     - starts with the current date (`YYYY-MM-DD`),
     - includes the git username if available,
     - is placed under the right section/header to keep structure tidy.
2. Keep modifications minimal and focused:
   - only add/change what was in the approved list,
   - do not reformat or restructure unrelated parts of the files.

### 7. Report the Result

After applying changes:

1. Summarize:
   - which files were changed,
   - how many new/updated rules were added per file.
2. Optionally, show short excerpts (not full diffs) if that helps the user verify the result.
3. Confirm that:
   - no non-rule files were touched,
   - no unapproved proposals were applied.

---

## Output Format (Chat)

The command’s main visible output is a **structured reflection** in the chat window.  
For each identified issue, use this shape:

- **Observed issue**  
  _[krótki opis problemu]_

- **Root causes – co źle rozumiałem**  
  _[lista/przegląd przyczyn, np. brak użycia AGENTS.md, zła interpretacja architektury O2S itd.]_

- **Improvement plan – jak i gdzie poprawię, aby się nie powtarzało**  
  _[konkretne działania, gdzie co dopiszesz]_

- **Concrete rules for future messages – lista proponowanych zmian w plikach reguł**  
  _[konkretne wpisy + docelowe pliki, z prefiksem daty i ewentualnie git usera]_

Below the per-issue blocks, add a short overall summary:

- which rule files are planned for modification,
- how many changes per file,
- a clear question asking for approval.

---

## Security & Guard-Rails

- **Scope:** local project only; this command never interacts with external systems beyond tools exposed in the development environment.
- **Allowed writes:** only to rule files in:
  - `AGENTS.md`
  - `.cursor/rules/**`
  - `.cursor/commands/**`
  - `.ai/**`
- **Forbidden writes:** any application source code, configs, build files, or data unrelated to AI rules.
- **Approval required:** no file changes are allowed without explicit user approval of concrete proposals.
- **In case of uncertainty:** if the command is not sure whether a file is a rule file, it MUST:
  - ask the user to confirm before modifying it, or
  - skip that file and mention it in the summary.

---

## Examples

### Example Invocation

```text
/ai-self-reflect-and-learn
```

### Example Scenario (Conceptual)

1. During the session, the user says:
   - that the agent did not follow a naming convention described in `AGENTS.md`,
   - and then asks to fix it and explains how it should look.
2. `/ai-self-reflect-and-learn`:
   - finds that part of the conversation,
   - builds a reflection with:
     - **Observed issue** – “Agent ignored naming convention X…”
     - **Root causes** – “I did not re-check AGENTS.md section Y…”
     - **Improvement plan** – “Add a note under section Y that…”
     - **Concrete rules** – proposal of a new rule line under section Y, with date and user name.
3. The command presents all of that in chat, lists target files, and asks for approval.
4. After approval, it:
   - updates `AGENTS.md` in the right section,
   - adds a dated rule line,  
   - confirms back to the user what was changed.

---

## Relation to AGENTS.md

- This command is **driven by** `AGENTS.md` and other rule files, and also **extends them** over time.
- It should:
  - always load `AGENTS.md` first,
  - treat it as the canonical description of how agents should work in this repo,
  - propose changes to `AGENTS.md` only when they clearly help avoid repeated mistakes.

When in doubt about where to place a new rule, prefer:

- extending relevant sections of `AGENTS.md`, or
- creating/using focused files under `.ai/**` for very specific AI behaviors (e.g. per-command docs).

---

## Suggested AGENTS.md Entry

When updating `AGENTS.md`, you can append or extend a section like:

```markdown
## Cursor Command: ai-self-reflect-and-learn

- **Purpose:** Help AI agents learn from mistakes made in the current chat session and persist those learnings into local rule files.
- **Parameters:** Implicitly uses the current session as scope; no explicit arguments required for now.
- **Output:** Structured reflection (Observed issue, Root causes, Improvement plan, Concrete rules) and, after approval, updates to rule files.
- **Roles:** Intended for AI coding assistants and developers working with them.
- **Dependencies:** AGENTS.md, .cursor/rules/**, .cursor/commands/**, .ai/** as sources and targets for rules.
- **Notes:** Never modifies files without explicit user approval; only touches rule files, never application code.
```


