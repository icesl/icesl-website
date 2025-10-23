---
layout: feature
order: 2
exclude: true
categories: guide
title: Building the colorizer
image: /assets/img/colorizer.jpg
summary: Unprecedented control over your prints with settings specified per-layer
---

_Author: Haichuan Song (haichuansong at gmail dot com)_

The following is a bulleted guide on the assembly of a colorizer printer for color mixing

1. Producing the parts
    - Spare parts to buy:
        - [[Link]](https://reprap.org/wiki/Prusa_i3#Frame_type) One frame kit (includes main and bed frame)
        - [[Link]](https://reprap.org/wiki/Threaded_rod) One rod kit
        - [[Link]](https://reprap.eu/produto/?id=80&nome=T8+Trapezoidal+%E2%88%85+8+%28mm%29++8mm+Lead+Screw+%2B+Nut++%28Length+400mm%29) Set of two 8mm trapezoidal screw/nut pairs
        - [[Link]](https://reprap.eu/produto/?id=1122&nome=Plum+Coupling+Spider++5x8) Two flexible 5 x 8 mm couplings
        - [[Link]](https://reprap.org/wiki/Ball_bearing) Three 624ZZ bearings
        - [[Link]](https://reprap.org/wiki/GT2_Timing_Belt) One GT2 belt
        - [[Link]](https://reprap.org/wiki/Linear_bearing) Eleven LM8UU linear bearings
        - [[Link]](https://reprap.org/wiki/Belts_and_Pulleys) Two GT2 pulleys
        - [[Link]](https://reprap.org/wiki/NEMA_17_Stepper_motor) Seven NEMA17-48mm stepper motors
        - [[Link]](https://reprap.org/wiki/Mechanical_Endstop) One endstop kit
        - Screws:
            - Two M3 x 10mm
            - Thirty six M3 x 14mm
            - Eight M3 x 20mm
            - Four M3 x 30mm
            - Four M3 x 50mm (or 60mm)
            - Four M4 x 20mm
            - Five M3 setscrew
        - Nuts:
            - Two M2
            - Thirty two M3
            - Two M3 wing
            - Six M4
            - Thirty four M10
        - Washer:
            - 55 M3
            - Thirty four M10
            - Four M3 x 8mm
            - Thirty four M10
        - [[Link]](https://reprap.org/wiki/Diamond_Hotend) One Diamond nozzle kit
        - [[Link]](https://reprap.org/wiki/RUMBA) One RUMBA control board
        - [[Link]](https://reprap.org/wiki/RAPS128) One Raps 128 stepper motor driver
    - Spare parts to print:
        - [[Link]](https://drive.google.com/file/d/19A-rV6FNW7hQyqCcxqY_9xBS5Bb9kGUl/view?usp=sharing) We need to print the parts contained in the zip file from the preceeding link. (Note: we do not need to print the parts related to the nozzle, since we use the Diamond nozzle from above. For assembling the printer, refer to the instruction document inside the zip file)
2.  Setting up the Marlin firmware.
    - The Diamond nozzle is supported by the Marlin firmware version 1. (There exists other firmware supporting this nozzle. Please refer to: [[Link]](http://reprap.org/wiki/Diamond_Hotend#Firmware_for_Diamond_Hotend_printers))
[![][colorizer]{:.img-small.smaller}][colorizer]
3. Using the Diamond nozzle.
    - Controlling mixing ratios: You can directly specify the mixing ratios of the three extruders. For example: <code class="gcode">G10 X100 Y100 A0.2 B0.3 C0.5 E20</code> moves the nozzle to coordinate (100, 100) while extruding with 20%, 30% and 50% of the filaments in the three extruders, respectively.
    - Connecting the nozzle to the Prusa i3: we need an adaptor to mount the Diamond nozzle to the Prusa i3. You can print it with IceSL using the following LUA model file [[Link]](https://github.com/shcig/Models/blob/master/Adaptor_for%20Diamond_nozzle.lua). You may need to modify this model if you are using a different printer than the Prusa i3.

[colorizer]:    ../../../assets/img/colorizer.jpg
