---
layout: page
permalink: /publications/
title: Publications
description: Papers and ongoing work in robotics and reinforcement learning.
nav: true
nav_order: 2
---

<div class="publication-search">
  <label for="publication-search">Find a paper</label>
  <input id="publication-search" type="search" placeholder="Search by title, author, topic, or year" autocomplete="off" aria-describedby="publication-count">
  <p id="publication-count" aria-live="polite" role="status"></p>
</div>

<div class="publications">
{% bibliography %}
</div>
