# TM Holding LLC

Corporate website and 18-chapter identity guide. Edition 02, 8 October 2026.

- Website: https://chypulis.top/TMHoldingLLC/
- Identity guidelines: https://chypulis.top/TMHoldingLLC/brandbook/

## Design
Ivory, forest and restrained brass. Instrument Serif display typography, Inter body text and Amiri Arabic signature. Fonts are self-hosted with OFL licences in `assets/fonts/`. Flat SVG identity assets are in `assets/brand/`. SVG wordmarks retain live text; outline before final physical production.

The maritime editorial image was generated using the built-in imagegen tool. It is illustrative and is not evidence of asset ownership. Prompt: restrained overhead editorial view of dark emerald Arabian Gulf water, a tiny unbranded yacht and a quiet wake, natural light, no logos or text.

## Content basis
Legal name, QFC 05193, registration date, officers and authorised/issued capital are transcribed from the supplied QFC record. The address is reproduced exactly, including `Office No. 124Register05`. Do not silently correct it. No paid-up-capital claim is made. The business focus comes from the project brief; the PDF does not include detailed permitted activities.

Aircraft models are indicative interests, not an owned fleet or placed orders. Global 6500 uses Rolls-Royce Pearl 15; Global 7500/8000 use GE Aerospace Passport. Source links are included in the aircraft disclosure.

The site does not claim financial-services authorisation, verified AML compliance, manufacturer affiliation or operating certificates. Current registration and licensed activity scope need verification with QFC before OEM submissions.

## Temporary enquiry channel
The owner approved `test@email.com` as a placeholder. It appears in the contact dialog and `assets/js/app.js`. The form opens an email draft; it does not transmit or store data. Replace the address and temporary notices after establishing a real company mailbox. Never describe a mailto draft as a successfully submitted enquiry.

## Local preview
`python3 -m http.server 8765` from this directory. No build step or package install is required.

## Brandbook
18 chapters, direct chapter links, Previous/Next, keyboard navigation and View all. Print / Save PDF uses A4 landscape page styles. Enable background graphics and disable browser headers and footers when printing.

## Deployment
Push `main` to deploy via GitHub Actions and the existing FTP secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`). Only static public files in `assets/`, `brandbook/` and root HTML are uploaded. Source PDFs, documentation, scripts and repository files are excluded. Each file is staged under a temporary name before replacement; HTML is uploaded last. No unrelated remote files are deleted.
