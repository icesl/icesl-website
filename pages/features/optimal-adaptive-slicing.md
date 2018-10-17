---
layout: feature
order: 2
exclude: true
categories: feature
title: Optimal adaptive slicing
image: /assets/img/adaptive.jpg
summary: Obtain the best possible choice of slice thicknesses that will maximize part accuracy
---

IceSL features a state of the art algorithm for automatic layer thickness selection. It computes the best possible choice of slice thicknesses that will maximize part accuracy, given a number of slices. Yes, this means you get to choose a number of slices (which strongly correlates with printing time in most cases), and the algorithm selects the slice thicknesses than provide the most accurate result for this choice.

[![][adaptive]{:.img-small}][adaptive]

{:.caption1}
<sup>The adaptive layer thickness optimizer chooses the best thicknesses for a given number of slices (top left slider). [3DBenchy by CreativeTools][benchy-model]</sup>

Publication:
 - [Optimal Discrete Slicing][adaptive-paper]
 - Marc Alexa, Kristian Hildebrand, Sylvain Lefebvre
 - ACM Transactions on Graphics 2017


[benchy-model]:     http://www.3dbenchy.com/
[adaptive]:         ../../../assets/img/adaptive.jpg
[adaptive-paper]:   http://dl.acm.org/citation.cfm?id=2999536
