# nhsuk/nhsuk-frontend context
> refreshed 2026-09-25 | upstream default: main @ b1a40ba0 (fork main in sync)

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
- 2026-09-09 trivial-fix pass — outcome pr-opened — 4 typos (commited/prefered x2/seperate) + stale backstop doc refs + dead getbem link + stale Node version example; PR #13 (opened by parallel worker, CI green, mergeable). A second parallel worker opened PR #14 with overlapping fixes (Nunjuck, master→main, gulpfile) — closed as duplicate to keep ONE contribution per repo per cycle.

## Mined gaps (discovered, not yet attempted)
- 2026-09-09 lorem-ipsum 'varius'/'ridiculus'/'Humber'/'Mis'/'Nam'/'parth' in fixtures = correct Latin/placeholder, NOT typos — do not "fix"
- 2026-09-09 CHANGELOG.md historical links (pull/1260, pull/1327) 404 but are historical record — do not edit
- 2026-09-25 repo-audit matrix run — outcome dropped, nothing staged. No maintainer-engaged unclaimed open issue survived (#2092 buttons-as-links is assigned to colinrotherham, already claimed by open PRs; the rest are PRs not issues). Repo-audit on current main @b1a40ba0: eslint + tsc clean; jsdom behaviour suite 578 pass (only a local env failure from an unbuilt dist, not a real repo gap); rendered components axe-clean (header/skip-link/error-summary/checkboxes/radios/date-input/details/warning-callout/inset-text/pagination/card = 0 real violations under axe wcag2a/aa + best-practice). FALSE POSITIVE to never re-pick: header/template.njk `nhsuk-header__account-button` and `nhsuk-header__menu-toggle` have no `type` — the account button sits inside `<form method=post>` and its implicit `type=submit` IS the intended logout submit (fixture 'Log out' -> action="#"); adding `type=button` would break logout. The repo explicitly permits implicit button types ('no-implicit-button-type': 'off' in packages/nhsuk-frontend-review/.htmlvalidate.mjs). Trivial typos (commited/prefered x2/seperate) are ALREADY staged by this fork's open PR #13 (= upstream open PR #2091, not merged) — re-fixing them would duplicate the same work. npm audit shows only dev/build-tooling vulns (marked/qs-body-parser-express/sassdoc) needing a breaking `--force` upgrade — not a clean one-dep pick. Honest conclusion: no real, verifiable, non-duplicate gap survived to PR.
