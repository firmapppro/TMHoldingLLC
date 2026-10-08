# TM Holding LLC

Corporate website and 18-chapter identity guide. Edition 04, 8 October 2026.

- Website: https://chypulis.top/TMHoldingLLC/
- Identity guidelines: https://chypulis.top/TMHoldingLLC/brandbook/

## Design
Edition 04 follows the visual direction requested by the owner: Global Jet charter (https://globaljet.aero/en/charter). Graphite #323438, bronze #BD9973, white and silver. Centred signature, uppercase Roman display, full-bleed aviation imagery and restrained reveal transitions. Hero content and brandbook cover are vertically centred with equal top/bottom space. Section contours and soft background light move slowly; backgrounds pause off screen. Anchor scrolling eases over 1.05–1.6 seconds and reveal transitions use 1.6 seconds. Reduced-motion preferences disable these effects. Cinzel and Lato are open-source alternatives to the reference's Trajan Pro and Proxima Nova; Amiri is retained for Arabic. Self-hosted fonts include OFL licences.

The owner’s original wing / pillar / keel monogram is restored from the original project archive, with its faceted gold, octagonal frame and original geometry. English wordmarks remain outlined SVGs. Compact core and uniform bronze variants are included for small and one-colour uses. Aviation hero and aircraft/yacht application photographs are generated concept imagery, not evidence of asset ownership. Mockup logos were edited using the master monogram as reference. Aviation/maritime focus photographs are existing project assets, used illustratively.

The 18-page brandbook includes identity construction, clear space, typography, palette, contrast, misuse, photography, business cards, correspondence, aviation livery, yacht transom, desktop/mobile composition prototypes and an interactive reveal demonstration. Physical applications are concepts requiring production approval.

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
