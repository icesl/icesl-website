---
order: 6
layout: default
title: F.A.Q.
permalink: /faq/
exclude: true
---

### F.A.Q.

Questions? Look here first.

- I found a bug, have a feature request, or a model that does not print well. Who to contact?
  + The best is to join our [forum][forum] or to contact sylvain dot lefebvre at inria dot fr.
- Do you provide examples?
  + Yes! IceSL comes with many examples, located in the 'models' folder. On a default install this would be in %app_data%/icesl-models.
- Can I output an STL?
  + Yes. Select a mesh export in the top right 'Service' menu (see tooltips for details). A better mesh export is in progress. Keep in mind though that IceSL is best used to slice directly.
- How about MacOS?
  + Unfortunately, and as far as we know, there is no support for OpenGL 4.2 under MacOS and we need this to port IceSL. If OpenGL 4.2 becomes available we will work hard to port IceSL to Mac!
- Could the produced G-Code break my printer?
  + Despite all the care we take to avoid it, bad things could happen, yes. So be careful, monitor the print, especially the start. We never broke our printers, but we are extra careful.
- Text editor?
  + IceSL-forge now includes a script editor. IceSL-vanilla continues to monitor file changes to the Lua script file and updates the view whenever the script changes.
- Do I need a powerful computer?
  + See System Requirements below
- So if IceSL is free, does that mean I can do whatever I want with it?
  + See License below

____
<br>
### License
<sup>_Free for research purposes_</sup>

IceSL is free for research purposes (contact us for all other cases). The full license text is [here][license].

{:.text-justify}
We kindly as you to cite our work and IceSL in your publications (paper, web page, blog, source code, etc.). If you implement features similar to those introduced in IceSL to your slicer, please also acknowledge IceSL (or the corresponding publication) as the source of inspiration. This is very important for us to get support and continue our research. 

____
<br>
### System Requirements

{:.text-justify}
Please make sure to install the latest drivers for your GPUs. This solves 90% of the cases where IceSL does not run. IceSL requires a GPU with full OpenGL 4.3 support. It has been tested on the following hardwareand OS's:

- GeForce GTX 480 / 580 / 680 / 970 / Titan / GTX 1080
- GeForce GT 555M / 610M (nouveau driver)
- Intel HD Graphics 4400, 4600
- AMD Radeon 290X
- Windows 7/10 64 bits
- Debian stable/testing 64 bits

[forum]:    https://groups.google.com/forum/#!forum/icesl
[license]:  ../assets/pdf/EULA_IceSL_binary.pdf
