---
layout: page
title: Features
description: Discover the features of IceSL
sitemap:
    priority: 0.7
    lastmod: 2018-09-21
    changefreq: weekly
---
### Overview

{:.text-justify}
Our aim is to make our latest research in modeling and slicing available as quickly as possible, in powerful yet accessible software. It integrates several ground breaking ideas that our team developed over the years, such as cubic/tetrahedral infills, bridge support structures, optimal adaptive layer thickness optimization, progressive infills, efficient offsetting, tight protective shields, maximal self-supporting cavities, and advanced path planning for dual-color printing<sup>1</sup>. Several of these features have inspired other slicers. Why wait? You can benefit from latest advances right now in IceSL! (and it is free, see our license).

IceSL core technology is exposed through three different software:

{:.text-justify}
<a href="{{ page.url | prepend: site.baseurl }}" class="button">IceSL-forge</a> &nbsp; is the most complete and powerful software. It combines modeling and slicing and gives unprecedented flexibility for modeling and fabricating complex, customizable shapes. Modeling is done through scripting with a Lua-based language that allows to describe boolean combinations of shapes (triangle meshes, voxels, implicit surfaces, shaders). Thanks to state of the art rendering technology, all operations are performed interactively with real-time feedback , allowing interactive customization of model parameters. The same technology enables efficient slicing and generation of printer instructions (e.g. G-code), avoiding the expensive step of producing a mesh. Nothing stands between your model and your printer!

{:.text-justify}
<a href="{{ page.url | prepend: site.baseurl }}" class="button">IceSL-slicer</a> 
&nbsp; focuses on slicing. Given a 3D model (e.g. STL), it will use our slicing technology to generate instructions for your printer (G-code, but also images for DLP printers and cutting paths for laser cutters).

{:.text-justify}
<a href="{{ page.url | prepend: site.baseurl }}" class="button">Slicecrafter</a> &nbsp; is an online version of our slicing technology. It is less powerful than IceSL-slicer, but runs entirely from within a web browser.

### Key Features

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