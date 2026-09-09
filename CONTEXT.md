# nhsuk/nhsuk-frontend context
> refreshed 2026-09-09 | upstream default: main @ 10caad9fe

## Identity & policies
- upstream: nhsuk/nhsuk-frontend, default branch main, primary language JS/SCSS/Nunjucks, English-first yes (UK dialect)
- CLA/DCO: none (no CLA bot, no contributor agreement in CONTRIBUTING)
- AI-assisted PR policy: unstated (no AI mention in CONTRIBUTING or PR template)
- signed commits required: no
- PR template: .github/PULL_REQUEST_TEMPLATE.md (Description + 3 checkboxes: testing policy, coding standards, CHANGELOG entry)
- external tracker: github

## Conventions (verified from merged PRs)
- branch naming: kebab-case description (port-released-v10, sass-dist-path, heading-spacing-with-errors, caption-margin)
- commit style: imperative, <=50 chars, leading capital, no full stop (git-style-guide.md)
- test command: npm test (jest); lint: npm run lint (types/js/css/prettier)
- CI: GitHub Actions; fork CI runs on fork PRs

## Maintainer picture
- NHS.UK service manual team; active repo, frequent dependabot + external merges

## Issue-area health
- No maintainer-engaged open issue picked this cycle; trivial-fix pass (typos/links/stale refs)

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-09-09 trivial-fix pass — outcome pr-opened — 4 typos (commited/prefered x2/seperate) + stale backstop doc refs + dead getbem link + stale Node version example; PR #13

## Mined gaps (discovered, not yet attempted)
- 2026-09-09 lorem-ipsum 'varius'/'ridiculus'/'Humber'/'Mis'/'Nam'/'parth' in fixtures = correct Latin/placeholder, NOT typos — do not "fix"
- 2026-09-09 CHANGELOG.md historical links (pull/1260, pull/1327) 404 but are historical record — do not edit
