---
translationKey: 'test-section'
title: 'Test Section'
description: 'Test section'
---

This page is considered a **section**, meaning that it is first parsed by `baseof.html` with `section.html` rendered in `{{ block "main" . }}{{ end }}`.

A section functions as a list page. It is a collection of [singles](/test-section/test-single), or article pages. For example, a `Weapons` section would likely contain a list of individual weapons.

The page is considered a section because of the exact file name `_index.md` (specifically, the `_` denotes a section). While you can use typical file names such as `_weapon.md`, we prefer to use directories to specify the path.

As a full example, the file path `content/en/test-section/_index.md` corresponds to the section page `example.com/en/test-section`.

Content placed in the `_index.md` file will display above the generated list.

Sections and their singles will be automatically displayed in the sidebar and breadcrumbs.