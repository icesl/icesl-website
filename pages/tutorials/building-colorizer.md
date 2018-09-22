---
order: 1
exclude: true
categories: guide
title: Building the colorizer
---

_Author: Haichuan Song (haichuansong at gmail dot com)_

The following is a bulleted guide on the assembly of a colorizer printer for color mixing

1. Producing the parts
    - Spare parts to buy:
        - [[Link]](https://www.reprap-france.com/produit/408-cadre-et-chariot-pour-prusa-i3) One frame kit (includes main and bed frame)
        - [[Link]](https://www.reprap.me/prusa-i3-diy-3d-printer-rod-kit.html) One rod kit
        - [[Link]](https://www.reprap-france.com/produit/1234568281-lot-de-2-sets-visecrou-trapezoidales-8mm) Set of two 8mm trapezoidal screw/nut pairs
        - [[Link]](https://www.reprap-france.com/produit/365-coupleur-souple-5-x-8-mm) Two flexible 5 x 8 mm couplings
        - [[Link]](https://www.reprap-france.com/produit/394-roulement-a-billes-624zz) Three 624ZZ bearings
        - [[Link]](https://www.reprap-france.com/produit/378-kit-de-courroies-gt2-pour-prusa-i3-rework) One GT2 belt
        - [[Link]](https://www.reprap-france.com/produit/323-roulement-lineaire-lm8uu) Eleven LM8UU linear bearings
        - [[Link]](https://www.reprap-france.com/produit/379-poulie-gt2-20-dents-pour-courroie-de-6mm-axe-5mm) Two GT2 pulleys
        - [[Link]](https://www.reprap.me/nema17.html) Seven NEMA17-48mm stepper motors
        - [[Link]](https://www.reprap-france.com/produit/373-kit-cartes-fin-de-courses) One endstop kit
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
        - [[Link]](https://www.reprap.me/diamond-hotend.html) One Diamond nozzle kit
        - [[Link]](https://www.reprap.me/rumba.html) One RUMBA control board
        - [[Link]](https://www.reprap.me/raps128.html) One Raps 128 stepper motor driver
    - Spare parts to print:
        - [[Link]](https://www.reprap.me/raps128.html) We need to print the parts contained in the zip file from the preceeding link. (Note: we do not need to print the parts related to the nozzle, since we use the Diamond nozzle from above. For assembling the printer, refer to the instruction document inside the zip file)
2.  Setting up the Marlin firmware.
    - The Diamond nozzle is supported by the Marlin firmware version 1. (There exists other firmware supporting this nozzle. Please refer to: [[Link]](http://reprap.org/wiki/Diamond_Hotend#Firmware_for_Diamond_Hotend_printers))
3. Using the Diamond nozzle.
    - Controlling mixing ratios: You can directly specify the mixing ratios of the three extruders. For example: <code class="gcode">G10 X100 Y100 A0.2 B0.3 C0.5 E20</code> moves the nozzle to coordinate (100, 100) while extruding with 20%, 30% and 50% of the filaments in the three extruders, respectively.
    - Connecting the nozzle to the Prusa i3: we need an adaptor to mount the Diamond nozzle to the Prusa i3. You can print it with IceSL using the following LUA model file [Link]. You may need to modify this model if you are using a different printer than the Prusa i3.
