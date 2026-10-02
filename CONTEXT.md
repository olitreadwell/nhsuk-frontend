# nhsuk/nhsuk-frontend context
> refreshed 2026-10-03 | upstream default: main @ a5a69bc9a (fork main fast-forwarded to match)

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
- No maintainer-engaged unclaimed open issue survived this cycle; self-found gap via repo-audit (test coverage)
- In-flight maintainer work to avoid: #2102/#2121 (warning-button hidden text, colinrotherham), #2076/#2096 (small-checkbox checkmark, waqasnasir + maintainer PR), #2123 (main/container nesting discussion), #2127 (table-row attributes, unvetted feature)

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-10-03 trivial-fix pass — outcome pr-opened — fork PR #20 (fix/docs-links-and-comment-typos, base fork main @ a5a69bc9a, non-draft), 5 files +5/-5: coding-standards.md "Next" link testing.md→tooling.md (CONTRIBUTING order is coding-standards→tooling→linting→testing); browser-support.md missing ")" in the VoiceOver table row; checkboxes/_index.scss comment `alphagov/nhsuk_elements/issues/518`→`alphagov/govuk_elements/issues/518` (nhsuk_elements repo 404s, govuk_elements #518 "Stray line on checkbox on IE" matches the IE11 comment); _sass-mq.scss comment "in in $breakpoints"→"in $breakpoints"; tables/_index.scss comment "can can be buttons"→"can be buttons". All edits are comment/doc only; non-duplicate vs open PR #13/#18 (different lines). Lint clean; jest 2083/2084 with one pre-existing flaky puppeteer axe case (`code/accessibility.puppeteer.test.mjs` "with scroll overflow and button") that passes when run alone.
- 2026-09-09 trivial-fix pass — outcome pr-opened — 4 typos (commited/prefered x2/seperate) + stale backstop doc refs + dead getbem link + stale Node version example; PR #13 (opened by parallel worker, CI green, mergeable). A second parallel worker opened PR #14 with overlapping fixes (Nunjuck, master→main, gulpfile) — closed as duplicate to keep ONE contribution per repo per cycle.
- 2026-09-30 trivial-fix pass — outcome pr-opened — fork PR #18 (fix/trivial-typos-and-dead-links, base fork main, non-draft), 10 files +12/-12: errorMessge→errorMessage in error-summary example, Nunjuck→Nunjucks, notification-banner README dead link→/notification-banners, ampsersands→ampersands, overriden→overridden x2 in jsdom test names, tooling.md moved-root-gulpfile link removed (tasks now shared/tasks), .gitpod.yml 2 dead gitpod docs URLs→ /docs/configure/workspaces/{tasks,ports}, Googlechrome→puppeteer issue URL, alphagov/nhsuk-frontend→alphagov/govuk-frontend issue URL x2. All non-duplicate vs open PR #13 (#2091) and closed #14.

## Mined gaps (discovered, not yet attempted)
- 2026-10-03 `docs/contributing/automated-testing.md:13` tests-directory link uses `tree/master/` — re-checked live, the master ref still resolves 200, so NOT a dead link; do not "fix" master→main here.
- 2026-09-09 lorem-ipsum 'varius'/'ridiculus'/'Humber'/'Mis'/'Nam'/'parth' in fixtures = correct Latin/placeholder, NOT typos — do not "fix"
- 2026-09-09 CHANGELOG.md historical links (pull/1260, pull/1327) 404 but are historical record — do not edit
- 2026-09-25 repo-audit matrix run — outcome dropped, nothing staged. No maintainer-engaged unclaimed open issue survived (#2092 buttons-as-links is assigned to colinrotherham, already claimed by open PRs; the rest are PRs not issues). Repo-audit on current main @b1a40ba0: eslint + tsc clean; jsdom behaviour suite 578 pass (only a local env failure from an unbuilt dist, not a real repo gap); rendered components axe-clean (header/skip-link/error-summary/checkboxes/radios/date-input/details/warning-callout/inset-text/pagination/card = 0 real violations under axe wcag2a/aa + best-practice). FALSE POSITIVE to never re-pick: header/template.njk `nhsuk-header__account-button` and `nhsuk-header__menu-toggle` have no `type` — the account button sits inside `<form method=post>` and its implicit `type=submit` IS the intended logout submit (fixture 'Log out' -> action="#"); adding `type=button` would break logout. The repo explicitly permits implicit button types ('no-implicit-button-type': 'off' in packages/nhsuk-frontend-review/.htmlvalidate.mjs). Trivial typos (commited/prefered x2/seperate) are ALREADY staged by this fork's open PR #13 (= upstream open PR #2091, not merged) — re-fixing them would duplicate the same work. npm audit shows only dev/build-tooling vulns (marked/qs-body-parser-express/sassdoc) needing a breaking `--force` upgrade — not a clean one-dep pick. Honest conclusion: no real, verifiable, non-duplicate gap survived to PR.
- 2026-10-01 tests-ci — measured coverage gap on `packages/nhsuk-frontend/src/nhsuk/components/file-upload/file-upload.mjs`: 62.14% lines / 27.86% branches / 36.84% functions; uncovered 216 + 220-374 (drag/drop state machine: `updateDropzoneVisibility`/`showDraggingState`/`hideDraggingState`/`onDrop`/`canFillInput`/`canDrop`/`matchesInputCapacity`/`onChange`), 424-429 (`observeDisabledState` MutationObserver) and 517-526 (`countFileItems`). Repro: `npx jest --selectProjects 'JavaScript unit tests' 'JavaScript behaviour tests' --coverage --collectCoverageFrom='packages/nhsuk-frontend/src/nhsuk/components/file-upload/file-upload.mjs' --coverageReporters=text`. Dedupe: no open/closed upstream or fork PR touches `file-upload.mjs` or `file-upload.jsdom.test.mjs`; no upstream issue for it. Opened fork PR #19 (branch `file-upload-drag-drop-coverage`, commit `af9397fa`) adding a `describe('Drag and drop')` block; coverage after 95.71% lines / 78.68% branches / 94.73% funcs. — status: pr-opened (fork PR #19)
- 2026-10-01 docs — `docs/contributing/automated-testing.md` claims the visual tests run "within Docker" and that `test:visual`/`test:visual:ref` use `--docker`, but commit `3d225e0d5` ("Run visual regression tests without Docker", 2025-03-11) removed Docker and made `pretest:visual` install Playwright; no Dockerfile and no `docker` string anywhere else in the repo. Not attempted this cycle (test-coverage outranks docs-grounded). Caveat: open fork PR #13 already edits this same file (backstop.js→backstop.config.js, timestamp→bitmaps_test), so a follow-up must not collide. — status: proposed
