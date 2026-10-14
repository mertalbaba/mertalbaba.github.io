---
layout: page
title: Photography & drawings
permalink: /art_creations/
description: A selection of my photography and drawings.
nav: true
nav_order: 5
---

<p>I enjoy photography and drawing in my free time.</p>

<section aria-labelledby="photography-title">
  <h2 class="gallery-section-title" id="photography-title">Photography</h2>
  <div class="gallery-grid">
    {% for index in (1..9) %}
      {% capture image_path %}/assets/img/gallery/photos/{{ index }}.jpeg{% endcapture %}
      {% capture thumbnail_path %}/assets/img/gallery/thumbs/photos/{{ index }}.jpg{% endcapture %}
      <a href="{{ image_path | relative_url }}" aria-label="View photograph {{ index }} at full size">
        <img src="{{ thumbnail_path | relative_url }}" alt="Photograph {{ index }} from Mert Albaba's collection" loading="lazy" decoding="async">
      </a>
    {% endfor %}
  </div>
</section>

<section aria-labelledby="drawings-title">
  <h2 class="gallery-section-title" id="drawings-title">Drawings</h2>
  <div class="gallery-grid drawings">
    {% for index in (1..9) %}
      {% capture image_path %}/assets/img/gallery/drawings/{{ index }}.jpeg{% endcapture %}
      {% capture thumbnail_path %}/assets/img/gallery/thumbs/drawings/{{ index }}.jpg{% endcapture %}
      <a href="{{ image_path | relative_url }}" aria-label="View drawing {{ index }} at full size">
        <img src="{{ thumbnail_path | relative_url }}" alt="Drawing {{ index }} from Mert Albaba's collection" loading="lazy" decoding="async">
      </a>
    {% endfor %}
  </div>
</section>
