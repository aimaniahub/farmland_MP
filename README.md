

**Objective:** This document outlines the design, layout, styling, and animation specifications for building a premium farmland website. The goal is to replicate the professional and nature-inspired aesthetic of `farmland theme`, providing a clear and detailed guide for development.

---

## 1. Overall Design & Layout Philosophy

The core philosophy is a **clean, modern, and professional design** that feels spacious and trustworthy.

- **Grid System:** The layout must be based on a standard 12-column grid. The main content should be centered within a container that has a maximum width of `1200px`.
- **Visual Hierarchy:** Use font sizes, weights, and colors to guide the user's eye. Headlines should be prominent, and Calls-to-Action (CTAs) must be visually distinct.
- **Whitespace:** Be generous with whitespace. Vertical spacing between major content sections should be between `100px` and `120px` to create a high-end, uncluttered feel.
- **Mobile-First Responsiveness:** The design must be fully responsive and optimized for a seamless experience on all devices, from mobile phones to desktops.

---

## 2. Key Page Layouts

### 2.1. Homepage Design Breakdown

The homepage serves as the primary entry point and must make a strong visual impact.

1.  **Hero Section:**
    - **Background:** Full-screen, high-quality video background (autoplay, muted, looped).
    - **Overlay:** A semi-transparent dark overlay (`rgba(0, 0, 0, 0.3)`) on the video to ensure text contrast.
    - **Content:** Compelling headline (`<h1>`), a short descriptive sub-headline, and a primary CTA button ("Book a Free Site Tour").
2.  **Featured Farms Section:**
    - **Layout:** Use a **card-based grid layout** (2 or 3 columns).
    - **Cards:** Each card represents a farm and contains a high-quality image, farm name, location, and key details. These cards must have hover animations (see Section 5).
3.  **"How It Works" Section:**
    - **Layout:** A step-by-step visual guide.
    - **Design:** Use icons and short, concise text for each step (e.g., 1. Explore, 2. Visit, 3. Own).
4.  **Testimonials Section:**
    - **Layout:** A **slider/carousel** to display customer testimonials.
    - **Content:** Each slide should include the customer's photo, name, and a quote.

### 2.2. Farm Project Page Layout

This page provides detailed information about a single farm project.

1.  **Header:** Large hero image or video of the specific farm.
2.  **Tabbed Navigation:** To organize content cleanly, use tabs like "Overview," "Gallery," "Layout Plan," and "Amenities."
3.  **Gallery:** A grid layout of images and videos with a lightbox feature for full-screen viewing.
4.  **Amenities:** Use an icon-and-text list to showcase amenities.
5.  **Enquiry Form:** A prominent form, ideally in a sticky sidebar so it remains accessible while scrolling.

---

## 3. Styling & Branding (Global Styles)

These rules define the website's DNA and ensure visual consistency.

### 3.1. Color Palette

- **Primary Green (for CTAs, links):** `hex: #3A6D3B`
- **Accent Orange (for tags, highlights):** `hex: #F39C12`
- **Dark Text (for all text):** `hex: #212529`
- **Subtle Text (for metadata):** `hex: #555555`
- **Section Background (Off-White):** `hex: #F8F9FA`
- **White Background:** `hex: #FFFFFF`

### 3.2. Typography

- **Headings Font (`<h1>`, `<h2>`):**
  - **Font Family:** `Montserrat`, `sans-serif`
  - **Font Weight:** `700` (Bold)
  - **Example `<h2>` Size:** `38px`
- **Body & Paragraph Font (`<p>`):**
  - **Font Family:** `Lato`, `sans-serif`
  - **Font Weight:** `400` (Regular)
  - **Font Size:** `17px`
  - **Line Height:** `1.7`

---

## 4. Animation & Interactivity

Animations should be subtle and professional, enhancing the user experience.

- **General Scroll Animation:**
  - **Effect:** A "fade in and slide up" effect for elements as they enter the viewport.
  - **CSS:** `opacity: 0; transform: translateY(40px); transition: all 0.6s ease-out;`
- **Buttons & Links Hover State:**
  - **Effect:** A subtle "lift and shadow" effect.
  - **CSS:** `transform: translateY(-3px); box-shadow: 0 4px 15px rgba(0,0,0,0.15); transition: all 0.3s ease-in-out;`
- **Project Cards Hover State:**
  - **Effect:** The entire card lifts, grows slightly, and gains a more prominent shadow.
  - **CSS:** `transform: scale(1.03) translateY(-5px); box-shadow: 0 8px 30px rgba(0,0,0,0.12); transition: all 0.3s ease-in-out;`

---

## 5. Component-Specific Design (The Details)

This section provides the exact specifications for reusable UI components.

### 5.1. Navigation Bar (Header)

| Property | Initial State (On Hero) | On-Scroll State |
| :--- | :--- | :--- |
| **Position** | `absolute` | `position: sticky; top: 0;` |
| **Background** | `transparent` | `#FFFFFF` |
| **Box Shadow** | `none` | `0 2px 10px rgba(0,0,0,0.1)` |

### 5.2. Primary CTA Button

| Property | Value |
| :--- | :--- |
| **Background Color** | `#3A6D3B` |
| **Text Color** | `#FFFFFF` |
| **Padding** | `15px 35px` |
| **Border Radius** | `8px` |
| **Hover State** | Background `#2E572F`, `transform: translateY(-3px);` |

### 5.3. Farm Project Cards

| Property | Value |
| :--- | :--- |
| **Background** | `#FFFFFF` |
| **Border Radius** | `12px` |
| **Box Shadow** | `0 4px 20px rgba(0,0,0,0.08)` |
| **Image** | Top of card, `border-radius: 12px 12px 0 0;` |
| **Content Padding** | `24px` |
| **Title (`<h3>`)** | `Montserrat`, `22px`, `font-weight: 600` |
| **Status Tag** | `background: #F39C12; color: #FFF; padding: 4px 12px; border-radius: 20px;` |

### 5.4. Form Input Fields

| Property | Value |
| :--- | :--- |
| **Background** | `#F8F9FA` |
| **Border** | `1px solid #DDDDDD` |
| **Border Radius** | `8px` |
| **Padding** | `15px` |
| **Focus State** | `border-color: #3A6D3B; box-shadow: none;` |
| **Font** | `Lato`, `16px` |