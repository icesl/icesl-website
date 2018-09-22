---
layout: page
title: Features
description: Discover the features of IceSL
sitemap:
    priority: 0.7
    lastmod: 2018-09-21
    changefreq: weekly
---

<div id="main">

{% assign sorted_features = site.pages | where:'categories', 'feature' | sort:'order' %}

<section class="posts">
{% for post in sorted_features limit:3 %}
  <article>
  <header>
  <h2><a href="{{ post.url | absolute_url }}">{{ post.title }}</a></h2>
  </header>
  <a href="{{ post.url | absolute_url }}" class="image fit"><img src="{{ post.image | absolute_url }}" alt="" /></a>
  <p>{{ post.excerpt }}</p>
  <ul class="actions">
  <li><a href="{{ post.url | absolute_url }}" class="button">Full Story</a></li>
  </ul>
  </article>
{% endfor %}
</section>

</div>