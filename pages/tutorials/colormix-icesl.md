---
layout: feature
order: 2
exclude: true
categories: guide
title: Color mixing with IceSL
image: /assets/img/color-mixing/10.png
summary: Step-by-step instruction on how how to use color mixing in IceSL
---

_Author: Haichuan Song (haichuansong at gmail dot com)_

The following concise step-by-step instruction on how how to use color mixing in IceSL

- In order yo use color mixing, first load a model:

[![][colormix1]{:.img-small.smaller}][colormix1]

- Choose the printer to use. Currently color-mixing is supported out-of-the-box by printers: <font face="courier">colorizer</font> and <font face="courier">prusai3-multi</font>, however you can configure your own multi-filament printer:

[![][colormix2]{:.img-small}][colormix2]

- Color mixing settings are located under the _Multi material_ separator:

[![][colormix3]{:.img-small}][colormix3]

- Click on the button _Paint mixing field between extruders_ to show the painting interface:

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][colormix4]{:.img-small.smaller}][colormix4] | [![][colormix5]{:.img-small.smaller}][colormix5]

</div>

- It is possible specify the mixing ratios between extruders for the current brush by using the three vertical colored sliders on the left side the interface. The mixing ratios are represented with different colors. On top of the interface there are additional tools for painting:

[![][colormix6]{:.img-banner}][colormix6]

- _Fill_ paints all geometry with the current mixing ratio. Painting specific parts of the geometry is also possible by using the brush (i.e. mouse pointer):

[![][colormix7]{:.img-small.smaller}][colormix7]

- To allow finer painting, enter different values in the slide bar _Brush size_:

[![][colormix8]{:.img-small.smaller}][colormix8]

- Blur smooths the color transitions of the painted parts:

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][colormix9]{:.img-small.smaller}][colormix9] | [![][colormix10]{:.img-small.smaller}][colormix10]

</div>

- By using _Clipping plane_, painting inside the model is also possible:

[![][colormix11]{:.img-small.smaller}][colormix11]

- _Close_ shuts down the painting interface, while _Discard_ deletes any painting done before. Click on _Slice!_ to produce the color-mixed gcode:

[![][colormix12]{:.img-small.smaller}][colormix12]

- Both, the printing settings and the color mixing painting can be saved and loaded via the top of the right menu.

- During printing, a transition geometry is usually necessary when switching color mixing ratios. IceSL provides two types of transition geometry: shields and prime towers. To use shields, select _Enable shield_ in settings panel. To use prime towers, select _Prime/wipe tower_ in the _Multi material_ settings. The volume of material used during transition depends on the nozzle used. Thus, settings _Number of contours on shield_ and _Volume for purging the extruder_ should accordingly change if using shields prime towers respectively.

[colormix1]:    ../../../assets/img/color-mixing/1.png
[colormix2]:    ../../../assets/img/color-mixing/2.png
[colormix3]:    ../../../assets/img/color-mixing/3.png
[colormix4]:    ../../../assets/img/color-mixing/4.png
[colormix5]:    ../../../assets/img/color-mixing/5.png
[colormix6]:    ../../../assets/img/color-mixing/6.png
[colormix7]:    ../../../assets/img/color-mixing/7.png
[colormix8]:    ../../../assets/img/color-mixing/8.png
[colormix9]:    ../../../assets/img/color-mixing/9.png
[colormix10]:   ../../../assets/img/color-mixing/10.png
[colormix11]:   ../../../assets/img/color-mixing/11.png
[colormix12]:   ../../../assets/img/color-mixing/12.png
