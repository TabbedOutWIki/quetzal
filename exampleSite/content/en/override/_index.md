---
translationKey: 'override'
title: 'Overrides'
description: 'Overriding layouts and other Quetzal imports'
---

**Overrides** allow you to customize the look and function of any indvidual website using **Quetzal**. Any page listed here corresponds to a `layouts/` file that may be created or edited to override the default display. For example, creating the file `layouts/home.html` allows you to create your own homepage.

Other pieces may be overridden as well, such as the `i18n` folder specifying common terms and translations (for example, `en.toml` contains English terms). Overriding text here will change displayed text in imported UI pieces. This may also be used to add your own, however, creating your own translation files will cause the corresponding Quetzal file to be ignored. This may add more maintenance, especially in the early stages of this tool.