---
layout: default
title: CV
lang: ja
permalink: /cv/
---

# 業績
<nav class="page-toc" aria-label="CV contents">
  <strong>目次．</strong>
  <a href="#affiliation">所属</a>
  <a href="#membership">学会</a>
  <a href="#publications">原著論文</a>
  <a href="#presentations">発表</a>
  <a href="#awards-grants">受賞歴・競争的研究資金</a>
  <a href="#skills">スキル等</a>
</nav>

<h2 id="affiliation">所属</h2>

- 2025–present　明治学院大学大学院心理学研究科

<h2 id="membership">学会</h2>

- 2025–present　日本認知心理学会

<h2 id="publications">原著論文</h2>

<div class="publication-list">
{% for pub in site.data.publications %}
  {% include publication_item.html pub=pub lang="ja" %}
{% endfor %}
</div>

<dialog id="cite-dialog" class="cite-dialog">
  <form method="dialog">
    <button class="dialog-close" type="submit" aria-label="Close">×</button>
  </form>

  <h2>To cite this article:</h2>

  <p class="citation-style-label">APA 7th Edition</p>

  <div id="citation-preview" class="citation-preview"></div>

  <button id="copy-citation-button" class="copy-citation-button" type="button">
    クリップボードにコピーする
  </button>
</dialog>

<h2 id="presentations">発表</h2>

<h3>ポスター発表</h3>

<ul class="presentation-list">
  <li>
    <strong>宮下 直</strong>・髙橋 稔・金城 光（2025）．活動―状態指向性，記憶の自己効力感および日常場面における展望的記憶のエラーの関連性　日本認知心理学会第23回大会，京都大学，2025年5月31日–6月1日
    <a class="publication-action" href="https://doi.org/10.14875/cogpsy.2025.0_144">[リンク]</a>
  </li>
</ul>

<h2 id="awards-grants">受賞歴・競争的研究資金</h2>

- 2025年8月　白金心理学会研究奨励費獲得　白金心理学会．（採択題目：展望的記憶能力における個人差要因の検討――意図の想起過程，注意制御および意思決定の観点から――）

<h2 id="skills">スキル等</h2>

- R
- PsychoPy
- lab.js
