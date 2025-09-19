---
translationKey: 'front-matter'
title: 'Front Matter'
description: 'Front matter'
---

**Front matter** refers to the top section of each content markdown file. It is essentially a configuration specific to each page, providing key information and valuable metadata to search engines, but may also be used to provide globally accessible data to other pages.

## Basic example
The most basic example in a `content/page/index.md` file looks like:
```yaml
---
translationKey: 'english-title'
title: 'Translated Title'
description: 'A long sentence, or two sentences describing the page for SEO text'
---
```

The three dashes `---` tell the page that the front matter is written using `yaml`. That is the expected format for all content pages, though other formats are acceptable if needed (`+++` for `toml` and `{ front matter }` for `json`).

This section of content is more sensitive and prone to syntax errors, especially when deeply nested or using arrays/maps.

## Complex example
As a more complicated example, here is an example weapon front matter:
```yaml
# Automatic translation
translationKey: weapon

# Search engine text and title
title: 'Weapon'
description: 'This is a weapon in a game somewhere.'

# Displayed information in the infobox
infoboxes:
  - tab: 'Base'
    title: 'Weapon'
    data:
      - label: 'Damage'
        value: 101
      - label: 'Damage type'
        value: 'Physical'
      - label: 'Scaling stat'
        value: 'Raw muscle baby'
  - tab: 'Upgraded'
    title: 'Weapon'
    data:
      - label: 'Damage'
        value: 10000
      - label: 'Damage type'
        value: 'Physical'
      - label: 'Scaling stat'
        value: 'Raw muscle baby'

# Taxonomies
categories:
  - weapons
  - boss drops
tags:
  - physical

# Tell the page to load the math library to render a section
renderMath: true
```