---
order: 2
layout: feature
title: Download
permalink: /download/
exclude: false
categories: download
---

{% assign show_past_versions = false %}
{% assign beta_available = true %}

{% assign beta_version = site.data.version.beta %}
{% assign stable_version = site.data.version.stable %}


IceSL is available for both Windows and Linux Systems.
If you want to experiment with the latest features, give the beta release a try !

See the [changelog][changelog] for more details on what's new.

### IceSL for Windows

The packages bellow contain both IceSL-forge and IceSL-slicer for Windows:

{% if beta_available %}
[IceSL {{beta_version}} Windows 64 bits][icesl-win64-beta]{:.button.big}{:.button-big}

[IceSL {{stable_version}} Windows 64 bits][icesl-win64-stable]{:.button.big}{:.button-half} [IceSL {{stable_version}} Windows 32 bits][icesl-win32-stable]{:.button.big}{:.button-half}
{% else %}
[IceSL {{stable_version}} Windows 64 bits][icesl-win64-stable]{:.button.fit}{:.button.big} [IceSL {{stable_version}} Windows 32 bits][icesl-win32-stable]{:.button.fit}{:.button.small}
{% endif %}

___

### IceSL for Linux

The packages below contain IceSL-slicer for Linux:

{% if beta_available %}
[IceSL {{beta_version}} Linux 64 bits][icesl-linux64-beta]{:.button.big}{:.button-big}

[IceSL {{stable_version}} Linux 64 bits][icesl-linux64-stable]{:.button.big}{:.button-half} [IceSL {{stable_version}} Linux 32 bits][icesl-linux32-stable]{:.button.big}{:.button-half}
{% else %}
[IceSL {{stable_version}} Linux 64 bits][icesl-linux64-stable]{:.button.fit}{:.button.big} [IceSL {{stable_version}} Linux 32 bits][icesl-linux32-stable]{:.button.fit}{:.button.small}
{% endif %}

____

### Overview

{% for page in site.pages %}
  {% if page.categories contains 'download' %}

{:.text-justify}
Our aim is to make our latest research in modeling and slicing available as quickly as possible in a powerful yet accessible software. It integrates several ground breaking ideas that our team developed over the years, such as cubic/tetrahedral infills, bridge support structures, optimal adaptive layer thickness optimization, progressive infills, efficient offsetting, tight protective shields, and maximal self-supporting cavities. Several of these features have inspired other slicers. Why wait? You can benefit from the latest advances right now in IceSL! (and it is free, see our license).

IceSL's core technology is exposed through four different software:

{:.text-justify}
- **IceSL-forge** is the most complete and powerful software. It combines modeling and slicing and gives unprecedented flexibility for modeling and fabricating complex, customizable shapes. Modeling is done through scripting with a Lua-based language that allows to describe boolean combinations of shapes (triangle meshes, voxels, implicit surfaces, shaders). Thanks to state of the art rendering technology, all operations are performed interactively with real-time feedback allowing interactive customization of model parameters. The same technology enables efficient slicing and generation of printer instructions (e.g. G-code), avoiding the expensive step of producing a mesh. Nothing stands between your model and your printer!

{:.text-justify}
- **IceSL-slicer** focuses on slicing. Given a 3D model (e.g. STL) or a geometry script (i.e. lua), it will use our slicing technology to generate instructions for your printer (G-code, but also images for DLP printers and cutting paths for laser cutters).

{:.text-justify}
- [**SliceCrafter**][slicecrafter] is an online version of our slicing technology. It is less powerful than IceSL-slicer, but runs entirely from within a web browser.

{:.text-justify}
- [**WebPrinter**][webprinter] is an online gcode previewer. It emulates a 3D printer as it executes user specified gcode.

  {% endif %}
{% endfor %}

____

### FAQ

What is the **_"IceSL-forge"_** component that is included in the Windows installer?
: _IceSL-forge_ is a special version of IceSL that includes a native **scripting editor** for more streamlined use when modeling.

<br>
How to model on Linux without IceSL-forge ?
: IceSL-slicer can load lua scripts as well, and constantly monitors changes to the script. Therefore, you can use your favorite editor to work on a script opened in IceSL-slicer and it will be immediately updated whenever the file is saved.

<br>
What are the differences between the normal and beta version?
: Beta versions are intended to experiment new features prior to release. Everything in beta is subject to change and new features may be unstable. Normal versions are packing all the features tested during the previous beta.

____

### Known instalation problems

- During installation, if you get the message **_An error occurred while installing system components for IceSL_** [(see example)][install-error], please uninstall **_Microsoft Visual C++ 2017/2019 Redistributable (x64/x86)_**. IceSL will reinstall this package.
- During installation, the Visual Studio redistributable installation sometimes reboots the computer without a warning prompt or message. This only happens the first time you install IceSL, and only if the Visual Studio redistributable is necessary.
- We have had reports of Windows Defender rejecting the download of the above installers. We have contacted Microsoft and this has been fixed. If you encounter any problem downloading the file, [please let us know][contact].

____

### System Requirements

{:.text-justify}
Please make sure to install the latest drivers for your GPUs. This solves most of the cases where IceSL does not run or crashes. IceSL requires a GPU with full OpenGL 4.3 support.

It has been tested on the following hardware:
- GeForce GTX 480 / 580 / 680 / 970 / Titan / 1080
- GeForce RTX 2080 Ti / 4080
- GeForce GT 555M / 610M (_nouveau_ driver) / GTX 1660 Ti Mobile
- Intel HD Graphics 630, 4600, 4400, 4000<sup>*</sup>
- AMD Radeon 290X / RX570

<sup>Note: Although Intel HD Graphics 4000 does not fully support OpenGL 4.3, it does support the features needed by IceSL through extensions.</sup>

And in the following OS's:
- Windows 7/10 64 bits
- Debian stable/testing 64 bits
- Ubuntu LTS 64 bits

In case you don't meet the system requirements you can opt to use the [online version][slicecrafter] of IceSL.

___

#### IceSL 32 bits versions

{:.text-justify}
In order to speed up updates to IceSL, we are officially discontinuing 32 bits installers from beta versions of IceSL. If you _really_ need a 32 bits build of the current beta version to run IceSL on your computer, we ask you to [contact us][contact].

{% if show_past_versions %}
#### IceSL older versions

Older versions are available from our archives:

- [Older releases][icesl-releases]
{% endif %}

[slicecrafter]:         ../slicecrafter/
[webprinter]:           ../webprinter/
[contact]:              ../about/
[changelog]:            ../assets/other/changelog.txt
[install-error]:        ../assets/img/install-error.png

[icesl-win64-beta]:     ../assets/other/download.php?build={{beta_version}}&version=beta&os=x64
[icesl-linux64-beta]:   ../assets/other/download.php?build={{beta_version}}&version=beta&os=amd64

[icesl-win64-stable]:   ../assets/other/download.php?build={{stable_version}}&version=stable&os=x64
[icesl-win32-stable]:   ../assets/other/download.php?build={{stable_version}}&version=stable&os=x86

[icesl-releases]:       https://gforge.inria.fr/frs/?group_id=4731

[icesl-linux64-stable]: ../assets/other/download.php?build={{stable_version}}&version=stable&os=amd64
[icesl-linux32-stable]: ../assets/other/download.php?build={{stable_version}}&version=stable&os=i386
