---
translationKey: '404'
title: '404'
description: '404 override'
---

The **404** page may be overridden in any project using Quetzal by creating the file `layouts/404.html`. In development mode, the 404 page may only be accessed directly through [/404.html](/404.html) and will not actually display on invalid pages. This works properly in production, displaying on any page that isn't found.

Once created, this file may be customized to use any HTML/CSS/JS combined with Hugo logic (such as self-defined partials created in `layouts/_partials/filename.html`).