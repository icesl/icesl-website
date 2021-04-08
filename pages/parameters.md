---
layout: feature
title: Slicing settings
permalink: /parameters/
exclude: true
---

{% assign include_chinese = false %}
{% assign include_dlp = false %}

<script>
function printingParameter(parameterFile, htmlID, parameterName)
{
  if(document.getElementById(htmlID + "_text") === null) {
    document.getElementById(htmlID).style.lineHeight = "100%";
    // loading...
    var loading = document.createElement("pre");
    loading.setAttribute("id", htmlID + "_text");
    loading.appendChild(document.createTextNode("loading..."));
    document.getElementById(htmlID).appendChild(loading);
    // get file content
    var client = new XMLHttpRequest();
    client.open('GET', parameterFile);
    client.onloadend = async function()
    {
      if(document.getElementById(htmlID + "_text") === null) return;
      document.getElementById(htmlID).removeChild(document.getElementById(htmlID + "_text"));
      var text = document.createElement("pre");
      text.setAttribute("id", htmlID + "_text");
      text.appendChild(document.createTextNode(client.responseText));
      document.getElementById(htmlID).appendChild(text);
    }
  client.send();
  } else {
    document.getElementById(htmlID).style.lineHeight = "0%";
    document.getElementById(htmlID).removeChild(document.getElementById(htmlID + "_text"));
  }
}
</script>


<details markdown="1"><summary> <b>English</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>Filament Slicer</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/en/FilamentSlicer/' %}
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

{% if include_dlp %}
<li>
<details markdown="1"><summary> <b>DLP Slicer</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/en/DLPSlicer/' %}
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
{% endif %}

<li>
<details markdown="1"><summary> <b>Export to Mesh</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/en/MeshExportService/' %}
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
  {% assign path = '/assets/tooltips/en/SVGSlicer/' %}
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
<details markdown="1"><summary> <b>Laser Cutter</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/en/LzcutSlicer/' %}
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
  {% assign path = '/assets/tooltips/es/FilamentSlicer/' %}
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

{% if include_dlp %}
<li>
<details markdown="1"><summary> <b>Seccionar a DLP</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/es/DLPSlicer/' %}
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
{% endif %}

<li>
<details markdown="1"><summary> <b>﻿Exportar a Malla</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/es/MeshExportService/' %}
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
  {% assign path = '/assets/tooltips/es/SVGSlicer/' %}
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
  {% assign path = '/assets/tooltips/es/LzcutSlicer/' %}
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
  {% assign path = '/assets/tooltips/fr/FilamentSlicer/' %}
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

{% if include_dlp %}
<li>
<details markdown="1"><summary> <b>Trancher vers DLP</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/fr/DLPSlicer/' %}
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
{% endif %}

<li>
<details markdown="1"><summary> <b>﻿Exporter un Maillage</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/fr/MeshExportService/' %}
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
  {% assign path = '/assets/tooltips/fr/SVGSlicer/' %}
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
  {% assign path = '/assets/tooltips/fr/LzcutSlicer/' %}
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

{% if include_chinese %}
<details markdown="1"><summary> <b>中文</b> </summary>
<ul style="list-style: none;">

<li>
<details markdown="1"><summary> <b>﻿切片并生成 GCode</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/ch/FilamentSlicer/' %}
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

{% if include_dlp %}
<li>
<details markdown="1"><summary> <b>切片并生成 DLP</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/ch/DLPSlicer/' %}
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
{% endif %}


<li>
<details markdown="1"><summary> <b>﻿导出到网格</b> </summary>
<p />
<ul>
{% for parameter in site.static_files %}
  {% assign path = '/assets/tooltips/ch/MeshExportService/' %}
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
  {% assign path = '/assets/tooltips/ch/SVGSlicer/' %}
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
  {% assign path = '/assets/tooltips/ch/LzcutSlicer/' %}
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
{% endif %}
<br>
