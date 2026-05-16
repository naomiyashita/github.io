---
layout: default
title: CV
lang: ja
permalink: /cv/
---

# CV

## Education

- 2025–present　大学院名・研究科名

## Publications

<div class="publication-list">
{% for pub in site.data.publications %}
  <article class="publication-item">
    <p>{{ pub.display_ja }}</p>

    {% if pub.doi %}
      <p><a href="{{ pub.doi }}">DOI</a></p>
    {% endif %}

    <button class="cite-button" type="button" data-citation="{{ pub.citation_ja | escape }}">
      引用情報
    </button>
  </article>
{% endfor %}
</div>

<dialog id="cite-dialog" class="cite-dialog">
  <form method="dialog">
    <button class="dialog-close" type="submit" aria-label="Close">×</button>
  </form>

  <h2>Cite this work</h2>

  <p class="citation-style-label">APA 7th</p>

  <textarea id="citation-text" class="citation-text" readonly></textarea>

  <button id="copy-citation-button" class="copy-citation-button" type="button">
    Copy citation
  </button>
</dialog>

## Presentations

準備中

## Awards / Grants

準備中

## Skills

- R
- PsychoPy
