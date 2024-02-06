---
layout: feature
order: 1
exclude: true
categories: guide
title: Avoiding support structures
image: /assets/img/thinker-supports.png
summary: Techniques on how to avoid support structures in your print
---

_Author: Salim Perchy (yamil-salim.perchy at inria dot fr)_

Support structures are ubiquitous in 3D printing as a mechanism to avoid printing defects and deformation due to gravity. When unavoidable, they need to fulfill three big requirements (in order of priority):
1. effectively support the geometry being printed,
2. allow easy removing of the structure while minimizing aesthetic side effects,
3. consume as less material as possible, and (bonus) avoid long calculation times while slicing.

[![][thinker-supports]{:.img-small}][thinker-supports]

Thus, as these requirements are sometimes very hard to meet at the same time, the best way to use support structures is to not use them at all. We list here some techniques to avoid them or at least diminish them. They are not in-depth explanations and are supposed to be go-to solutions for the inexperienced.

[![][supports-icesl]{:.img-original}][supports-icesl]

Some of these techniques apply only to IceSL while others are sufficiently general. We present them in order of their impact in the final print (the higher, the less impact). BE AWARE that in the end, what technique to use depends a lot on the printer you're using and final goal of the print. E.g., print needs not be pretty (purely functional?), you might have _carte blanche_ to modify its geometry. The printing time is of no concern? diminish the layer thickness as to avoid overhang angles, etc. So evaluate carefully on a case-by-case basis.

1. **Modify the overhang angle.** &nbsp; Sometimes, depending on the printer, the material used or the printing environment (e.g., room), some overhang angles are overestimated. IceSL does not use an overhang angle per-se, it decides based on an overlap ratio (i.e., setting _'support_overhang_overlap_fraction'_). By default the setting's value is 0.5, meaning that support points are added if the deposition path is covered less than half by the preceding layer.
[![][overlap-fraction]{:.img-original}][overlap-fraction]
    * _Pros_: Speed up printing time by avoiding support structures when not needed (due to conservative calculation).
    * _Cons_: Correctly calculating the overhang angle is very dependent on a number of factors (geometry, weight, height, etc).
    
2. **Decrease the layer thickness.** &nbsp; This, as said above, might increase the percentage of overlap between layers.
[![][layer-thickness]{:.img-small}][layer-thickness]
    * _Pros_: Increases surface quality.
    * _Cons_: Significantly increases printing time.

3. **Optimize layer thickness.** &nbsp; IceSL has an exclusive tool that optimizes layer thickness w.r.t. to geometry complexity. This tool can be configured with a number of parameters such as minimal layer height or total number of layers.
[![][optimize-thickness]{:.img-medium}][optimize-thickness]
    * _Pros_: Increase the surface quality only where needed.
    * _Cons_: Optimization heuristic is geared towards surface quality and not layer overlap, so without further configuration, your mileage may vary.
    
4. **Decrease printing speed and increase cooling power.** &nbsp;
    * _Pros_: Might avoid support structures in hard-to-print geometries (e.g., bridges, small overhung geometry).
    * _Cons_: Significantly increases printing time.

5. **Dilate/erode geometry.** &nbsp; IceSL provides commands to do this automatically (see [the IceSL documentation on this operations][icesl-doc]).
[![][thinker-dilated]{:.img-medium}][thinker-dilated]
    * _Pros_: Fast and easy-to-use solution.
    * _Cons_: Alters significantly the geometry.
    
**BONUS:**

* **Increase nozzle diameter.** &nbsp; This might seem counterintuitive but bigger nozzle diameters can round up overhang corners and thus eliminating the need of support for them.  
    * _Pros_: Easy-to-use solution.
    * _Cons_: Additional hardware necessary (i.e., bigger nozzle). Decreases final print quality.

* **Create your own support structure.** &nbsp; IceSL has many CSG operations to build and add appropriate geometry for each case. 
    * _Pros_: Tailored to your own needs.
    * _Cons_: Can be time consuming.

* **Modify/eliminate the geometry that is overhung.** &nbsp; Only if modifying the geometry to be printed is an option.
    * _Pros_: No additional material/printing time needed.
    * _Cons_: Geometry might be hard to modify (e.g., stl files) or difficult to decide how.

You can test any technique with the following free [Benchmark][benchmark] (via Thingiverse).

[![][benchmark-supports]{:.img-medium}][benchmark-supports]

[thinker-supports]:     ../../../assets/img/thinker-supports.png
[supports-icesl]:       ../../../assets/img/supports-icesl.png
[overlap-fraction]:     ../../../assets/img/overlap-fraction.png
[layer-thickness]:      ../../../assets/img/layer-thickness.png
[optimize-thickness]:   ../../../assets/img/optimize-thickness.png
[thinker-dilated]:      ../../../assets/img/thinker-dilated.png
[benchmark-supports]:   ../../../assets/img/benchmark-supports.jpg
[benchmark]:            https://www.thingiverse.com/thing:2972495
[icesl-doc]:            https://gitlab.inria.fr/mfx/icesl-documentation/-/wikis/Scripting-language#otherops
