{% extends 'layout.swig' %}
{% block content %}

<!-- LOGOS DE IPN & SEP !-->
<div id="header">
	<span id="logo_sep"><img src="img/logo-sep-horizontal.jpg" id="logo_sep"></span>
	<span id="logo_ipn"><img src="img/logo-ipn-horizontal.jpg" id="logo_ipn"></span>
</div>

<!-- HEADER TITULO !-->
<div id="header_title">
	<span id="head_title"><img src="img/img-head-title.png" id="head_title"></span>
</div>


<!-- CONTENEDOR GERENAL 1 !-->
<div id="contenedor_1">
<!-- CONTENEDOR DE SUBTITULO !-->
<div id="contenedor_subtitulo">
<h1>FICHA TÉCNICA <br>REGISTRO DE PROYECTOS</h1>
<h2>Concurso Estudiantil Politécnico</h2>
</div>
<!-- CONTENEDOR DE FORM !-->
<div id="contenedor_form">
<!-- INICIO DEL FORMULARIO !-->
<div id="contenedor_titulo_form">
1. Datos del Proyecto
</div>
<!-- CONTENEDOR COMBO !-->
<div id="contenedor_combo">
<div class="contenedor_campos">
<b>Nombre del Proyecto:</b><br>

<div id="error_1">* No se permiten caracteres especiales en el nombre de proyecto.</div>
<input type="text" name="nombre_del_proyecto" id="nombre_del_proyecto" onKeyDown="validar_combo_1();"
 class="input_text" size="50" maxlength="50" onKeyUp="validar_combo_1();"  required/><br>
<b>Eje Temático:</b><br>
<select name="eje_tematico" id="eje_tematico" onChange="validar_combo_1();" required>
	<option value="">-</option>
	<option value="Desarrollo Tecnologico">Desarrollo Tecnológico</option>
	<option value="Desarrollo Sostenible">Desarrollo Sostenible</option>
	<option value="Salud">Salud</option>
	<option value="Educacion">Educación</option>
	<option value="Ciencias Sociales y Administrativas">Ciencias Sociales y Administrativas</option>
</select><br>
</div>
<!-- CONTENEDOR DE MENSAJE !-->
<div id="mensaje_1">Ingrese todos los campos necesarios para continuar</div>
<!-- CONTENEDOR DE BOTONES !-->
<div id="botones">
<button id="boton_siguiente_1" onclick="siguiente_1();">Siguiente</button>
</div>
</div>
</div>
</div>


<!-- CONTENEDOR GERENAL 2 !-->
<div id="contenedor_2">
<!-- CONTENEDOR DE SUBTITULO !-->
<div id="contenedor_subtitulo">
<h1>FICHA TÉCNICA <br>REGISTRO DE PROYECTOS</h1>
<h2>Concurso Estudiantil Politécnico</h2>
</div>
<!-- CONTENEDOR DE FORM !-->
<div id="contenedor_2_form">
<!-- INICIO DEL FORMULARIO !-->
<div id="contenedor_titulo_form">
2. Datos de los Participantes
</div>

<!-- CONTENEDOR COMBO !-->
<div id="contenedor_combo">
<div class="contenedor_campos">

{% include 'combo-participantes.swig' %}



</div>
<!-- CONTENEDOR DE MENSAJE !-->
<div id="mensaje_2">Ingrese todos los campos necesarios para continuar</div>
<!-- CONTENEDOR DE BOTONES !-->
<div id="botones">
<button id="boton_anterior_1" onclick="anterior_1();">Anterior</button>
<button id="boton_siguiente_2" onclick="siguiente_2();">Siguiente</button>
</div>
</div>
</div>
</div>


<!-- CONTENEDOR GERENAL 3 !-->
<div id="contenedor_3">
<!-- CONTENEDOR DE SUBTITULO !-->
<div id="contenedor_subtitulo">
<h1>FICHA TÉCNICA <br>REGISTRO DE PROYECTOS</h1>
<h2>Concurso Estudiantil Politécnico</h2>
</div>
<!-- CONTENEDOR DE FORM !-->
<div id="contenedor_3_form">
<!-- INICIO DEL FORMULARIO !-->
<div id="contenedor_titulo_form">
3. Resumen
</div>

<!-- CONTENEDOR COMBO !-->
<div id="contenedor_combo">
<div class="contenedor_campos">

<b>Máximo 2 cuartillas.</b>  Se deberá indicar claramente cuál fue el problema que se pretende resolver,
el desarrollo que se debe seguir, los principales resultados que se esperan obtener obtenidos y
las principales aportaciones de la investigación. Este resumen se utilizará para difundir
los proyectos ganadores en diversos medios.<br>
<div id="error_8">* No se permiten caracteres especiales en el resumen.</div>
<div id="textarea"><textarea name="resumen" rows="8" id="resumen"
 onKeyUp="validar_combo_3()" onKeyDown="validar_combo_3()" minlength="10" maxlength="1000" cols="85" required></textarea></div>

</div>
<!-- CONTENEDOR DE MENSAJE !-->
<div id="mensaje_3">Ingrese todos los campos necesarios para continuar</div>
<!-- CONTENEDOR DE BOTONES !-->
<div id="botones">
<button id="boton_anterior_2" onclick="anterior_2();">Anterior</button>
<button id="boton_siguiente_3" onclick="siguiente_3();">Siguiente</button>
</div>
</div>
</div>
</div>


