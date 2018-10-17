---
layout: feature
order: 10
exclude: true
categories: feature
title: Better dual color prints
image: /assets/img/dualcolor.jpg
summary: Clean color algorithm to improve multi-filament print quality
---

<sup>**Note**: this feature is not yet implemented in 2.x, but is in 1.x.<sup>

Our clean color algorithm takes several steps towards improving multi-filament print quality. It first orients the print so as to minimize interference between nozzles, and then uses a special travel move optimizer to reduce ooze deposition.

[![][dual-color]{:.img-small.smaller}][dual-color]

{:.caption3}
<sup>**Left**: Printing without any optimization. **Middle**: with ooze shield only (see above). **Right**: with azimuth optimization and optimized travel moves. This test is using the [#3DBenchy][benchy-model] benchmark.</sup>

Publication:
 - [Clean color: Improving multi-filament 3D prints][dualcolor-paper]
 - Jean Hergel, Sylvain Lefebvre
 - Computer Graphics Forum (Eurographics) 2014


[benchy-model]:     http://www.3dbenchy.com/
[dual-color]:       ../../../assets/img/dualcolor.jpg
[dualcolor-paper]:  http://www.texelmancy.net/jhergel/pdfs/cleanColor.pdf
