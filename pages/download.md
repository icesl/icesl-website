---
order: 2
layout: feature
title: Download
permalink: /download/
exclude: false
categories: download
---

### **IceSL stable versions:**

The packages bellow contain both IceSL-forge and IceSL-slicer for Windows<sup>*</sup>:

<sup>* Before you install: During its installation the Visual Studio redistributable package sometimes asks Windows to reboot the computer without warning. This may only happen the first time you install, and only if the redistribuable package is necessary.</sup>

- [IceSL 2.2.1 Windows 64 bits][icesl-win64-stable]

- [IceSL 2.2.1 Windows 32 bits][icesl-win32-stable]

{:.text-justify}
We have had reports of Windows Defender rejecting the download of the above installers. We have contacted Microsoft and this has been fixed. If you encounter any problem with downloading the file, please [let us know][contact].

The packages below contain IceSL-slicer for Linux<sup>*</sup>:

- [IceSL 2.2.1 Linux 64 bits][icesl-linux64-stable]

- [IceSL 2.2.0 Linux 32 bits][icesl-linux32-stable]

See the [changelog][changelog].

<sup> * Modeling on Linux: IceSL-slicer can load lua scripts as well, and constantly monitors changes to the script. Therefore, you can use your favorite editor to edit a script opened in IceSL-slicer; the view will be immediately updated whenever the file is saved.</sup>

___

### **IceSL beta versions:**

Experiment with the latest features!

{:.text-justify}
Beta versions are intended to experiment new features prior to release. Everything in beta is subject to change and new features may be unstable. Beta versions are released for 64 bits only.

[//]: # (- No beta version yet for next release.)

- [IceSL 2.3-beta1 Windows 64 bits][icesl-win64-beta]

- [IceSL 2.3-beta1 Linux 64 bits][icesl-linux64-beta]

___

#### **IceSL 32 bits versions:**

{:.text-justify}
In order to speed up updates to IceSL, we are officially discontinuing 32 bits installers from minor versions of IceSL. If you _really_ need a 32 bits build of the current version to run IceSL on your computer, we ask you to [contact us][contact].

**IceSL older versions:**

Older versions are available from our archives:

- [Older releases][icesl-releases]

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

In case you don't meet the system requirements you can opt to use the [online version][slicecrafter] of IceSL.


[slicecrafter]:         ../slicecrafter/
[changelog]:            ../assets/other/changelog.txt
[icesl-win64-stable]:   https://gforge.inria.fr/frs/download.php/file/37335/IceSL_win64.exe
[icesl-win32-stable]:   https://gforge.inria.fr/frs/download.php/file/37337/IceSL_win32.exe
[icesl-linux64-stable]: https://gforge.inria.fr/frs/download.php/file/37649/icesl-2.2.1-amd64.zip
[icesl-linux32-stable]: https://gforge.inria.fr/frs/download.php/file/37610/icesl-2.2.0-i386.zip
[icesl-win64-beta]:     https://gforge.inria.fr/frs/download.php/file/37554/IceSL_beta.exe
[icesl-linux64-beta]:   https://gforge.inria.fr/frs/download.php/file/37757/icesl-2.3-beta1-amd64.zip
[icesl-releases]:       https://gforge.inria.fr/frs/?group_id=4731
[contact]:              ../contact/
