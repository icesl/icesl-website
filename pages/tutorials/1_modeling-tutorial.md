---
order: 2
exclude: true
categories: tutorial
title: Modeling in IceSL with the Lua editor
---

_Author: Salim Perchy (yamil-salim.perchy at inria dot fr)_

Welcome to the 2nd tutorial of IceSL. This tutorial is aimed at introducing the basics of modeling shapes in IceSL using Lua. Some familiarity with Lua is recommended before going through this tutorial. Estimated time of completion is _15 minutes._

- We're going to model a six-sided die<sup>1</sup> using [CSG][csg] (Constructive Solid Geometry) with the Lua editor of IceSL. Start IceSL and create a new file (File &rarr; New), answer no when prompted to save. Throughout this tutorial we will be writing code on the Lua editor (left area of the main window).

{:.table-center}
[![][tutorial2-img1]{:.img-small.smaller}][tutorial2-img1] | [![][tutorial2-img2]{:.img-small.smaller}][tutorial2-img2]

<br>

- We first, create the base cube that makes up the die. For this, we parametrize the size with variable dwidth and create a centered (on the origin) cube with the following code:

{% highlight lua %}
dwidth  = 10
dcube   = ccube( dwidth )
{% endhighlight %}

- The _ccube_ directive creates a centered cube of width dwidth and we assign it to variable dcube. To visualize the created volume we need to _emit_ it:

{% highlight lua %}
emit( dcube )
{% endhighlight %}

{:.table-center}
[![][tutorial2-img3]{:.img-small.smaller}][tutorial2-img3]

<br>

- For the circular inscriptions identifying each side of the die to its corresponding number we will create a sphere of radius 1. Before proceeding, discard the line that emits dcube. The sphere is created as follows:

{% highlight lua %}
iradius     = 1
inscription = sphere( iradius )
{% endhighlight %}

- Just as we did with dcube, we can emit the sphere through the variable _inscription_ to visually check the shape we're modeling. Again, discard the line that emits the sphere before continuing onto the next step of the tutorial.

{:.table-center}
[![][tutorial2-img4]{:.img-small.smaller}][tutorial2-img4]

<br>

- We begin by sculpting the upper side of the cube with the inscription corresponding to the value 1. To achieve this, we center the sphere, _translate_ it to the upper side of the cube and save it in variable _side1_. We emit both figures to have visual feedback:

{% highlight lua %}
side1 = translate( 0, 0, dwidth/2 ) * inscription
emit( dcube )
emit( side1 )
{% endhighlight %}

{:.table-center}
[![][tutorial2-img5]{:.img-small.smaller}][tutorial2-img5]

<br>

- Obviously, the inscription is supposed to be carved and not added onto the dice. In order to do this, we use the boolean operation called _difference_ that subtracts the volume of one shape from another. In this case we subtract the volume of the inscription (sphere) from the volume of the dice (cube). Remove both emits and replace them by:

{% highlight lua %}
emit( difference( dcube, side1 ) )
{% endhighlight %}

{:.table-center}
[![][tutorial2-img6]{:.img-small.smaller}][tutorial2-img6]

<br>

- We still carve the top of the cube, but this time we do the inscription for the value 2. To do this we need two spheres. There is no need to create an extra sphere, we can use the boolean operation called _union_. This operations adds the volume of one shape to another, this way we can construct the correct inscription onto the variable _side2_:

{% highlight lua %}
side2 = union( 
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription )
{% endhighlight %}

- Pay close attention how we translated each inscription to the upper right corner and lower left corner on the upper side of the die. As usual, we could have some visual feedback by emitting the difference between the _dcube_ and _side2_ variables.

{:.table-center}
[![][tutorial2-img7]{:.img-small.smaller}][tutorial2-img7]

<br>

- We continue creating the other inscriptions for the other values (i.e., 3,4,5 and 6). When boolean operations take more than two arguments, we pack the arguments between braces. Notice how the inscription of the side with value 6 is translated to the lower side of the die and not the upper. Try to code one of these sides by yourself!

{% highlight lua %}
side3 = union{
  translate( 0, 0, dwidth/2 )
  * inscription,
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription }

side4 = union{
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate( dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4, dwidth/4, dwidth/2 )
  * inscription  }

side5 = union{
  translate( 0, 0, dwidth/2 )
  * inscription,
  translate( dwidth/4, dwidth/4, dwidth/2 )
  * inscription,
  translate( dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4, dwidth/2 )
  * inscription,
  translate(-dwidth/4, dwidth/4, dwidth/2 )
  * inscription }

