---
translationKey: 'term'
title: 'Term'
description: 'Term override'
---

The display of **terms** may be overridden in any project using Quetzal by creating the file `layouts/term.html`. Note that it uses `layouts/baseof.html` as a site-wide base.

A term refers to a specifically defined term under any [taxonomy](/override/taxonomy), controlled in the [front matter](/glossary/frontmatter) of content files, displaying all terms held in that taxonomy.

For example, using this front matter in a single:
```yaml
---
translationKey: 'my-single'
title: 'My Single'
description: 'SEO description here'

categories:
  - Cool pages
  - Absolutely goated
  - Shades emoji
tags:
  - stylish
---
```

will automatically create these terms under `categories/cool-pages`, `tags/stylish` and so on. This is similar to a [/override/section], but with more flexibility.