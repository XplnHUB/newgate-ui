# Newgate Documentation Website — UI Specification

**Version:** 1.0  
**Target Audience:** Backend Developers, API Engineers  
**Theme:** "Neon Industrial" — Dark, technical, warm, clean.

---

## 🎨 1. Design System & Aesthetics

### 1.1 Color Palette
The design relies on a deep, rich dark mode with high-contrast neon accents.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary** | `#FF8800` | Brand interaction, active states (Neon Orange) |
| **Secondary** | `#FFB700` | Accents, gradients, warnings (Warm Amber) |
| **Background** | `#0A0A0A` | Main page background (Vercel-ish dark) |
| **Surface** | `#111111` | Card backgrounds, sidebar |
| **Surface Highlight**| `#1F1F1F` | Hover states, code block backgrounds |
| **Text Primary** | `#EDEDED` | Headings, main body text |
| **Text Secondary** | `#A1A1AA` | Subtitles, descriptions, inactive items |
| **Text Tertiary** | `#52525B` | Borders, subtle dividers |
| **Success** | `#10B981` | GET methods, success toasts |
| **Error** | `#EF4444` | DELETE methods, errors |
| **Info** | `#3B82F6` | POST methods, links |

**Gradients:**
- **Brand Mesh:** `radial-gradient(circle at 50% 0%, rgba(255,136,0,0.15), transparent 70%)`
- **Glow text:** Text-shadow with `rgba(255,136,0,0.5)`

### 1.2 Typography
Clean, modern sans-serifs paired with technical monospaced fonts.

- **Headings:** `Space Grotesk` (Weights: 600, 700) - Technical, geometric.
- **Body:** `Inter` or `Satoshi` (Weights: 400, 500) - Highly readable, neutral.
- **Code:** `JetBrains Mono` (Weights: 400, 500) - Ligatures enabled.

**Type Scale:**
- `text-4xl`: Hero Title
- `text-2xl`: Section Headings
- `text-xl`: Card Titles
- `text-base`: Body text (16px)
- `text-sm`: Metadata, sidebar items
- `text-xs`: Labels, badges

### 1.3 Spacing & Layout
- **Container:** Max-width `1200px` centered.
- **Grid:** 12-column grid for complex layouts.
- **Spacing Tokens:**
    - `xs`: 4px
    - `sm`: 8px
    - `md`: 16px
    - `lg`: 24px
    - `xl`: 32px
    - `2xl`: 48px
    - `4xl`: 96px

---

## 🧭 2. Website Structure & Navigation

### 2.1 Global Navigation (Navbar)
- **Left:** `Newgate` Logo (Wordmark + Icon) - White text with Orange dot.
- **Center:** Search Input (cmd+k style) - "Search documentation..."
- **Right:**
    - `Docs` link
    - `API` link
    - `Blog` link
    - `GitHub` Icon (Social)
    - `Twitter` Icon (Social)
    - Theme Toggle (Sun/Moon - locked to Dark by default typically, but toggleable)

---

## 🏠 3. Landing Page Specification

### 3.1 Hero Section
A centered, high-impact introduction.

- **Background:** Subtle animated gradient mesh (Orange/Amber) fading into black.
- **Title:** "Newgate — The Multi-Format Backend Framework" (H1, Space Grotesk).
- **Subtitle:** "Handle JSON, CSV, XML, YAML, Form-Data & Binary effortlessly." (Text-Secondary, Inter).
- **Install Block:**
    - Style: Glassmorphism container with glowing orange border (`1px`).
    - Content:
        ```bash
        npm install newgatejs
        ```
    - Interaction: Click to copy (Clipboard icon changes to Checkmark).
    - Animation: Typewriter effect on load.
- **CTA Buttons:**
    - Primary: "Read Documentation" (Solid Orange, Black Text).
    - Secondary: "View on GitHub" (Hollow White Border, White Text).

### 3.2 Feature Grid (Bento/Card Style)
Six cards, `grid-cols-3` (desktop), `grid-cols-1` (mobile).

1.  **Multi-format Parsing:** Icon: `FileJson`. "Auto-detects and parses JSON, CSV, XML, and more out of the box."
2.  **Express-style Routing:** Icon: `Route`. "Familiar `app.get()` syntax for zero learning curve."
3.  **Middleware Core:** Icon: `Layers`. "Unstoppable middleware pipeline for auth, logging, and validation."
4.  **Enhanced Responses:** Icon: `Zap`. "Helper methods like `res.xml()` or `res.csv()` for instant formatting."
5.  **Security Built-in:** Icon: `ShieldCheck`. "XXE protection, payload limits, and input sanitization."
6.  **Auto-Docs:** Icon: `BookOpen`. "Generates raw OpenAPI spec or HTML docs from your routes."

### 3.3 Multi-Format Live Demo
Split layout: **Left (Controls)** vs **Right (Code Preview)**.

- **Tabs:** [JSON] [CSV] [XML] [Binary]
- **Content:**
    - On Tab Switch: The code block on the right smoothly transitions (fade/slide).
    - Code Block: Shows a simple route handling that format.
    - **Preview:** Small "Terminal" window below showing the curl request and response.

### 3.4 Quick Start Guide
A wide "Get Started" panel.
- Left content: Steps (1. Install, 2. Create server.js, 3. Run).
- Right content: `server.js` code snippet highlighting the 5 lines of code needed to start.

---

## 📚 4. Documentation Layout (Sidebar & Content)

### 4.1 Sidebar (Navigation)
Sticky positioning, scrollable independently.