side6 = union{
  translate( dwidth/4, 0,-dwidth/2 )
  * inscription,
  translate(-dwidth/4, 0,-dwidth/2 )
  * inscription,
  translate( dwidth/4, dwidth/4,-dwidth/2 )
  * inscription,
  translate( dwidth/4,-dwidth/4,-dwidth/2 )
  * inscription,
  translate(-dwidth/4,-dwidth/4,-dwidth/2 )
  * inscription,
  translate(-dwidth/4, dwidth/4,-dwidth/2 )
  * inscription }
{% endhighlight %}

- To correctly place each inscription on a different face of the die cube we need to abide by one invariant: two opposing sides must always add 7. For example we can place the inscription of value 1 on the upper face and the inscription of value 6 on the lower face, as such they face each other and their sum is 7. For the other sides, we must rotate them accordingly so they also add 7:

{% highlight lua %}
sides = union{        side1,
  rotate( 90.0, Y) *  side2,
  rotate(-90.0, X) *  side3,
  rotate( 90.0, X) *  side4,
  rotate(-90.0, Y) *  side5,
                      side6 }
{% endhighlight %}

{:.table-center}
[![][tutorial2-img8]{:.img-small.smaller}][tutorial2-img8]

<br>

- Now we are ready to construct the whole geometry of the die. By having the variables dcube and sides containing the cube die and its inscriptions respectively, it is then fairly simple to join them:

{% highlight lua %}
die = difference( dcube, sides )
emit( die )
{% endhighlight %}

{:.table-center}
[![][tutorial2-img9]{:.img-small.smaller}][tutorial2-img9]

<br>

- Finally, notice how the final shape of the die has pointy corners. This may be undesirable due to the damage that might be caused by throwing the die. We can elegantly solve this by using boolean operations again:

{% highlight lua %}
round_shape = sphere(dwidth / 1.4)
round_die   = intersection( die, round_shape )
dscale      = 2.0
emit( round_die * scale( dscale ) )
{% endhighlight %}

{:.table-center}
[![][tutorial2-img10]{:.img-small.smaller}][tutorial2-img10]

<br>

- We create a sphere of roughly half more the size of the die cube and apply the boolean operation intersection. This operation calculates the volume common to the two volumes and in this case it's what gives the round shape to the die. For convenience, we add a scale factor dscale that is applied to the final volume. This scaling serves as a global scaling factor for the final volume without tweaking the initial values of the components (e.g., die width, inscription radius, etc). The full source code to the Lua script can be downloaded [here][die-code].

_Exercise!_

Using the Lua editor of IceSL, try to model the figure of a 4-sided die. Some tips on how to do this:
1. IceSL comes with a variety of commands to construct volumes, [here][tutorial2-img11] you can find a complete reference. Using spheres and the convex_hull function provides a simple way to create the body of the dice (thanks to user Maze Mietner for suggesting this approach!).
2. Etching numbers on each side of the die can prove difficult using only primitive shapes (e.g., cube, sphere, etc.). See the scripting documentation on how to produce text geometry.

<sup>1. Six-sided colored dice image made by user Diacritica from [Wikimedia Commons][wiki-commons] licensed under [CC BY-SA 3.0][cc30-license]</sup>

[tutorial2-img1]:     ../assets/img/tutorial2/01.jpg
[tutorial2-img2]:     ../assets/img/tutorial2/02.png
[tutorial2-img3]:     ../assets/img/tutorial2/03.png
[tutorial2-img4]:     ../assets/img/tutorial2/04.png
[tutorial2-img5]:     ../assets/img/tutorial2/05.png
[tutorial2-img6]:     ../assets/img/tutorial2/06.png
[tutorial2-img7]:     ../assets/img/tutorial2/07.png
[tutorial2-img8]:     ../assets/img/tutorial2/08.png
[tutorial2-img9]:     ../assets/img/tutorial2/09.png
[tutorial2-img10]:    ../assets/img/tutorial2/10.png
[tutorial2-img11]:    ../assets/img/tutorial2/11.jpg
[csg]:                https://en.wikipedia.org/wiki/Constructive_solid_geometry
[die-code]:           ../assets/lua/d6.lua
[cc30-license]:       https://creativecommons.org/licenses/by-sa/3.0/
[wiki-commons]:       https://commons.wikimedia.org/wiki/File:6sided_dice.jpg
