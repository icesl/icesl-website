---
order: 1
layout: feature
title: Features
permalink: /features/
exclude: false
---

### Overview

{% for page in site.pages %}
  {% if page.categories contains 'download' %}

{:.text-justify}
Our aim is to make our latest research in modeling and slicing available as quickly as possible, in powerful yet accessible software. It integrates several ground breaking ideas that our team developed over the years, such as cubic/tetrahedral infills, bridge support structures, optimal adaptive layer thickness optimization, progressive infills, efficient offsetting, tight protective shields, maximal self-supporting cavities, and advanced path planning for dual-color printing<sup>1</sup>. Several of these features have inspired other slicers. Why wait? You can benefit from latest advances right now in IceSL! (and it is free, see our license).

IceSL core technology is exposed through three different software:

{:.text-justify}
- [**IceSL-forge**]({{ page.url | prepend: site.baseurl }}) is the most complete and powerful software. It combines modeling and slicing and gives unprecedented flexibility for modeling and fabricating complex, customizable shapes. Modeling is done through scripting with a Lua-based language that allows to describe boolean combinations of shapes (triangle meshes, voxels, implicit surfaces, shaders). Thanks to state of the art rendering technology, all operations are performed interactively with real-time feedback , allowing interactive customization of model parameters. The same technology enables efficient slicing and generation of printer instructions (e.g. G-code), avoiding the expensive step of producing a mesh. Nothing stands between your model and your printer!

{:.text-justify}
- [**IceSL-slicer**]({{ page.url | prepend: site.baseurl }}) focuses on slicing. Given a 3D model (e.g. STL), it will use our slicing technology to generate instructions for your printer (G-code, but also images for DLP printers and cutting paths for laser cutters).

{:.text-justify}
- [**SliceCrafter**][slicecrafter] is an online version of our slicing technology. It is less powerful than IceSL-slicer, but runs entirely from within a web browser.

<sup>1. Cavities, and multi-color optimizations are available in version 1.x only. They'll come back soon, better and more powerful.</sup>

  {% endif %}
{% endfor %}

___

### Key Features

{% assign sorted_features = (site.pages | where:'categories', 'feature') | sort:'order' %}
{% for feature in sorted_features %}

<details markdown="1"><summary> <b>{{ feature.title }}</b> </summary>
<br>
  {{ feature.content }}
</details>

{% endfor %}

[slicecrafter]:   ../slicecrafter/
