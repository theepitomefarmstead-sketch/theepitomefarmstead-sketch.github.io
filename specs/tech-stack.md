# Tech Stack

## Frontend

- HTML5 for semantic page structure
- CSS for layout, typography, color system, and responsive design
- Minimal JavaScript only when needed for interaction or enhancement

## Database

- Google Sheets as the database stack for structured farm data
- A Google Apps Script web app receives and validates public CSA subscription requests, then emails them to the farm

### CSA form deployment

- The CSA email web app is deployed as **The Epitome Farm CSA Email**, version 1, and is accessible to anyone submitting the public form.
- The current deployment executes as `rayamjahi.ajay@gmail.com`, which authorized the app to send email. To send from the farm's own Google account instead, redeploy the script while signed in as `theepitomefarmstead@gmail.com`.
- `CSA_WEB_APP_URL` in `csa.html` is configured with the deployment's `/exec` URL. The form posts in the current tab; Apps Script displays a success or failure confirmation page after processing the request.
- Requests are emailed to `theepitomefarmstead@gmail.com`. A request does not promise product availability or finalize a subscription.

## Design system

- Serif typography for editorial, premium farm identity
- Earth-toned palette inspired by soil, forest, and sunlight
- Strong whitespace and clear hierarchy to communicate calm, trust, and clarity
- Responsive layouts for mobile, tablet, and desktop

## Assets

- `logo.png` as the official brand mark
- local static image assets for farm storytelling and reference visuals
- SVG or CSS-based decorative elements where possible

## Hosting

- GitHub Pages or equivalent static hosting for simple deployment
- Static files committed directly to the repository

## Content approach

- Keep the site lightweight and easy to maintain
- Prefer clear structure over complex CMS dependencies
- Use simple pages for landing, about, design services, CSA subscriptions, approach, and platform sections

## Quality bar

- Fast loading and accessible markup
- Works across modern browsers
- Clean, readable source that is easy for future contributors to extend
