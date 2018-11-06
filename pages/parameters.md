<script>
function printingParameter(parameterFile, htmlID, parameterName)
{
  document.getElementById(htmlID).innerHTML = "loading...";
  var client = new XMLHttpRequest();
  client.open('GET', parameterFile);
  client.onloadend = function()
  {
    document.getElementById(htmlID).title = parameterName;
    document.getElementById(htmlID).style.lineHeight = "100%";
    document.getElementById(htmlID).innerHTML = "<pre>" + client.responseText + "</pre>";
  }
  client.send();
}
</script>


<details markdown="1"><summary> <b>English</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>Filament Slicer</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/FilamentSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>Export to Mesh</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/MeshExportService/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>SVG Slicer</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/SVGSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a  ="#" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>Laser Cutter</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/en/LzcutSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
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
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/FilamentSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Exportar a Malla</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/MeshExportService/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Seccionar a SVG</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/SVGSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Trazado para Cortadora Láser</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/es/LzcutSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
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
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/FilamentSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Exporter un Maillage</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/MeshExportService/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Trancher vers un SVG</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/SVGSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿Contour pour la découpe laser</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/fr/LzcutSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
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
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/FilamentSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}

</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿导出到网格</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/MeshExportService/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿切片并生成 SVG</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/SVGSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

<li>
<details markdown="1"><summary> <b>﻿为激光切割机生成路径</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/pages/tooltips/ch/LzcutSlicer/' %}
  {% if parameter.path contains path %}
  {% assign printing_parameter = (parameter.path | remove: path) | remove: parameter.extname %}
  {% assign html_id = parameter.path | remove: parameter.extname %}
  {% assign parameter_file = parameter.path | prepend: site.baseurl %}
<li style="list-style: none; line-height: 0%;" id="{{ html_id }}" markdown="1">
<a href="javascript:void(0);" title="" onclick="printingParameter('{{ parameter_file }}', '{{ html_id }}', '{{ printing_parameter }}')">{{ printing_parameter }}</a>
</li>
  {% endif %}
{% endfor %}
</ul>
</details>
</li>

</ul>
</details>
<br>
