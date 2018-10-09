<details markdown="1"><summary> <b>English</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>Filament Slicer</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/FilamentSlicer/' %}
  {% if parameter.path contains path %}
      {% assign filename = (parameter.path | remove:'/tooltips/en/FilamentSlicer/') %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>Export to Mesh</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/MeshExportService/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>SVG Slicer</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/SVGSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>Laser Cutter</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/LzcutSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

</ul>
</details>

<details markdown="1"><summary> <b>Español</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>﻿Seccionar a GCode</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/FilamentSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Exportar a Malla</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/MeshExportService/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Seccionar a SVG</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/SVGSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Trazado para Cortadora Láser</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/LzcutSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

</ul>
</details>

<details markdown="1"><summary> <b>Français</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>﻿Trancher vers du GCode</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/FilamentSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Exporter un Maillage</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/MeshExportService/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Trancher vers un SVG</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/SVGSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Contour pour la découpe laser</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/LzcutSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

</ul>
</details>

<details markdown="1"><summary> <b>中文</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>﻿切片并生成 GCode</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/FilamentSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}

</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿导出到网格</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/MeshExportService/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿切片并生成 SVG</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/SVGSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿为激光切割机生成路径</b> </summary>
<ul style="list-style: none;">
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/LzcutSlicer/' %}
  {% if parameter.path contains path %}
<li markdown="1">
[{{(parameter.path | remove: path) | remove: parameter.extname}}]({{ parameter.path | prepend: site.baseurl }})
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

</ul>
</details>

<br>