**Categories:**
- **Introduction**
- **Getting Started** (Installation, Quick Start, Config)
- **Routing** (Methods, Parameters, Groups)
- **Middleware** (Global, Route-level, Error Handling)
- **Multi-format Parsing** (Collapsible)
    - JSON
    - CSV
    - XML
    - YAML
    - Form-Data
    - Binary
- **Response Helpers**
- **Auto-Documentation**
- **Security Practices**
- **Architecture Overview**
- **Examples**
- **Roadmap**
- **Contributing**

**UI Details:**
- Active Item: Left orange border-left (`2px`), text color white, subtle background `rgba(255,136,0,0.1)`.
- Hover Item: Text color white.
- Group Headers: Uppercase, text-xs, tracking-widest, text-tertiary.

### 4.2 Content Area
- **Breadcrumbs:** `Docs > Middleware > Global`
- **Typography:** Very comfortable reading width (`65ch` max for text).
- **Code Blocks:**
    - Syntax Highlighting: Shiki or Prism (Vercel dark theme).
    - Line numbers: Faint grey.
    - Copy Button: Top right, visible on hover.
    - File Name: Optional header bar for code blocks (e.g., `routes.js`).
- **Callouts:**
    - **Note:** Gray bg, Info icon.
    - **Warning:** Amber bg/border, AlertTriangle icon.
    - **Tip:** Blue/Green bg, Lightbulb icon.

### 4.3 Table of Contents (Right Sidebar)
- Hidden on mobile.
- Sticky right.
- "On this page" header.
- Active section highlighting based on scroll position.

---

## 📦 5. Component Specifications

### 5.1 Animated Install Block
```html
<div class="relative group rounded-lg border border-orange-500/50 bg-neutral-900 p-4 shadow-[0_0_15px_rgba(255,136,0,0.2)]">
  <span class="text-orange-400 font-mono">$</span>
  <span class="text-gray-100 font-mono typing-effect">npm install newgatejs</span>
  <button class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
    <Icon name="copy" />
  </button>
</div>
```

### 5.2 Multi-format Tabs
- **Container:** Rounded-t-lg bg-surface-highlight.
- **Tab Item:**
    - Active: Border-b-2 border-orange-500, text-white.
    - Inactive: Text-gray-500 hover:text-gray-300.
- **Content:** Rounded-b-lg bg-[#0d0d0d] p-4 border border-surface-highlight border-t-0.

### 5.3 API Route Viewer
A component to document specific API endpoints smoothly.
- **Header:**
    - [Badge: GET] `/users`
    - Small text description right aligned.
- **Body (Collapsible):**
    - Parameters Table (Name, Type, Required, Description).
    - Response Example (Code Block JSON).

### 5.4 Search Modal `(Cmd+K)`
- **Overlay:** Backdrop blur `blur-sm` + bg-black/50.
- **Panel:** Centered, Width `600px`.
- **Input:** Large, no border, auto-focus.
- **Results:** List items with icons.
    - `[Page] Middleware`
    - `[Section] CSV Parsing`
- **Footer:** "Esc to close", "Enter to select".

---

## 📐 6. Architecture Diagrams

### 6.1 Request Lifecycle
**Visual Style:** Simple flow chart with rounded nodes and subtle animated connecting lines.

**Flow:**
1.  **Incoming Request** (Raw Node.js `IncomingMessage`)
2.  **Newgate Wrapper** (Enhances `req` & `res`)
3.  **Format Detector** (Siffs Content-Type header)
4.  **Parser Pipeline** (Stream-based parsing based on detector)
5.  **Middleware Stack** (Auth -> Logging -> Validation)
6.  **Route Handler** (User logic)
7.  **Response Helper** (Format serialization)
8.  **Outgoing Response**

### 6.2 ASCII Diagram Version
```plaintext
[Client] --> HTTP Request --> [Newgate Core]
                                   |
                             [Format Detector]
                                   |
                          (header: text/csv?) --> [CSV Parser]
                                   |
                           [Middleware Stack]
                                   |
                           [Route  Handler]
                                   |
                          [Response Factory]
                                   |
[Client] <-- HTTP Response <-- (res.csv())
```

---

## 🧪 7. Examples Section

Layout: "Recipe" cards.
Grid of use-cases that link to specific tutorial pages.

1.  **"Universal API"**: Endpoint that accepts JSON, XML, and YAML and echoes back in the same format.
2.  **"CSV Ingestor"**: Upload a CSV file, parse row-by-row, insert into database.
3.  **"Image Proxy"**: Binary handling to resize and serve images.
4.  **"Legacy Bridge"**: Receive XML from SOAP service, return JSON to frontend.

---

## 🚨 8. Security Practices Section

Focus on "Secure defaults".

- **XXE Protection**: Explain that the XML parser has `entity: false` by default.
- **DoS Prevention**: Visual slider showing how to configure `maxBodySize: '1mb'`.
- **Proto-Pollution**: JSON parser safeguards.

---

## 🔧 9. Roadmap Section

Timeline UI (Vertical line with nodes).

- **v1.0 (Current)**: Core parsing (JSON, CSV, XML), Routing, Middleware.
- **v1.5 (Planned)**: WebSocket support, File Upload streaming enhancements.
- **v2.0 (Future)**: Plugin ecosystem, distributed tracing, Rust-core parser (optional).
- **v3.0 (Vision)**: Serverless-first adapter (Edge/Workers).

---

## 💻 Technical Implementation Notes

- **Framework:** Next.js (App Router) or Astro (Starlight).
- **Styling:** Tailwind CSS.
- **Icons:** Lucide React.
- **Motion:** Framer Motion (for smooth layout transitions).
- **State:** React Context for "Current Format" preference.
