---
layout: feature
order: 1
exclude: true
categories: tutorial
title: Installing IceSL and Slicing a model
image: /assets/img/tutorial1/07.png
summary: Install IceSL, run it, load a pre-made model and slice it
---

_Author: Salim Perchy (yamil-salim.perchy at inria dot fr)_

Welcome to the first tutorial of IceSL. Here you will install IceSL, run it, load a pre-made model and slice it. This tutorial is estimated to be completed in _5 minutes._

- Go to the official IceSL website and click on the **download** section. Locate and click on the IceSL windows installer <font face="courier">(i.e. icesl-setup.exe)</font> and open it once it's downloaded:

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][tutorial1-img1]{:.img-small.smaller}][tutorial1-img1]

</div>

<br>

- Proceed with the installation by accepting the end user agreement and selecting the installation directory. Once it's finalized, click on close:

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][tutorial1-img2]{:.img-small.smaller}][tutorial1-img2] | [![][tutorial1-img3]{:.img-small.smaller}][tutorial1-img3] | [![][tutorial1-img4]{:.img-small.smaller}][tutorial1-img4]

</div>

<br>

- Open the IceSL application from the start menu. You will see the main IceSL window that is made of three parts:
    1. The **Visualization Area** on the middle. Here you can preview and select objects from the scene being modeled.
    2. The **Printer Parameters** on the right. Here you can modify important parameters such as the printer, slicing options and so on.
    3. The **Lua Editor** on the left. Here you can use a lua-based scripting language to model or alter the shape of the object being modeled.

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][tutorial1-img5]{:.img-small.smaller}][tutorial1-img5]

</div>

<br>

- We shall visualize a pre-made object contained in the installation of IceSL. For this, click on the file menu and select the option open (or simply press ctrl+O), if you are prompted to save changes click on no. Locate and select the file <font face="courier">Rose.lua</font><sup>1</sup> inside the <font face="courier">%APPDATA%\Roaming\IceSL\icesl-models\</font> folder:

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][tutorial1-img6]{:.img-small.smaller}][tutorial1-img6]

</div>

<br>

- As soon as the scene is visualized you can interactively preview it by selecting an object (left-click) and holding down the button while moving the mouse pointer. Also, you can zoom in and out of the scene holding down the middle button and moving the pointer. Once you're ready to print, select your 3D printer from the **printer** drop-down menu on the Printer Parameters (left part of the main window). Click on the **slice** button and save the resulting G-code file on your documents folder:

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][tutorial1-img7]{:.img-small.smaller}][tutorial1-img7] | [![][tutorial1-img8]{:.img-small.smaller}][tutorial1-img8]

</div>

<br>

- That's it, you're done! You can now use the resulting G-code file on your 3D printing software . As a convenient extra, after slicing the object IceSL pops up a window where you can visualize every layer of the slice result using the upper scroll bar. Additionally, you can see the layers from different angles proceeding similarly as in the last step.

<div markdown="1" class="noBorderNoBackground">
{:.table-center}
[![][tutorial1-img9]{:.img-small.smaller}][tutorial1-img9]

</div>

<br>

_Exercise!_

1. Try to visualize a smaller version of the rose shape. (TIP: once you load the <font face="courier">Rose.lua</font> file, try to spot a scale specification in the Lua Editor)
2. Try loading your favorite model. There's currently two ways of doing this:
    1. Create a new scene (File &rarr; New), and load directly the model (File &rarr; Import). Try it with the rose leaves (i.e. <font face="courier">Rose_Leaves.stl</font>) from the Lua script used in this tutorial and see the difference!
    2. Create a new scene (File &rarr; New) and write in the Lua Editor the command to load a shape. (TIP: take a close look on how the lua commands emit and load from the font <face="courier">Rose.lua<font> file are used)

<sup>1. 3D models used in <font face="courier">Rose.lua</font> made by user _Bob\_East_ from [thingiverse][thingy-model] licensed under [CC BY-SA 3.0][cc30-license]</sup>

[tutorial1-img1]:   ../../../assets/img/tutorial1/01.png
[tutorial1-img2]:   ../../../assets/img/tutorial1/02.png
[tutorial1-img3]:   ../../../assets/img/tutorial1/03.png
[tutorial1-img4]:   ../../../assets/img/tutorial1/04.png
[tutorial1-img5]:   ../../../assets/img/tutorial1/05.png
[tutorial1-img6]:   ../../../assets/img/tutorial1/06.png
[tutorial1-img7]:   ../../../assets/img/tutorial1/07.png
[tutorial1-img8]:   ../../../assets/img/tutorial1/08.png
[tutorial1-img9]:   ../../../assets/img/tutorial1/09.png
[thingy-model]:     http://www.thingiverse.com/thing:26417
[cc30-license]:     https://creativecommons.org/licenses/by-sa/3.0/