<!-- CONTENEDOR GERENAL 4 !-->
<div id="contenedor_4">
<!-- CONTENEDOR DE SUBTITULO !-->
<div id="contenedor_subtitulo">
<h1>FICHA TÉCNICA <br>REGISTRO DE PROYECTOS</h1>
<h2>Concurso Estudiantil Politécnico</h2>
</div>
<!-- CONTENEDOR DE FORM !-->
<div id="contenedor_4_form">
<!-- INICIO DEL FORMULARIO !-->
<div id="contenedor_titulo_form">
4. Documento Escrito
</div>

<!-- CONTENEDOR COMBO !-->
<div id="contenedor_combo">
<div class="contenedor_campos">

<b>Se deben incluir el desarrollo de la propuesta y estará compuesto con los siguientes elementos:</b><br>
<ol>
  <li>Antecedentes.</li>
  <div id="error_9">* No se permiten caracteres especiales. </div>
  <textarea name="antecedentes" id="antecedentes" rows="2" cols="80" maxlength="400" onKeyUp="validar_combo_4()"
  onKeyDown="validar_combo_4()" placeholder="Máximo de 400 Palabras" required></textarea>
  <li>Justificación (planteamiento del problema).</li>
  <div id="error_10">* No se permiten caracteres especiales. </div>
  <textarea name="justificacion" id="justificacion" rows="2" cols="80" maxlength="100" onKeyUp="validar_combo_4()"
  onKeyDown="validar_combo_4()" placeholder="Máximo de 100 Palabras" required></textarea>
  <li>Metodología.</li>
  <div id="error_11">* No se permiten caracteres especiales. </div>
  <textarea name="metodologia" id="metodologia" rows="2" cols="80" maxlength="200" onKeyUp="validar_combo_4()"
  onKeyDown="validar_combo_4()" placeholder="Máximo de 200 Palabras" required></textarea>
  <li>Propuesta.</li>
  <div id="error_12">* No se permiten caracteres especiales. </div>
  <textarea name="propuesta" id="propuesta" rows="2" cols="80" minlength="800" maxlength="1000" onKeyUp="validar_combo_4()"
  onKeyDown="validar_combo_4()" placeholder="800 - 1000 Palabras" required></textarea>
  <li>Resultados e impacto esperados de la propuesta.</li>
  <div id="error_13">* No se permiten caracteres especiales. </div>
  <textarea name="resultados" id="resultados" rows="2" cols="80" maxlength="200" onKeyUp="validar_combo_4()"
  onKeyDown="validar_combo_4()" placeholder="Máximo de 200 Palabras" required></textarea>
  <li>Conclusiones.</li>
  <div id="error_14">* No se permiten caracteres especiales. </div>
  <textarea name="conclusiones" id="conclusiones" rows="2" cols="80" maxlength="200" onKeyUp="validar_combo_4()"
  onKeyDown="validar_combo_4()" placeholder="Máximo de 200 Palabras" required></textarea>
  <li>
  <div id="dynamicInput">
		Referencia Bibliográfica 1: <b>(en formato APA)</b> <input type="text" id="referencia_1"
    onKeyUp="validar_combo_4()" onKeyDown="validar_combo_4()"size="45" required>
  </div>
  <input type="button" value="+" onClick="addInput('dynamicInput');">
  </li>
</ol>
<b>Subir Archivo:</b>
<input type="file" id="archivo_proyecto" required><br>
<button id="subir_archivo" onClick="validar_combo_4()">Subir</button><br><br>


</div>
<!-- CONTENEDOR DE MENSAJE !-->
<div id="mensaje_4">Ingrese todos los campos necesarios para continuar</div>
<!-- CONTENEDOR DE BOTONES !-->
<div id="botones">
<button id="boton_anterior_3" onclick="anterior_3();">Anterior</button>
<button id="boton_siguiente_4" onclick="siguiente_4();">Siguiente</button>
</div>
</div>
</div>
</div>


<!-- CONTENEDOR GERENAL 5 !-->
<div id="contenedor_5">
<!-- CONTENEDOR DE SUBTITULO !-->
<div id="contenedor_subtitulo">
<h1>FICHA TÉCNICA <br>REGISTRO DE PROYECTOS</h1>
<h2>Concurso Estudiantil Politécnico</h2>
</div>
<!-- CONTENEDOR DE FORM !-->
<div id="contenedor_5_form">
<!-- INICIO DEL FORMULARIO !-->
<div id="contenedor_titulo_form">
5. Anexo
</div>

<!-- CONTENEDOR COMBO !-->
<div id="contenedor_combo">
<div class="contenedor_campos">


<div id="anexo">
<b>Incluir en caso de que los participantes cuenten con material audiovisual que apoyen su propuesta:</b><br>
URL:
<input type="text" name="anexo" id="url" maxlength="100" pattern="https?://.+" class="input_text" size="80"/><br>
</div>


<div id="datos"></div>
</div>



<!-- CONTENEDOR DE BOTONES !-->
<div id="botones">
<button id="boton_anterior_4" onclick="anterior_4();">Anterior</button>
<button id="boton_registrar" onclick="registrar();">Registrar</button>
<button id="boton_inicio" onclick="window.location.reload()">Inicio</button>

</div>
</div>
</div>
</div>





</form>
{% endblock %}
