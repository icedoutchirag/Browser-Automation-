<div align="center">

<br />
<img src="./design/canvas-2.png" alt="Browser Automation SaaS Canvas" width="800" />
<br />
<br />

# 🌐 Visual AI Browser Automation SaaS

**Design in real-time. Execute in cloud browsers. Replay every run.**

An enterprise-grade, multi-user visual web automation platform powered by **Stagehand V3**, **Browserbase**, **Trigger.dev**, **Liveblocks**, **Clerk B2B**, and **Neon Serverless Postgres**.

[🌐 Live Production App](https://browser-automation-production-0804.up.railway.app) &nbsp;&bull;&nbsp; [📦 GitHub Repository](https://github.com/icedoutchirag/Browser-Automation-)

<br />

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Railway](https://img.shields.io/badge/Railway-Production-purple?style=for-the-badge&logo=railway)](https://railway.com/)
[![Neon Postgres](https://img.shields.io/badge/Neon-Postgres-00E599?style=for-the-badge&logo=neon&logoColor=black)](https://neon.tech/)
[![Clerk Auth](https://img.shields.io/badge/Clerk-B2B_Auth-6C47FF?style=for-the-badge&logo=clerk)](https://clerk.com/)
[![Trigger.dev](https://img.shields.io/badge/Trigger.dev-v3_Cloud-635BFF?style=for-the-badge)](https://trigger.dev/)
[![Browserbase](https://img.shields.io/badge/Browserbase-Cloud_Chromium-orange?style=for-the-badge)](https://www.browserbase.com/)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [System Architecture](#-system-architecture)
- [Key Features](#-key-features)
- [Workflow Node Registry](#-workflow-node-registry)
- [Real-World Examples](#-real-world-examples)
- [Tech Stack](#-tech-stack)
- [Local Development Setup](#-local-development-setup)
- [Production Deployment Guide](#-production-deployment-guide)
- [License](#-license)

---

## 🎯 Overview

**Browser Automation SaaS** is a no-code visual workflow automation platform designed for teams. It allows non-technical users to build, execute, and monitor AI-powered web tasks without writing brittle Playwright scripts or Python scrapers.

### Problem Solved
Traditional scrapers break whenever CSS selectors or HTML structures change. This platform leverages **Stagehand AI** and **Browserbase Cloud Headless Chromium** to interpret web pages using natural language commands (e.g. *"Type 'Quantum Computing' into search and press enter"* or *"Extract top 5 products and prices"*).

### Core Highlights
- **Multiplayer Collaboration:** Team members see live cursors, active selections, and co-build workflows in real-time.
- **Autonomous AI Agents:** Let AI agents navigate web pages, click elements, fill forms, and solve multi-step browser tasks autonomously.
- **Session Replays:** Every cloud browser run is recorded as an HLS video that can be replayed right inside the web console.
- **Zero Local Footprint:** Workflows run inside cloud workers 24/7 without needing user PCs to remain open.

---

## 🏗 System Architecture

```mermaid
flowchart TD
    subgraph Client ["Client Layer (Browser)"]
        UI["Next.js 16 + React Flow Canvas"]
        LB["Liveblocks (Realtime Multiplayer Cursors)"]
    end

    subgraph AuthDB ["Auth & Data Layer"]
        Clerk["Clerk B2B (Orgs & RBAC)"]
        Neon["Neon Serverless Postgres (Drizzle ORM)"]
    end

    subgraph Execution ["Cloud Execution Engine"]
        Trigger["Trigger.dev v3 Cloud Workers"]
        Stagehand["Stagehand V3 AI Engine"]
        BB["Browserbase (Cloud Headless Chromium)"]
    end

    UI <-->|Auth & Orgs| Clerk
    UI <-->|Realtime State| LB
    UI <-->|HTTP / SQL| Neon
    UI -->|Dispatch Workflow| Trigger
    Trigger -->|Execute Graph| Stagehand
    Stagehand <-->|Control Browser| BB
    BB -->|Stream Video Replay & Logs| UI
```

---

## ✨ Key Features

- 🎨 **Visual Drag-and-Drop Canvas:** Build complex graph flows using React Flow with custom smoothstep edges and node handles.
- 👥 **Real-Time Collaboration:** Liveblocks integration syncs node positions, values, and multiplayer avatar stacks live across all open sessions.
- 🤖 **Autonomous AI Agent Node:** AI Agent handles multi-step navigation, form filling, and goal resolution automatically.
- 📊 **Live Console & Log Streaming:** Inspect per-node execution status (`pending` $\rightarrow$ `running` $\rightarrow$ `done` / `failed`), step duration, and output JSON payloads.
- 📹 **Browserbase Video Replay:** Embedded HLS video player to watch the exact browser recording of every run.
- 🏢 **Multi-Tenant B2B Workspaces:** Organization switching powered by Clerk, separating workflows and run histories cleanly.
- 💳 **Billing & Plan Gating:** In-app Clerk Billing integration for Pro feature entitlements (e.g., gating AI Agent nodes to Pro tiers).

---

## 🧩 Workflow Node Registry

| Node | Kind | Icon | Description |
|---|---|---|---|
| **Start** | Trigger | 🖱️ | The single entry point for every workflow execution. |
| **Open URL** | Action | 🌐 | Launches the cloud browser and navigates to a specified target URL. |
| **Act** | Action | 👆 | Performs an atomic web action (e.g., *"Click login button"*, *"Type text into search"*). |
| **Extract** | Action | 📄 | Scrapes structured data from the DOM into JSON using natural language schemas. |
| **Observe** | Action | 👁️ | Finds and returns target DOM elements matching an instruction. |
| **Agent** | Action | 🤖 | Autonomous AI agent that completes multi-step web tasks end-to-end. |
| **Send Email** | Action | ✉️ | Sends transactional emails containing workflow extraction outputs. |

---

## 💡 Real-World Examples

### Example 1: E-Commerce Price & Title Extractor
1. **`Start`**
2. **`Open URL`** $\rightarrow$ `https://news.ycombinator.com`
3. **`Extract`** $\rightarrow$ `Extract the top 5 article titles and point counts`

### Example 2: Interactive Web Search & Summary
1. **`Start`**
2. **`Open URL`** $\rightarrow$ `https://wikipedia.org`
3. **`Act`** $\rightarrow$ `Type 'Quantum Computing' into search and press enter`
4. **`Extract`** $\rightarrow$ `Extract the main definition summary`

### Example 3: Autonomous Web Research Agent
1. **`Start`**
2. **`Agent`** $\rightarrow$ `Search Google for the latest stock price of Apple (AAPL) and get the price.`

---

## 🛠 Tech Stack

- **Framework:** [Next.js 16 (App Router + Turbopack)](https://nextjs.org/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS + Tailwind CSS + [Shadcn UI](https://ui.shadcn.com/)
- **Canvas Engine:** [React Flow (@xyflow/react)](https://reactflow.dev/)
- **Realtime Sync:** [Liveblocks (@liveblocks/react-flow)](https://liveblocks.io/)
- **Background Tasks:** [Trigger.dev v3](https://trigger.dev/)
- **AI & Automation:** [Stagehand V3](https://github.com/browserbase/stagehand) + [Browserbase](https://www.browserbase.com/)
- **Database:** [Neon Serverless Postgres](https://neon.tech/) + [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [Clerk B2B Organizations](https://clerk.com/)
- **Deployment:** [Railway](https://railway.com/)

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js**: v20 or higher
- **npm** or **bun**
- Free accounts for Clerk, Neon Postgres, Trigger.dev, Liveblocks, and Browserbase.

### 1. Clone the Repository
```bash
git clone https://github.com/icedoutchirag/Browser-Automation-.git
cd Browser-Automation-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Neon Postgres Database
NEON_BRANCH=main
DATABASE_URL=postgresql://neondb_owner:...@ep-...neon.tech/neondb?sslmode=require
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:...@ep-...neon.tech/neondb?sslmode=require

# Trigger.dev Background Tasks
TRIGGER_SECRET_KEY=tr_dev_...

# Liveblocks Collaboration
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_dev_...
LIVEBLOCKS_SECRET_KEY=sk_dev_...

# Browserbase Automation
BROWSERBASE_API_KEY=bb_live_...
```

### 4. Push Database Schema
Run the database migration script against your Neon Postgres database:
```bash
npx tsx scripts/apply-migration.ts
```

### 5. Start Development Servers
Run Trigger.dev local task runner in one terminal:
```bash
npx trigger.dev dev
```

Run Next.js dev server in another terminal:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## 🌐 Production Deployment Guide

### 1. Deploy Web App to Railway
1. Connect your GitHub repository (`icedoutchirag/Browser-Automation-`) to Railway.
2. In your Railway Service **Variables** tab, add all variables from `.env.local`.
3. Generate a public domain under Railway **Settings** $\rightarrow$ **Networking**.

### 2. Deploy Background Tasks to Trigger.dev Cloud
Deploy your worker task definitions to Trigger.dev cloud so workflows run 24/7 without local servers:

```bash
npx trigger.dev deploy
```

Add your production environment variables (`DATABASE_URL`, `BROWSERBASE_API_KEY`, `LIVEBLOCKS_SECRET_KEY`) inside your **Trigger.dev Cloud Project Settings**.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">

Made with ❤️ by [Chirag](https://github.com/icedoutchirag)

</div>
