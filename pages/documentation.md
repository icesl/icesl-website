---
order: 6
layout: feature
title: Documentation
permalink: /documentation/
exclude: false
---

<div id="main">
<section class="posts">

  <article markdown="1">
## [Scripting language][script-doc]
[![]({{ '/assets/img/scripting.png' | prepend: site.baseurl }})][script-doc]{:.smaller}{:.image}{:.fit}
Complete specification of the IceSL scripting language. Includes examples
  </article>

  <article markdown="1">
## [Printer profiles][profile-doc]
[![]({{ '/assets/img/profiles.png' | prepend: site.baseurl }})][profile-doc]{:.smaller}{:.image}{:.fit}
Technical documentation of printer profiles in IceSL and their components
  </article>

<article markdown="1">
## [Plugin system][plugins-doc]
[![]({{ '/assets/img/plugins.png' | prepend: site.baseurl }})][plugins-doc]{:.smaller}{:.image}{:.fit}
IceSL plugin system specification. Includes how to set up a framework and samples with explanation
  </article>

  <article markdown="1">
## [Python module][pyicesl-doc]
[![]({{ '/assets/img/pyicesl.png' | prepend: site.baseurl }})][pyicesl-doc]{:.smaller}{:.image}{:.fit}
Pyicesl documentation. Complete specification of IceSL's python bindings
  </article>

  <article markdown="1">
## [Printing settings][parameters]
[![]({{ '/assets/img/settings.png' | prepend: site.baseurl }})][parameters]{:.smaller}{:.image}{:.fit}
Exhaustive list of printing and slicing settings in IceSL
  </article>

  <article markdown="1">
## [Scripting cheatsheet][cheatsheet]
[![]({{ '/assets/img/cheatsheet.png' | prepend: site.baseurl }})][cheatsheet]{:.smaller}{:.image}{:.fit}
Cheatsheet of IceSL's scripting language
  </article>

</section>
</div>

<br>
## Tutorials, Guides & Videos

Here you will find a number of tutorials and videos on the use of IceSL. Their presentation order is based on difficulty and familiarity with the tool, hence we recommend to follow them in an orderly fashion.

We welcome community questions, corrections, suggestions and submissions for new tutorials! Please drop us a note on the [forum][forum] with your contributions.

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

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/nCDEOsgAt3g" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - Example Using Adaptive Layer Slicing!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 12 minutes.

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/F8oHVk1EYes" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - How to do Basic Scripting in iceSL Forge!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 17 minutes.

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/SLqUB6krQB8" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - Creating Custom Printers in Windows!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 13 minutes.

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/9TZzXn_o6zs" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - How To Add Printer and Material Profiles!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 10 minutes.

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/1GPA2BL4MX4" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>IceSL Slicer - Converting an STL to SVG for a Laser or CNC Workflows!</b> </summary>
_Author: DIY3DTech -- [http://diy3dtech.com/](http://diy3dtech.com/)_

Video duration: 6 minutes. 

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/5O9Kt09ymiI" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>Parameter Painting Infill</b> </summary>
_Author: Sylvain Lefebvre (sylvain.lefebvre at inria dot fr)_

The video below demonstrates the ability of painting introduced in version **2.1.7.** It is very concise and lasts only for 1 minute. 

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/oZ2TGFBkLMI" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>Introduction to IceSL version 2.3.4</b> </summary>
_Author: Technivorous 3dprinting -- [YouTube channel](https://www.youtube.com/channel/UCuMbDfVJqY4XnWbTUmH3AmQ)_

This video was created with the purpose of a quick show-off of various capabilities of IceSL version 2.3.4. Duration is close to 20 minutes.

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/p4jI7fqBwXw" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<details  markdown="1"><summary> <b>Introduction to IceSL version 2.1.0</b> </summary>
_Author: Sylvain Lefebvre (sylvain.lefebvre at inria dot fr)_

The following is a video introducing IceSL-slicer as an individual component of IceSL. It is intended to be a quick tour on some important features introduced in version **2.1.0.** It lasts around 5 minutes. 

<div markdown="1" class="video-container">
{:.video-center}
<iframe src="https://www.youtube.com/embed/pMFDI5PzRMU" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>
</details>

<br>
### IceSL in other languages

- [español] [IceSL, el mejor Slicer!?](https://www.youtube.com/watch?v=zGvw4s9o8DU)
- [español] [IceSL \| Probamos un laminador 3D con opciones interesantes](https://www.youtube.com/watch?v=5-_-HdHNxm8)
- [français] [Introduction générale](http://cao.ensa-nancy.net/icesl)
- [français] [DECOUVERTE, PRESENTATION IceSL [slicer]](https://www.youtube.com/watch?v=IZaYimplBmA)
- [français] [SLICER IceSL Beta [optimiser, remplissage à l'aide de l'outil brosse]](https://www.youtube.com/watch?v=eNEZHqeN-xc)

[cheatsheet]:   ../cheatsheet/
[parameters]:   ../parameters/
[script-doc]:   https://gitlab.inria.fr/mfx/icesl-documentation/wikis/Scripting-language
[profile-doc]:  https://gitlab.inria.fr/mfx/icesl-documentation/wikis/Printer-profile
[plugins-doc]:  https://gitlab.inria.fr/mfx/icesl-documentation/wikis/Plugin-system
[pyicesl-doc]:  https://gitlab.inria.fr/mfx/icesl-documentation/-/wikis/Python-module
[forum]:        https://groups.google.com/forum/#!forum/{{site.google}}
