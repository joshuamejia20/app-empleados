<?php
    header('Content-Type: text/html; charset=ISO-8859-1');
    require_once('data/class.data.inc.php');
    require_once("../resources/js/mpdf/mpdf.php");
	require "data/fecha.php";
    require_once('data/class.data.inc.php');

    class acuerdos extends data {

        # Conecta a mysql al instanciar la clase
        function __construct() {
            $this->connect();
        }

        #
        function individual() {
            $params = $_POST;
			
			$sql="SELECT
					REPLACE(
							REPLACE(
								CONCAT_WS(
									' ',
									n.primer_nombre,
									n.segundo_nombre,
									n.tercer_nombre,
									n.primer_apellido,
									n.segundo_apellido,
									n.apellido_casada
								), '   ', ' '
							), '  ', ' '
						) nombre,
						a.id_abogado,
						aa.id_acuerdo_abogado,
						g.siglas_genero,
						aa.fecha_acuerdo,
						STR_TO_DATE(:fecha_generacion, '%d/%m/%Y') fecha_generacion
					FROM abogado a
					INNER JOIN  nombre n ON a.id_persona=n.id_persona AND CAST(n.estado_nombre AS UNSIGNED)=1
					INNER JOIN expediente e ON a.id_abogado=e.id_abogado AND e.id_tipo_tramite=1 AND CAST(e.estado_expediente AS UNSIGNED)=1
					INNER JOIN acuerdo_abogado aa ON a.id_abogado=aa.id_abogado
					INNER JOIN persona p ON a.id_persona=p.id_persona
					INNER JOIN genero g ON p.id_genero=g.id_genero
					WHERE a.id_abogado=:id_abogado
					AND aa.tipo_acuerdo=2";
			$param_list=array('id_abogado', 'fecha_generacion');
			$personas_acuerdos=$this->query($sql, $params, $param_list);

			$abogados="";

			if($personas_acuerdos['success']){
				if($personas_acuerdos['total']>0){
					$params["fecha_generacion_n"]=$personas_acuerdos["items"][0]["fecha_generacion"];
					$params["fecha_acuerdo_n"]=$personas_acuerdos["items"][0]["fecha_acuerdo"];
					$params['id_acuerdo']=$personas_acuerdos['items'][0]['id_acuerdo_abogado'];
					$params['nombre_abogado']=$personas_acuerdos['items'][0]['nombre'];
					$abogados= $abogados . $personas_acuerdos['items'][0]['nombre'].'<br/>';

					foreach ($params['firmantes'] as $key => $value) {

						$params['id_firma']=$value;
						$sql="SELECT id_acuerdo_firma, estado_acuerdo_firma
							FROM acuerdo_firma
							WHERE id_lectura_firma=:id_firma
							AND id_acuerdo_abogado=:id_acuerdo";
						$param_list=array('id_firma', 'id_acuerdo');
						$firma=$this->query($sql, $params, $param_list);
						
						if($firma['success']){
							if($firma['total']>0){
								if($firma['items'][0]['estado_acuerdo_firma']=="INACTIVO"){
									$params['id_acuerdo_firma']=$firma['items'][0]['id_acuerdo_firma'];
									$sql="UPDATE acuerdo_firma SET estado_acuerdo_firma=2 WHERE id_acuerdo_firma=:id_acuerdo_firma";
									$param_list=array('id_firma', 'id_acuerdo');
									$activar_firma=$this->query($sql, $params, $param_list);
								}
							}else{
									$sql="INSERT INTO acuerdo_firma (id_lectura_firma, id_acuerdo_abogado, estado_acuerdo_firma)
										  VALUES (:id_firma, :id_acuerdo)";
									$param_list=array('id_firma', 'id_acuerdo');
									$activar_firma=$this->query($sql, $params, $param_list);
							}
						}
					}

				}
			}

			$firmas="";
			foreach ($params['firmantes'] as $key => $value) {
				$params['id_firma']=$value;
				$sql="SELECT lectura_firma_magistrado FROM lectura_firma WHERE id_lectura_firma=:id_firma";
				$param_list=array('id_firma');
				$firma=$this->query($sql, $params, $param_list); 
				if($firma['success']){
					if($firma['total']>0){					
						
						$firmas= $firmas . '-------'.$firma['items'][0]['lectura_firma_magistrado'].'-------';

					}
				}

			}

			
			$fecha_mes_letras = strtolower(fechaMesLetras(date('d-m-Y', strtotime($params['fecha_generacion_n']))));
			$fecha_letras = strtolower(fechaCastellano(date('d-m-Y', strtotime($params['fecha_acuerdo_n']))));
			
			$encabezado="
			<div style='font-family: helvetica; font-size:9pt;'>
			<div style='position:relative;display:inline-block;float:left;width:40mm;height:44mm;font-size:9pt;text-align:center;font-family:\"Times New Roman\";'>
            	<center>
            	<img src='../media/img/elSalvador.png' style='height:28.5mm;width:30mm;margin:0;'>
            	</center>
				<center>Corte Suprema de Justicia</center>
				<center>Secretar&iacute;a General</center>
				<center>Tel. 2271-8888</center>
            </div>
			<div style='position:relative;display:inline-block;float:right;width:100mm;height:44mm;font-size:12pt;text-align:right;font-weight:bold;padding-top:40px;'>
			San Salvador, $fecha_mes_letras
            </div>
			</div>";

				for($i=1; $i<=3; $i++){
				$html.="<div style='height:30mm;width:100%;border:0px solid black;text-align:left;font-weight:bold;line-height:6mm;font-size:13pt;'>";
				if($i==3){	
					$html.="<div>Se&ntilde;or</div><div>DIRECTOR DEL DIARIO OFICIAL</div>";
				}else if($i==2){
					if($personas_acuerdos['items'][0]['siglas_genero']=='M'){
						$html.="<div>Licenciado</div>";
					}else{
						$html.="<div>Licenciada</div>";
					}
				}else if($i==1){
					if($personas_acuerdos['items'][0]['siglas_genero']=='M'){
						$html.="<div>Licenciado</div><div>".$abogados."</div>";
					}else{
						$html.="<div>Licenciada</div><div>".$abogados."</div>";
					}
				}
				$html.="<div>Presente.</div></div>";
				$html.="<div style='height:10mm;width:100%;border:0px solid red;font-weight:bold;font-size:13pt;text-align:right;'>SE HA EMITIDO EL ACUERDO QUE EN LO CONDUCENTE DICE:</div>";
				$html.="<div style='height:50mm;width:100%;border:0px solid blue;font-size:13pt;text-align:justify;'>\"<b>No-".$params['numero_acuerdo']."-CORTE SUPREMA DE JUSTICIA,</b> San Salvador, $fecha_letras. -----Habiendo aprobado el examen de suficiencia previo al ejercicio de la funci&oacute;n notarial establecido en el Art. 145 de la Ley Org&aacute;nica Judicial y conforme al acta de notificaci&oacute;n efectuadas, en cada caso, por la Secretar&iacute;a General de este tribunal, que se encuentran agregadas en los correspondientes expedientes profesionales; este Tribunal <b>ACUERDA:</b> Autorizar para que ejerza las funciones de <b>NOTARIO</b> incluyendo su nombre en la n&oacute;mina permanente de notarios que se publica anualmente en el Diario Oficial a los abogados siguientes:</div>";
				$html.="<div style='height:0mm;width:100%;border:0px solid blue;font-weight:bold;font-size:14pt;text-align:center;'>".$abogados."</div>";
				$html.="<div style='height:40mm;width:100%;border:0px solid blue;font-size:13pt;margin-top:9px;'><strong>COMUNIQUESE Y PUBLIQUESE.</strong>".$firmas."</div>";
				$html.="<div style='height:15mm;width:100%;border:0px solid blue;font-size:12pt;text-align:center;margin-top:20px;'>Lo que comunico a usted para los efectos consiguientes.</div>";
				$html.="<div style='height:20mm;width:100%;border:0px solid blue;font-size:12pt;text-align:center;'>DIOS&nbsp;&nbsp;&nbsp;&nbsp;UNION&nbsp;&nbsp;&nbsp;&nbsp;LIBERTAD</div>";
				$html.="<div style='height:20mm;width:100%;border:0px solid blue;font-size:12pt;text-align:center;font-weight:bold;line-height:4mm;'><center>".$params['secretaria']."</center><center>".$params['cargo']."</center><center>Corte Suprema de Justicia</center></div>";
				if($i<3){
					$html.="<p style='page-break-after:always;'>";
				}

				#$mpdf = new mPDF('c', 'Legal');
				$mpdf = new mPDF("LETTER");
				$mpdf->allow_charset_conversion = true;
				$mpdf->setAutoBottomMargin = "stretch";
				$mpdf->setAutoTopMargin = "stretch";
				$mpdf->SetHTMLHeader($encabezado);
				$mpdf->writeHTML($html);

			#$mpdf->SetHTMLFooter('<p style="text-align: center; font-size=10;">Sección de Investigación Profesional, 4º nivel, Edificio de Oficinas Administrativas y Jurídicas Tel.:2231-8300 Ext. 3454</p>');
			$mpdf->defaultfooterline=1;
			}
			
			
			$mpdf->output(__BASE_URI_SYS__ . "media/pdfs/acuerdo.pdf");


			if (@file_exists(__BASE_URI_SYS__ . "media/pdfs/acuerdo.pdf") ){

				$response=array('success'=>true, "url"=>"media/pdfs/acuerdo.pdf");
			} else {
				$response=array('success'=>false, 'error'=>'Error al generar el PDF');
			}

			$this->close();
			return $response;
        }
    }
?>