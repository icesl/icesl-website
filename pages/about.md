---
order: 6
layout: feature
title: About
permalink: /about/
exclude: false
---

### Contact

The best and most straightforward way to reach us is through [our forum][forum].

**Contact information:**

+ Phone: +33 3 54 95 86 53
+ e-mail: sylvain dot lefebvre at inria dot fr

<br>

____

<a id="faq"></a>
### F.A.Q.

Questions? Look here first.

1. I found a bug, have a feature request, or a model that does not print well. Who should I contact?
  + Join our [forum][forum] or contact _sylvain . lefebvre at inria.fr_ **or** _yamil - salim . perchy at inria.fr_
2. Do you provide examples?
  + Yes! IceSL comes with many examples, located in the 'icesl-models' folder. On a default install, this folder should be accessible by clicking _File_ &rarr; _Open assets folder_.
3. Can I output an STL?
  + Yes. Select a mesh export in the top right 'Service' menu (see tooltips for details). Keep in mind though that IceSL is best used slicing directly.
4. How about MacOS?
  + Unfortunately, and as far as we know, there is no support for OpenGL 4.3 under MacOS and this is required to build IceSL. Whenever OpenGL 4.3 becomes available we will work hard to release IceSL on MacOS! In the meanwhile, please use the [web version][slicecrafter].
5. Could the produced G-Code break my printer?
  + Despite all the care we take to avoid it, bad things could happen. So yes, be careful, monitor the print, especially the beginning . We've never broken a printer, but we are extra careful.
6. Text editor?
  + IceSL-forge includes a script editor while IceSL-slicer does not. Both however, monitor file changes to the Lua script file and updates the view whenever the script changes.
7. Do I need a powerful computer?
  + See the system requirements in the [download][download] section.
8. So if IceSL is free, does that mean I can do whatever I want with it?
  + See the license below.

<br>

____

### License
<sup>_Free for research purposes_</sup>

IceSL is free for research purposes (contact us for all other cases). The full license text is [here][license].

{:.text-justify}
We kindly as you to cite our work and IceSL in your publications (e.g., paper, web page, blog, source code, etc.). If you implement features similar to those introduced in IceSL to your slicer, please also acknowledge IceSL (or the corresponding publication) as the source of inspiration. This is very important for us to get funding and/or support and continue our research. 

<br>

____

### Staff

<table class="centerTable">
<tr style="border-bottom:1px solid black;">
  <th class="rightLineCell">Developers</th>
  <th class="rightLineCell">Past developers</th>
  <th>Contributors</th>
</tr>
<tr>
  <td class="rightLineCell"><a href="http://www.antexel.com/research">Sylvain Lefebvre</a><sup>1</sup></td>
  <td class="rightLineCell"><a href="http://www.xlim.fr/personnel/claux-frederic">Frédéric Claux</a></td>
  <td>Jimmy Etienne</td>
</tr>
<tr>
  <td class="rightLineCell"><a href="https://members.loria.fr/sperchy">Salim Perchy</a><sup>2</sup></td>
  <td class="rightLineCell"></td>
  <td><a href="https://www.instagram.com/pa_hugron/">Pierre-Alexandre Hugron</a></td>
</tr>
<tr>
  <td class="rightLineCell"><a href="https://members.loria.fr/czanni">Cédric Zanni<sup>3</sup></a></td>
  <td class="rightLineCell"></td>
  <td>Haichuan Song</td>
</tr>
<tr>
  <td class="rightLineCell">Pierre Bedell<sup>4</sup></td>
  <td class="rightLineCell"></td>
  <td><a href="http://thibaulttricard.fr/">Thibault Tricard</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td><a href="http://webloria.loria.fr/~jhergel">Jean Hergel</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td><a href="https://www.jdumas.org/">Jérémie Dumas</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td><a href="https://sites.google.com/site/jonasmartinezbayona">Jonàs Martínez</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td><a href="http://www.loria.fr/~shornus">Samuel Hornus</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Noémie Vennin</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Denis Salem</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Charles Helbing</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Charles Helbing</td>
</tr>
</table>
<sup>1. Creator, lead, coding, support, testing.</sup><br>
<sup>2. Coding, support, testing, documentation, localization, website.</sup><br>
<sup>3. Additional rendering and UI code.</sup><br>
<sup>4. Additional slicing code, print testing, printer profile management and support.</sup>

**Acknowledgements:**<a id="acknowledgements"></a>

This work is supported by ERC grant ShapeForge (StG-2012-307877)

[Slicecrafter][slicecrafter] is powered by [Emscripten][emscripten].

IceSL uses [ImGUI][imgui] for UI elements, [Clipper][clipper] for 2D geometry processing, [Asio][asio] for update notifications, [Eigen][eigen] for some math calulations as well as [TinyXML][tinyxml] for xml parsing, [NanoSVG][nano-svg] for svg parsing and [STBtruetype][stb-truetype] for ttf manipulation.

IceSL uses font [Cousine-Regular][font-reg] by Steve Matteson under the [Apache License v.2][apache-license] and font [Noto Sans CJK][font-ch] by Google Inc. under the [SIL Open Font License][ofl-license].


[forum]:          https://groups.google.com/forum/#!forum/{{site.google}}
[license]:        ../assets/pdf/EULA_IceSL_binary.pdf
[apache-license]: http://www.apache.org/licenses/LICENSE-2.0
[ofl-license]:    http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL
[slicecrafter]:   ../slicecrafter/
[download]:       ../download/

[emscripten]:     http://kripken.github.io/emscripten-site/
[imgui]:          https://github.com/ocornut/imgui
[clipper]:        http://www.angusj.com/delphi/clipper.php
[eigen]:          http://manao.inria.fr/eigen/
[asio]:           https://think-async.com/
[tinyxml]:        http://www.grinninglizard.com/tinyxml/
[stb-truetype]:   https://github.com/nothings/stb
[nano-svg]:       https://github.com/memononen/nanosvg
[font-reg]:       https://fonts.google.com/specimen/Cousine
[font-ch]:        https://www.google.com/get/noto/help/cjk/

[sylvain]:      http://www.antexel.com/research
[salim]:        https://members.loria.fr/sperchy
[frederic]:     http://www.xlim.fr/personnel/claux-frederic
[jimmy]:        http://shapeforge.loria.fr/icesl
[noemie]:       http://shapeforge.loria.fr/icesl
[jean]:         http://webloria.loria.fr/~jhergel
[jeremy]:       https://www.jdumas.org
[jonas]:        https://sites.google.com/site/jonasmartinezbayona
[samuel]:       https://members.loria.fr/samuel.hornus/
[haichuan]:     http://shapeforge.loria.fr/icesl
[denis]:        http://shapeforge.loria.fr/icesl
[guillaume]:    http://shapeforge.loria.fr/icesl
[charles]:      http://shapeforge.loria.fr/icesl
