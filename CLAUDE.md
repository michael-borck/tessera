# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tessera is an educational platform built with Quarto static site generator. It simulates a fictional cloud services company to teach cybersecurity, web design, and systems analysis concepts.

## Commands

### Development
- `quarto preview` - Start local development server with live reload
- `quarto render` - Build the static site for production

### Git Operations
- Standard git workflow applies - no pre-commit hooks detected

## Architecture

### Technology Stack
- **Static Site Generator**: Quarto with Cosmo HTML theme
- **Content Format**: Quarto Markdown (`.qmd` files)
- **Styling**: Custom CSS design system (`styles.css`) layered over the Cosmo theme — "Terminal / Breach Console" direction: dark canvas, phosphor-green accent (#22e88a / #10b981), JetBrains Mono chrome, CRT scanlines, CLI-window cards
- **Typography**: JetBrains Mono (headings, navbar, buttons, code, metrics) + Inter (long-form body), loaded via Google Fonts in `_quarto.yml` `include-in-header`
- **Brand mark**: `assets/logo.svg` (constellation glyph on a phosphor-green gradient tile); set via `website.navbar.logo`, wordmark injected by `.navbar-brand-logo::after` in CSS
- **Scripts**: Custom JavaScript for contact forms and UI (`scripts/contact-buttons.js`, `scripts/contact-form.js`)
- **Chatbot Integration**: AnythingLLM embedded widgets

### Project Structure
- `_quarto.yml` - Main configuration defining site structure, navigation, and theme
- `/blog/` - Blog posts with categories and listings
- `/chatbots/` - Character-based chatbot interfaces for staff/client personas
- `/docs/` - Documentation including policies, interviews, articles, and logs
- `/_backstories/` - Character backgrounds and scenario documentation
- `/data/` - CSV files with financial data for educational scenarios
- `/assets/` - Images and media files
- `/_extensions/` - Quarto extensions (lordicon for animated icons)

### Key Implementation Details
1. **Content Organization**: Uses Quarto's listing feature for blog and chatbot directories
2. **Navigation**: Multi-level navbar with dropdown menus for documentation sections
3. **Chatbot Integration**: Each character has an embedded AnythingLLM chat widget with unique embed IDs

### Theme & Design System (`styles.css`)
All visual styling is driven by CSS custom properties at `:root` (tokens for color, radius, shadow, type, motion). When changing the look, edit tokens — not individual rules. Key conventions:
- **Palette**: dark surfaces, green-tinted near-black (`#070b09` bg / `#0d1411` surface), phosphor-green accent `#22e88a`, hairline lines `#1b2823`, readable green-gray ink (`#aec7b6` body / `#d9f5e4` headings). Body carries a faint CRT scanline texture; a green glow appears on hover and in the hero. Edit the `--tx-*` tokens in `:root`, not individual rules.
- **Cards**: terminal-window treatment — small radius (6px), hairline border, `● ● ●` dots + `~/tessera` path chrome; hover swaps border to the accent and adds a green glow (no global lift). Square (`0px`) buttons carry `[ ... ]` brackets.
- **Avatars** (leadership headshots): `.card img` is forced to a 116px circle via `border-radius: 50% !important` (Bootstrap's `.rounded` utility is `!important`, so the override must be too).
- **Footer**: rendered by Quarto as `.nav-footer` (NOT `.page-footer`); background comes from `_quarto.yml` `page-footer.background`, link/heading colours from `.nav-footer` rules.

### Security Considerations
- Educational platform - security weaknesses may be intentional for teaching purposes

## Content Types
- **Blog Posts**: Technical articles in `/blog/posts/`
- **Character Profiles**: Staff and client personas in `/chatbots/bots/`
- **Policy Documents**: Security and compliance policies in `/docs/policies/`
- **Interview Transcripts**: Scenario-based interviews in `/docs/interviews/`
- **System Documentation**: ERD, network diagrams, org charts in `/docs/support/`