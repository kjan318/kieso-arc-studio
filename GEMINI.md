# AI Agent Guidelines (GEMINI.md)

This document outlines the rules, expectations, and guidelines for AI Agents (such as Gemini/Antigravity) working within the `kieso-arc-studio` repository. Following these instructions ensures maximum performance, code quality, and alignment with the user's workflow.

## 1. Technology Stack & Coding Standards
- **Core Stack:** HTML5, Tailwind CSS, Vanilla JavaScript, GSAP for animations, and Paper.js for canvas manipulations.
- **Mainstream Standards:**
  - Write semantic HTML to ensure accessibility and SEO best practices.
  - Utilize modern ES6+ JavaScript features (arrow functions, destructuring, modules if applicable).
  - Adopt a component-based mindset where possible (even in vanilla HTML/JS) to keep `index.html` organized.
  - Follow utility-first CSS principles strictly using Tailwind; keep custom CSS in the `<style>` block to a minimum unless necessary for complex animations or specific variables.
  - Ensure responsive design across all devices (mobile-first approach).

## 2. Workflow & Deployment
- **Deployment Target:** Always assume that the **root directory (`.`)** is the deployment target for GitHub Pages. Do not nest the production build into subfolders like `site/` or `dist/` unless explicitly requested.
- **Git Conventions:** Write clear, concise, and descriptive commit messages (e.g., `feat: add new project modal`, `fix: resolve mobile navigation overflow`).
- **File Modifications:** When updating `index.html` or other files, ensure changes are grouped logically and do not break existing functionality.

## 3. Communication & Persona
- **Detailed Walkthroughs:** The user prefers detailed, step-by-step walkthroughs. When proposing architectural changes, adding complex animations, or implementing new features, explain the *why* and *how* behind the code.
- **Clarity over Brevity:** Do not just output code blocks; provide the necessary context so the user understands the implications of the changes.

## 4. Tool Usage
- **Flexibility:** Use the best tools available for the task at hand (e.g., file reading, terminal commands, web searches). There are no strict restrictions on tool usage at this stage. 

## 5. General Project Guidelines
- The project is a personal portfolio. Prioritize aesthetics, smooth interactions (via GSAP/Paper.js), and professional presentation.
- Always review the `index.html` file comprehensively before making structural changes to maintain the integrity of the layout and animations.
