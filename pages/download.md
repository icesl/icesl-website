---
order: 2
layout: feature
title: Download
permalink: /download/
exclude: false
categories: download
---

{% assign beta_available = true %}

{% assign win64beta = "2.3.4-beta5" %}
{% assign linux64beta = "2.3.4-beta5" %}

{% assign win64stable = "2.3.3" %}
{% assign win32stable = "2.3.3" %}

{% assign linux64stable = "2.3.3" %}
{% assign linux32stable = "2.3.3" %}

IceSL is available for both Windows and Linux Systems.
If you want to experiment with the latest features, give the beta release a try !

See the [changelog][changelog] for more details on what's new.

### IceSL for Windows

The packages bellow contain both IceSL-forge and IceSL-slicer for Windows:

{% if beta_available %}
[IceSL {{win64beta}} Windows 64 bits][icesl-win64-beta]{:.button.big}{:.button-big}

[IceSL {{win64stable}} Windows 64 bits][icesl-win64-stable]{:.button.big}{:.button-half} [IceSL {{win32stable}} Windows 32 bits][icesl-win32-stable]{:.button.big}{:.button-half}
{% else %}
[IceSL {{win64stable}} Windows 64 bits][icesl-win64-stable]{:.button.big}{:.button.big} [IceSL {{win32stable}} Windows 32 bits][icesl-win32-stable]{:.button.big}{:.button.half}
{% endif %}

___

### IceSL for Linux

The packages below contain IceSL-slicer for Linux:

{% if beta_available %}
[IceSL {{linux64beta}} Linux 64 bits][icesl-linux64-beta]{:.button.big}{:.button-big}

[IceSL {{linux64stable}} Linux 64 bits][icesl-linux64-stable]{:.button.big}{:.button-half} [IceSL {{linux32stable}} Linux 32 bits][icesl-linux32-stable]{:.button.big}{:.button-half}
{% else %}
[IceSL {{linux64stable}} Linux 64 bits][icesl-linux64-stable]{:.button.fit}{:.button.big} [IceSL {{linux32stable}} Linux 32 bits][icesl-linux32-stable]{:.button.fit}{:.button.small}
{% endif %}

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
- GeForce GT 555M / 610M (_nouveau_ driver) / GTX 1660 Ti Mobile
- Intel HD Graphics 630, 4600, 4400, 4000<sup>*</sup>
- AMD Radeon 290X

<sup>Note: Although Intel HD Graphics 4000 does not fully support OpenGL 4.3, it does support the features needed by IceSL through extensions.</sup>

And in the following OS's:
- Windows 7/10 64 bits
- Debian stable/testing 64 bits
- Ubuntu LTS 64 bits

In case you don't meet the system requirements you can opt to use the [online version][slicecrafter] of IceSL.

___

#### IceSL 32 bits versions

{:.text-justify}
In order to speed up updates to IceSL, we are officially discontinuing 32 bits installers from minor versions of IceSL. If you _really_ need a 32 bits build of the current version to run IceSL on your computer, we ask you to [contact us][contact].

#### IceSL older versions

Older versions are available from our archives:

- [Older releases][icesl-releases]

[slicecrafter]:         ../slicecrafter/
[contact]:              ../contact/
[changelog]:            ../assets/other/changelog.txt
[install-error]:        ../assets/img/install-error.png


[icesl-win64-beta]:     https://gforge.inria.fr/frs/download.php/file/38144/IceSL_beta.exe
[icesl-linux64-beta]:   https://gforge.inria.fr/frs/download.php/file/38219/icesl-2.3.4-beta5-amd64.zip

[icesl-win64-stable]:   https://gforge.inria.fr/frs/download.php/file/38109/IceSL_win64.exe
[icesl-win32-stable]:   https://gforge.inria.fr/frs/download.php/file/38108/IceSL_win32.exe
[icesl-releases]:       https://gforge.inria.fr/frs/?group_id=4731

[icesl-linux64-stable]: https://gforge.inria.fr/frs/download.php/file/38107/icesl-2.3.3-amd64.zip
[icesl-linux32-stable]: https://gforge.inria.fr/frs/download.php/file/38106/icesl-2.3.3-i386.zip

[test]: https://google.com
