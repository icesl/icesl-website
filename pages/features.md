---
order: 1
layout: feature
title: Features
permalink: /features/
exclude: false
---

___

### Key Features

<div id="main">
{% assign sorted_features = site.pages | where:'categories', 'feature' | sort:'order' %}
<section class="posts">
{% for feature in sorted_features %}
  <article markdown="1">
## [{{ feature.title }}]({{ feature.url | prepend: site.baseurl }})
[![]({{ feature.image | prepend: site.baseurl }})]({{ feature.url | prepend: site.baseurl }}){:.smaller}{:.image}{:.fit}

{{ feature.summary }}
  </article>
{% endfor %}
</section>
</div>
