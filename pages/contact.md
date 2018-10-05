---
order: 6
layout: feature
title: Contact
permalink: /contact/
exclude: false
---

### F.A.Q.

Questions? Look here first.

- I found a bug, have a feature request, or a model that does not print well. Who should I contact?
  + The best is to join our [forum][forum] or to contact _sylvain . lefebvre at inria.fr_ **or** _yamil - salim . perchy at inria.fr_
- Do you provide examples?
  + Yes! IceSL comes with many examples, located in the 'icesl-models' folder. On a default install, this folder should be accessible by clicking _File_ &rarr; _Open assets folder_.
- Can I output an STL?
  + Yes. Select a mesh export in the top right 'Service' menu (see tooltips for details). Keep in mind though that IceSL is best used slicing directly.
- How about MacOS?
  + Unfortunately, and as far as we know, there is no support for OpenGL 4.2 under MacOS and we need this to port IceSL. If OpenGL 4.2 becomes available we will work hard to port IceSL to Mac!
- Could the produced G-Code break my printer?
  + Despite all the care we take to avoid it, bad things could happen. So yes, be careful, monitor the print, especially the start. We've never broken a printer, but we are extra careful.
- Text editor?
  + IceSL-forge includes a script editor while IceSL-slicer does not. Both however, monitor file changes to the Lua script file and updates the view whenever the script changes.
- Do I need a powerful computer?
  + See below the system requirements.
- So if IceSL is free, does that mean I can do whatever I want with it?
  + See the license below.

<br>

____

### License
<sup>_Free for research purposes_</sup>

IceSL is free for research purposes (contact us for all other cases). The full license text is [here][license].

{:.text-justify}
We kindly as you to cite our work and IceSL in your publications (e.g., paper, web page, blog, source code, etc.). If you implement features similar to those introduced in IceSL to your slicer, please also acknowledge IceSL (or the corresponding publication) as the source of inspiration. This is very important for us to get support and continue our research. 

<br>

____

### System Requirements

{:.text-justify}
Please make sure to install the latest drivers for your GPUs. This solves 90% of the cases where IceSL does not run or crashes. IceSL requires a GPU with full OpenGL 4.3 support.

It has been tested on the following hardware:
- GeForce GTX 480 / 580 / 680 / 970 / Titan / GTX 1080
- GeForce GT 555M / 610M (nouveau driver)
- Intel HD Graphics 4400, 4600
- AMD Radeon 290X

And in the following OS's:
- Windows 7/10 64 bits
- Debian stable/testing 64 bits

<br>

____


**Contact information:**

+ Phone: +33 3 54 95 86 53
+ e-mail: sylvain dot lefebvre at inria dot fr

<br>
**Staff:**

<table class="centerTable">
<tr style="border-bottom:1px solid black">
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
  <td><a href="https://members.loria.fr/czanni">Cédric Zanni</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Noémie Vennin</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td><a href="http://webloria.loria.fr/~jhergel">Jean Hergel</a></td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td><a href="http://www.loria.fr/~jdumas">Jérémie Dumas</a></td>
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
  <td>Haichuan Song</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Denis Salem</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Guillaume Devoille</td>
</tr>
<tr>
  <td class="rightLineCell"></td>
  <td class="rightLineCell"></td>
  <td>Charles Helbing</td>
</tr>
</table>
<sup>1. Creator, lead.</sup><br>
<sup>2. Support, testing, localization.</sup>

**Acknowledgements:**

This work is supported by ERC grant ShapeForge (StG-2012-307877)



[forum]:    https://groups.google.com/forum/#!forum/icesl
[license]:  ../assets/pdf/EULA_IceSL_binary.pdf

[sylvain]:      http://www.antexel.com/research
[salim]:        https://members.loria.fr/sperchy
[frederic]:     http://www.xlim.fr/personnel/claux-frederic
[jimmy]:        http://shapeforge.loria.fr/icesl
[noemie]:       http://shapeforge.loria.fr/icesl
[jean]:         http://webloria.loria.fr/~jhergel
[jeremy]:       http://www.loria.fr/~jdumas
[jonas]:        https://sites.google.com/site/jonasmartinezbayona
[samuel]:       http://www.loria.fr/~shornus
[haichuan]:     http://shapeforge.loria.fr/icesl
[denis]:        http://shapeforge.loria.fr/icesl
[guillaume]:    http://shapeforge.loria.fr/icesl
[charles]:      http://shapeforge.loria.fr/icesl
