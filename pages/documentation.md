---
order: 4
layout: feature
title: Documentation
permalink: /documentation/
exclude: false
---

## Language Documention

[Scripting specification][script-doc]

[Cheatsheet][cheatsheet]

## Printing Options

{% include_relative parameters.md %}

## Tutorials, Guides & Videos

Here you will find a number of tutorials and videos on the use of IceSL. Their presentation order is based on difficulty and familiarity with the tool, hence we recommend to follow them in an orderly fashion.

We welcome community questions, corrections, suggestions and submissions for new tutorials! Please drop us a note on the forum with your contributions.

### Tutorials

<div id="main">
{% assign sorted_tutorials = site.pages | where:'categories', 'tutorial' | sort:'order' %}
<section class="posts">
{% for tutorial in sorted_tutorials %}
  <article markdown="1">
## [{{ tutorial.title }}]({{ tutorial.url | prepend: site.baseurl }})
[![]({{ tutorial.image | prepend: site.baseurl }})]({{ tutorial.url | prepend: site.baseurl }}){:.smaller}{:.image}{:.fit}

{{ tutorial.summary }}
  </article>
{% endfor %}
</section>
</div>

<br>
### Guides

<div id="main">
{% assign sorted_guides = site.pages | where:'categories', 'guide' | sort:'order' %}
<section class="posts">
{% for guide in sorted_guides %}
  <article markdown="1">
## [{{ guide.title }}]({{ guide.url | prepend: site.baseurl }})
[![]({{ guide.image | prepend: site.baseurl }})]({{ guide.url | prepend: site.baseurl }}){:.smaller}{:.image}{:.fit}

{{ guide.summary }}
  </article>
{% endfor %}
</section>
</div>

<br>
### Videos

<details  markdown="1"><summary> <b>Introduction to IceSL by Magazine DIY3DTech</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 18 minutes.

{:.video-center}
<iframe src="https://www.youtube.com/embed/nCDEOsgAt3g" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe>
<br>
</details>

<details  markdown="1"><summary> <b>IceSL SLicer - Example Using Adaptive Layer Slicing!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 12 minutes.

{:.video-center}
<iframe src="https://www.youtube.com/embed/F8oHVk1EYes" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe>
<br>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - How to do Basic Scripting in iceSL Forge!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 17 minutes.

{:.video-center}
<iframe src="https://www.youtube.com/embed/SLqUB6krQB8" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe>
<br>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - Creating Custom Printers in Windows!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 13 minutes.

{:.video-center}
<iframe src="https://www.youtube.com/embed/9TZzXn_o6zs" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe>
<br>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - How To Add Printer and Material Profiles!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 10 minutes.

{:.video-center}
<iframe src="https://www.youtube.com/embed/1GPA2BL4MX4" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe> 
<br>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - Converting an STL to SVG for a Laser or CNC Workflows!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 6 minutes. 

{:.video-center}
<iframe src="https://www.youtube.com/embed/5O9Kt09ymiI" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe> 
<br>
</details>

<details  markdown="1"><summary> <b>Parameter Painting Infill</b> </summary>
_Author: Sylvain Lefebvre (sylvain.lefebvre at inria dot fr)_

The video below demonstrates the ability of painting introduced in version **2.1.7.** It is very concise and lasts only for 1 minute. 

{:.video-center}
<iframe src="https://www.youtube.com/embed/oZ2TGFBkLMI" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe>
<br>
</details>

<details  markdown="1"><summary> <b>Introduction to IceSL version 2.1.0</b> </summary>
_Author: Sylvain Lefebvre (sylvain.lefebvre at inria dot fr)_

The following is a video introducing IceSL-slicer as an individual component of IceSL. It is intended to be a quick tour on some important features introduced in version **2.1.0.** It lasts around 5 minutes. 

{:.video-center}
<iframe src="https://www.youtube.com/embed/pMFDI5PzRMU" allowfullscreen="" height="300px" frameborder="0" width="560"></iframe>
<br>
</details>

<br>
### IceSL in other languages

- [español] [IceSL, el mejor Slicer!?](https://www.youtube.com/watch?v=zGvw4s9o8DU)
- [español] [IceSL \| Probamos un laminador 3D con opciones interesantes](https://www.youtube.com/watch?v=5-_-HdHNxm8)
- [français] [Introduction générale](http://cao.ensa-nancy.net/icesl)
- [français] [DECOUVERTE, PRESENTATION IceSL [slicer]](https://www.youtube.com/watch?v=IZaYimplBmA)
- [français] [SLICER IceSL Beta [optimiser, remplissage à l'aide de l'outil brosse]](https://www.youtube.com/watch?v=eNEZHqeN-xc)

[cheatsheet]:   ../cheatsheet/
[script-doc]:   https://gforge.inria.fr/plugins/mediawiki/wiki/icesl/index.php/Main_Page
