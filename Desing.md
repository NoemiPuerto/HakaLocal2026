---
name: Organic Enterprise
colors:
  surface: '#f9faf3'
  surface-dim: '#dadbd4'
  surface-bright: '#f9faf3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4ed'
  surface-container: '#eeeee7'
  surface-container-high: '#e8e9e2'
  surface-container-highest: '#e2e3dc'
  on-surface: '#1a1c18'
  on-surface-variant: '#42493f'
  inverse-surface: '#2f312d'
  inverse-on-surface: '#f1f1ea'
  outline: '#73796e'
  outline-variant: '#c2c9bc'
  surface-tint: '#426838'
  primary: '#000a00'
  on-primary: '#ffffff'
  primary-container: '#022601'
  on-primary-container: '#6a915d'
  inverse-primary: '#a7d298'
  secondary: '#476800'
  on-secondary: '#ffffff'
  secondary-container: '#c5f17a'
  on-secondary-container: '#4c6f00'
  tertiary: '#040800'
  on-tertiary: '#ffffff'
  tertiary-container: '#162300'
  on-tertiary-container: '#729139'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c3efb3'
  primary-fixed-dim: '#a7d298'
  on-primary-fixed: '#002200'
  on-primary-fixed-variant: '#2b4f23'
  secondary-fixed: '#c5f17a'
  secondary-fixed-dim: '#aad462'
  on-secondary-fixed: '#131f00'
  on-secondary-fixed-variant: '#344e00'
  tertiary-fixed: '#ccef8b'
  tertiary-fixed-dim: '#b0d272'
  on-tertiary-fixed: '#131f00'
  on-tertiary-fixed-variant: '#364e00'
  background: '#f9faf3'
  on-background: '#1a1c18'
  surface-variant: '#e2e3dc'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for modern SaaS environments that require a balance of high-density data and professional warmth. The brand personality is authoritative yet sustainable, evoking growth and stability through a sophisticated palette of botanical greens. 

The aesthetic follows a **Corporate / Modern** style, emphasizing precision and clarity. It utilizes deep contrast to establish a clear hierarchy, where structural elements (sidebars and headers) use grounded, dark tones to frame vibrant, action-oriented content areas. The interface should feel reliable, efficient, and calibrated for long-session productivity.

## Colors
The color strategy employs a "Forest-to-Field" hierarchy to guide user focus:
- **Primary Dark Green (#022601):** Reserved for the "infrastructure" of the UI—global navigation, sidebars, and primary headers. This provides a high-contrast anchor for the application.
- **Primary Green (#4F7302):** The main action color. Use this for primary buttons, active navigation states, and success indicators in charts.
- **Secondary Olive (#3E5902):** Utilized for hover states of primary elements and secondary UI accents where lower visual weight is required.
- **Accent Green (#799833):** Dedicated to informative elements like badges, progress bars, and functional icons.
- **Light Background Accent (#D6D979):** Applied to card backgrounds, empty states, and subtle section dividers to soften the high-contrast dark elements and reduce eye strain.

For neutral scales, use a cool-toned slate grey for text and borders to maintain a clean, professional finish.

## Typography
This design system uses the **Efficient Scale** typographic model, prioritizing legibility in data-dense environments. 

**Hanken Grotesk** is used for headlines to provide a sharp, contemporary character. **Inter** is used for body copy and labels due to its exceptional readability and neutral tone. To maintain professional efficiency, line heights are kept tight but breathable, and letter spacing is slightly reduced on larger headings to increase visual impact. Labels always use uppercase or semi-bold weights to differentiate them from standard body text.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy using an 8px spatial system.
- **Desktop:** A 12-column grid with 16px gutters. Content is typically housed in a flexible main container that expands to a max-width of 1440px.
- **Tablet:** An 8-column grid with 16px gutters.
- **Mobile:** A 4-column grid with 16px margins.

Spacing should be used to create clear logical groupings. Use `lg` (24px) for spacing between major sections and `sm` (12px) for internal component padding. The sidebar is fixed at 280px on desktop to ensure consistent navigation access.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** rather than heavy shadows. 
- **Level 0 (Base):** The Light Background Accent (#D6D979) or a neutral off-white.
- **Level 1 (Cards/Surfaces):** Pure white backgrounds with a subtle 1px border (#E2E8F0).
- **Level 2 (Popovers/Modals):** Pure white with a soft, diffused ambient shadow (0px 4px 20px rgba(2, 38, 1, 0.08)).

In dark regions (sidebars), use opacity changes (e.g., 10% white overlays) to indicate hover or active states instead of drop shadows.

## Shapes
The design system utilizes a **Rounded** shape language to soften the professional aesthetic. 
- Standard components (buttons, inputs, cards) use a base radius of **8px (rounded-lg)**.
- Smaller elements like tags or checkboxes use **4px**.
- Container-level elements (modals) use **16px (rounded-xl)** to emphasize their priority.

## Components
- **Buttons:** Primary buttons use #4F7302 with white text. Secondary buttons use an outline of #799833 with matching text. 
- **Input Fields:** 1px borders using a light grey, shifting to #4F7302 on focus. Labels sit 4px above the field.
- **Cards:** White backgrounds, 8px corner radius, and a 1px border. No shadows are used for standard dashboard cards to maintain a clean "Efficient Scale" look.
- **Sidebars:** Background set to #022601. Nav items use white text at 70% opacity, moving to 100% opacity with a #4F7302 left-edge accent bar on active states.
- **Badges/Chips:** Use #D6D979 as a background with #3E5902 text for a soft, legible status indicator.
- **Progress Bars:** Background of light grey with the fill set to #799833.