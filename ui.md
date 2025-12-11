# Newgate Documentation Website — UI Specification

**Version:** 2.0 (Neon Next-Gen)
**Target Audience:** Backend Developers, API Engineers
**Theme:** "Neon Industrial" — Premium, Futuristic, Clean, Developer-Centric.

---

## 🎨 1. Design System & Aesthetics

### 1.1 Color Palette
Refined dark theme with richer blacks and vibrant neon accents.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary** | `#FF8800` | Brand identity, primary actions, active borders |
| **Secondary** | `#FFB700` | Warm gradients, secondary highlights |
| **Background** | `#050505` | Deepest background (nearly black) |
| **Surface** | `#0A0A0A` | Sidebar, cards, panels |
| **Surface Hover**| `#121212` | Hover states |
| **Border** | `#27272A` | Subtle dividers (Zinc-800) |
| **Text Primary** | `#EDEDED` | Headings, high-contrast text |
| **Text Secondary** | `#A1A1AA` | Body text (Zinc-400) |
| **Text Tertiary** | `#52525B` | Metadata, faint details (Zinc-600) |

**Gradients & Effects:**
- **Mesh Gradient:** `radial-gradient(circle at 50% -20%, rgba(255, 136, 0, 0.15), transparent 70%)`
- **Glassmorphism:** `backdrop-blur-xl bg-black/60`
- **Neon Glow:** `box-shadow: 0 0 30px -10px rgba(255, 136, 0, 0.3)`

### 1.2 Typography
Premium typeface selection for a professional look.

- **Headings:** `Space Grotesk` (Weights: 500, 700) - Tight tracking (`-0.02em`).
- **Body:** `Inter` (Weights: 400, 500) - Tall x-height, readable.
- **Code:** `JetBrains Mono` (Weights: 400) - Ligatures enabled.

**Type Scale:**
- `text-5xl`: Page H1 (Display)
- `text-3xl`: Section H2
- `text-xl`: Subheading H3
- `text-lg`: Body intro
- `text-base`: Standard body
- `text-sm`: UI elements

### 1.3 Spacing & Layout
- **Max Width:** `1920px` (Full fluid width).
- **Prose Width:** `80ch` (Optimal reading line length).
- **Grid:** Sidebar (280px) - Content (Flexible) - On-This-Page (280px).

---

## 🧭 2. Navigation & Structure

### 2.1 Navbar (Glass Header)
- **Style:** Fixed, `h-16`, transparent with heavy blur (`backdrop-blur-md`).
- **Border:** Bottom subtle border (`border-white/5`).
- **Elements:**
    - Logo: "Newgate." (Space Grotesk, Bold).
    - Search: "Cmd+K" pill, spotlight effect.
    - Right: GitHub Icon, Twitter Icon, Theme Toggle.
    - **No API Link** (Removed as per v1.1).

### 2.2 Documentation Sidebar (Left)
- **Style:** Sticky, `h-screen`, `bg-surface/50`.
- **Interactions:**
    - Group Headers: Uppercase, tracking-widest, `text-[11px]`, `text-tertiary`.
    - Links: `text-sm`, hover `text-primary`.
    - Active State: Neon vertical bar left, subtle background glow.

### 2.3 Table of Contents (Right)
- **Style:** Sticky, minimal.
- **Marker:** Animated vertical line tracking scroll position.
- **Typography:** `text-sm`, `text-tertiary`, active `text-white`.

---

## 🧩 3. Component Specifications

### 3.1 Hero Section (Docs Landing)
- **Title:** Large, gradient text (`bg-clip-text`).
- **Install Block:**
    - Terminal-like appearance.
    - Animated typing effect.
    - Copy button with success checkmark.
    - Neon border glow.

### 3.2 Feature Grid ("Did you know?")
- **Layout:** Masonry or Grid.
- **Card Style:**
    - Background: `bg-surface`.
    - Border: `border-white/5`.
    - Hover: `border-primary/50`, slight scale up.
    - Icon: Lucide icon with neon color.

### 3.3 Code Blocks
- **Theme:** Custom Vercel-like dark theme.
- **Header:** Optional file name (`server.js`).
- **Features:**
    - Line numbers (faint).
    - Copy button (visible on hover).
    - Language badge.

### 3.4 Callouts (Info Boxes)
- **Design:** Flex layout with icon left.
- **Variants:**
    - **Note:** Gray border/bg.
    - **Tip:** Blue/Green tint.
    - **Warning:** Amber tint.
    - **Danger:** Red tint.

---

## ⚡ 4. Animations (Micro-Interactions)

- **Page Load:** Fade in + Slide up (`y: 10px`).
- **Hover:** Smooth color transitions (`duration-200`).
- **Scroll:** Sticky elements stay fixed without jitter.
- **Copy:** Icon transforms to checkmark.

---

## 💻 Tech Implementation
- **Framework:** Astro.
- **Styling:** Tailwind CSS + `typography` plugin.
- **Icons:** Lucide React.
- **Fonts:** Google Fonts (Inter, Space Grotesk, JetBrains Mono).
