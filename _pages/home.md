---
exclude: true
categories: home
---

![][banner]{:.img-banner}
##### _Slicing at the cutting edge of research._

{% for page in site.pages %}
  {% if page.categories contains 'download' %}

{:.text-justify}
IceSL is a state of the art slicer (STL &rarr; G-code) with advanced modeling capabilities. [Download it now]({{ page.url | prepend: site.baseurl }}), or try its [online version][slicecrafter].

  {% endif %}
{% endfor %}

<br>

<div align="center">
<a class="twitter-timeline" data-theme="light" data-width="50%" data-height="700px" href="https://twitter.com/iceslapp">Twitter feed</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

[banner]:         ../assets/img/banner2.jpeg
