---
translationKey: 'single'
title: 'Single'
description: 'Page single'
---

This page is considered a **single**, meaning that it is first parsed by `baseof.html` with `single.html` rendered in `{{ block "main" . }}{{ end }}`.

A single is an article page, or any typical page that would reference an item, enemy, or something similar in a game.

The page is considered a single because of the exact file name `index.md`. While you can use typical file names such as `weapon.md`, we prefer to use directories to specify the path.

As a full example, the file path `content/en/test-single/index.md` corresponds to the page `example.com/en/test-single`. A single will almost always be under a section.

## Generated components

Singles will be automatically added to sections, and displayed in both the breadcrumbs and sidebar, with the currently selected one displayed and/or highlighted.

### Table of Contents

Level 2 and 3 headings added to the page will automatically be added to the Table of Contents (toc). Level 4-6 are smaller headings that would be generally less used or clog the table.