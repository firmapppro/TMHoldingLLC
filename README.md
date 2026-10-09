# TM Holding LLC

Corporate website and 18-chapter identity guide. Edition 04, 8 October 2026.

- Website: https://chypulis.top/TMHoldingLLC/
- Identity guidelines: https://chypulis.top/TMHoldingLLC/brandbook/

## Design
Edition 04 follows the visual direction requested by the owner: Global Jet charter (https://globaljet.aero/en/charter). Graphite #323438, bronze #BD9973, white and silver. Centred signature, uppercase Roman display, full-bleed aviation imagery and restrained reveal transitions. Hero content and brandbook cover are vertically centred with equal top/bottom space. Section contours and soft background light move slowly; backgrounds pause off screen. Anchor scrolling eases over 1.05–1.6 seconds and reveal transitions use 1.6 seconds. Reduced-motion preferences disable these effects. Cinzel and Lato are open-source alternatives to the reference's Trajan Pro and Proxima Nova; Amiri is retained for Arabic. Self-hosted fonts include OFL licences.

The owner’s original wing / pillar / keel monogram is restored from the original project archive, with its faceted gold, octagonal frame and original geometry. English wordmarks remain outlined SVGs. Compact core and uniform bronze variants are included for small and one-colour uses. Aviation hero and aircraft/yacht application photographs are generated concept imagery, not evidence of asset ownership. Mockup logos were edited using the master monogram as reference. Aviation/maritime focus photographs are generated illustrative assets.

The 18-page brandbook includes identity construction, clear space, typography, palette, contrast, misuse, photography, business cards, correspondence, aviation livery, yacht transom, desktop/mobile composition prototypes and an interactive reveal demonstration. Physical applications are concepts requiring production approval.

## Content basis
Legal name, QFC 05193 and registration date are transcribed from the supplied QFC record. The address is reproduced exactly, including `Office No. 124Register05`. Do not silently correct it. The business focus comes from the project brief; the PDF does not include detailed permitted activities.

Aircraft models are indicative interests, not an owned fleet or placed orders. Global 6500 uses Rolls-Royce Pearl 15; Global 7500/8000 use GE Aerospace Passport. Source links are included in the aircraft disclosure.

The site does not claim financial-services authorisation, verified AML compliance, manufacturer affiliation or operating certificates. Current registration and licensed activity scope need verification with QFC before OEM submissions.

## Enquiry channel
The owner supplied `info@tmholding.qa` for public contact and enquiry drafts. The address is shown in the contact section and dialog and configured in `assets/js/app.js`. The form opens an email draft; it does not transmit or store data. Never describe a mailto draft as a successfully submitted enquiry.

## Local preview
`python3 -m http.server 8765` from this directory. No build step or package install is required.

## Brandbook
18 chapters, direct chapter links, Previous/Next, keyboard navigation and View all. Print / Save PDF uses A4 landscape page styles. Enable background graphics and disable browser headers and footers when printing.

## Deployment
Push `main` to deploy via GitHub Actions and the existing FTP secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`). Only static public files in `assets/`, `brandbook/` and root HTML are uploaded. Source PDFs, documentation, scripts and repository files are excluded. Each file is staged under a temporary name before replacement; HTML is uploaded last. No unrelated remote files are deleted.

Public registry summary omits personal officer/shareholder names and capital at the owner’s request; the source registration document remains unchanged.

The founder’s concept informed the ownership/operator distinction, five-stage asset lifecycle and intended technical, financial and contractual oversight. These describe the intended approach, rather than asserting existing operating procedures or appointed counterparties.

Edition 05: the aviation/maritime section uses paired, unbranded generated concept portraits at blue hour, with integrated copy and a staggered editorial layout. Each portrait reveals once on entering the viewport, using a 1.65-second crop reveal, gentle image settling and delayed copy. Reduced-motion preferences bypass the sequence.

Edition 06: asset compositions share the same top and bottom baseline. Portrait edges fade into the continuous graphite background using intersected gradient masks. Viewport entrance uses opacity only, without crop wipes, translation or zoom.

Edition 07: aviation and maritime use native SVG profile studies instead of photographs. Fine bronze silhouettes and non-numeric construction guides are illustrative, not engineering specifications. Copy sits below the drawings; both directions share a baseline and opacity-only entrance.

## Bilingual corporate edition — 9 October 2026

The corporate website has two static entry points: `index.html` (English) and `ar.html` (Arabic). The header and navigation contain language links that retain the active section. Arabic uses native `lang="ar"` and `dir="rtl"` layout, including navigation, dialogs, form fields, asset columns and lifecycle order; email addresses remain LTR. The legal Arabic name is transcribed from the supplied registration record: تي ام هولدنج ذ.م.م.

Client-provided copy is integrated into the existing visual system. The public landing pages show Doha, Qatar and establishment in 2026 without the registration number. The online brand guide also removes its former number treatments.

The enquiry form remains a mailto draft composer addressed to info@tmholding.qa. It never claims successful delivery. A real delivery endpoint and error handling must be implemented before using a Send Enquiry button or delivery acknowledgement. The privacy dialog describes the actual draft workflow.

Arabic editorial review — 9 October 2026: refined the business register in the Arabic page, asset panels, enquiry form and privacy notice. Corporate confidentiality uses السرية; personal-data privacy retains الخصوصية. Budget references consistently use الموازنات. Literal social-introduction wording was replaced by professional-enquiry wording. The registered Arabic company name is unchanged.
