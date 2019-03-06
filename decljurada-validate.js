// =================================================================
// VALIDATE
// =================================================================

$("#frmRegistrarDeclaracion").validate({
	ignore: false,
	errorElement: 'span',
	errorClass: 'help-block',
	rules: {
		codDocum:{
			required: true
		},
		numDocum:{
			required: true
		},
		codPaisEmiDoc:{
			valCodPaisEmiDoc: {depends:true}
		},
		fecNacimiento:{
			required: true,
			valFecNacimiento:{depends:true}
		},
		apePat:{
			valApePat:{depends:true}
		},
		nomPersonal:{
			required: true
		},
		indSexo:{
			valIndSexo:{depends:true}
		},
		codNacionalidad:{
			valCodNacionalidad:{depends:true}
		},
		codPaisUbiNac:{
			required: true
		},
		codUbigeoNacDepa:{
			required: true
		},
		codUbigeoNacProv:{
			required: true
		},
		codUbigeoNac:{
			required: true
		},
		indEstCivil:{
			required: true
		},
		codTelefLarDis:{
			valCodTelefLarDis:{depends:true}
		},
		numTelef:{
			minlength: 6,
			maxlength: 9,
			valNumTelef:{depends:true}
		},
		codCelLarDis:{
			valCodCelLarDis:{depends:true}
		},
		numCelular:{
			valNumCelular:{depends:true}
		},
		desCorreo:{
			valDesCorreo:{depends:true}
		},
		//domicilio actual
		codUbigeoDir2Depa:{
			valCodUbigeoDir2Depa:{depends:true}
		},
		codUbigeoDir2Prov:{
			valCodUbigeoDir2Prov:{depends:true}
		},
		codUbigeoDir2:{
			valCodUbigeoDir2:{depends:true}
		},
		codViaDir2:{
			valCodViaDir2:{depends:true}
		},
		nomViaDir2:{
			valNomViaDir2:{depends:true}
		},
		codZonaDir2:{
			valCodZonaDir2:{depends:true}
		},
		nomZonaDir2:{
			valNomZonaDir2:{depends:true}
		},
		numViaDir2:{
			valNumViaDir2:{depends:true},
			pattern:"^([0-9]*|sn)?$"
		},
		numKilomDir2:{
			valNumKilomDir2:{depends:true},
			valNumKilomDir2WithVia:{depends:true}
		},
		desReferDir2:{
			valDesReferDir2:{depends:true}
		},
		//domicilio manual reniec
		codUbigeoDir1Depa:{
			valCodUbigeoDir1Depa:{depends:true}
		},
		codUbigeoDir1Prov:{
			valCodUbigeoDir1Prov:{depends:true}
		},
		codUbigeoDir1:{
			valCodUbigeoDir1:{depends:true}
		},
		codViaDir1:{
			valCodViaDir1:{depends:true}
		},
		nomViaDir1:{
			valNomViaDir1:{depends:true}
		},
		codZonaDir1:{
			valCodZonaDir1:{depends:true}
		},
		nomZonaDir1:{
			valNomZonaDir1:{depends:true}
		},
		numViaDir1:{
			valNumViaDir1:{depends:true},
			pattern:"^([0-9]*|sn)?$"
		},
		numKilomDir1:{
			valNumKilomDir1:{depends:true},
			valNumKilomDir1WithVia:{depends:true}
		},
		desReferDir1:{
			valDesReferDir1:{depends:true}
		},
		indDiscapacidad:{
			valIndDiscapacidad:{depends:true},
			valIndDiscapacidadConadis:{depends:true},
		}
    },
    messages: {
    	codDocum:{
			required: 'Seleccione el Tipo de Documento.'
		},
    	numDocum:{
			required: 'Seleccione el Número de Documento.'
		},
		fecNacimiento:{
			required: 'Ingrese la Fecha de Nacimiento.'
		},
		nomPersonal:{
			required: 'Ingrese el Nombre completo.'
		},
		codPaisUbiNac:{
			required: 'Seleccione el País del Ubigeo de Nacimiento.'
		},
		indEstCivil:{
			required: 'Seleccione el Estado Civil.'
		},
		numTelef:{
			minlength: 'Ingrese un Número de Teléfono válido.',
			maxlength: 'Ingrese un Número de Teléfono válido.'
		},
		codUbigeoNacDepa:{
			required: 'Seleccione el Departamento.'
		},
		codUbigeoNacProv:{
			required: 'Seleccione la Provincia.'
		},
		codUbigeoNac:{
			required: 'Seleccione el Distrito.'
		},
		numViaDir2:{
			pattern:"Ingrese número válido."
		},
		numViaDir1:{
			pattern:"Ingrese número válido."
		}
	},
	highlight: function (e) {
		if($(e).is("input[tipo^='addon']")||$(e).is("select[tipo^='addon']")) {
			$(e).closest('.custom-form-group').addClass('has-error');
			$(e).addClass('has-error');		
		}else{
			$(e).parent().addClass('has-error');
		}
	},
	success: function (e) {
		$(e).parent().removeClass('has-error');
		$(e).closest('.input-group').removeClass('has-error');
		$(e).remove();
	},
	errorPlacement: function (error, element) {
		if(element.is("input[tipo^='addon']")||element.is("select[tipo^='addon']")) {
			if(element.attr("type") == 'radio')
				error.insertAfter(element.parent().parent());
			else
				error.insertAfter(element.parent());
		}else{
			error.insertAfter(element);	
		}
	},
	submitHandler: function (form) {
		var declaracion = convertirFormAObject($("#frmRegistrarDeclaracion").serializeArray());
		declaracion.archivosReferDomicilio = listaArchivosReferDomicilio;
		declaracion.archivosEstadoCivil =  listaArchivosEstadoCivil;
		declaracion.archivosDiscapacidad =  listaArchivosDiscapacidad;
		declaracion.numDocum = $("#numDocum").val();
		
		//elementos no utilizados
		delete declaracion.codUbigeoNacDepa;
		delete declaracion.codUbigeoNacProv;
		delete declaracion.codUbigeoDir1Depa;
		delete declaracion.codUbigeoDir1Prov;
		delete declaracion.codUbigeoDir2Depa;
		delete declaracion.codUbigeoDir2Prov;
		
		registrarActualizarDeclaracionAjax(declaracion);//nuevo
			
	},
	invalidHandler: function (e,validator) {
		console.log("invalidHandler");
		var idPanelColapsado;
		for (var i=0;i<validator.errorList.length;i++){
			idPanelColapsado = $(validator.errorList[i].element).closest('.panel-collapse.collapse').attr('id');
			break;
		}
		if(!$('#'+idPanelColapsado).hasClass('in'))
			$('#'+idPanelColapsado+'_link').click();
	}
});




//pais emisor de documento
$.validator.addMethod("valCodPaisEmiDoc", function(codPaisEmiDoc, element) {
	var codDocum = $('#codDocum').val();
	if (codDocum == '07' && esVacioNulo(codPaisEmiDoc)) //pasaporte
		return false;
	return true;
}, "Seleccione el País Emisor del Documento.");

//fecha de nacimiento
$.validator.addMethod("valFecNacimiento", function(value, element) {
	var fecNacimiento = $('#divFecNacimiento').data('DateTimePicker').date();
	var today = new Date();
	return fecNacimiento <= today;
}, "Ingrese una Fecha de Nacimiento válida, anterior al día de hoy.");

//apellido paterno o materno
$.validator.addMethod("valApePat", function(apePat, element) {
	var apeMat = $('#apeMat').val();
	if (esVacioNulo(apePat) && esVacioNulo(apeMat)) 
		return false;
	return true;
}, "Ingrese al menos un Apellido (paterno o materno).");

//sexo
$.validator.addMethod("valIndSexo", function(value, element) {
	return $("#indSexoMas").is(':checked') || $("#indSexoFem").is(':checked')
}, "Seleccione el Sexo.");

//nacionalidad
$.validator.addMethod("valCodNacionalidad", function(codNacionalidad, element) {
	var codDocum = $('#codDocum').val();
	if ((codDocum == '04' || codDocum == '07') && esVacioNulo(codNacionalidad)) //ce - pasaporte
		return false;
	return true;
}, "Seleccione la Nacionalidad.");

//número de teléfono
$.validator.addMethod("valCodTelefLarDis", function(codTelefLarDis, element) {
	var numTelef = $('#numTelef').val();
	if(!esVacioNulo(numTelef) && esVacioNulo(codTelefLarDis))
		return false;
	return true;
}, "Seleccione el Codigo de Ciudad.");

$.validator.addMethod("valNumTelef", function(numTelef, element) {
	var codTelefLarDis = $('#codTelefLarDis').val();
	//sin dato
	if(esVacioNulo(numTelef) && !esVacioNulo(codTelefLarDis)){
		configurarMensajeValidator('valNumTelef',this, element, 'Ingrese el Número de Teléfono.');
		return false;
	}
	//con dato
	var mensajeNumTelef = validarTelefono(numTelef);
	if(!esVacioNulo(mensajeNumTelef)){
		configurarMensajeValidator('valNumTelef',this, element, mensajeNumTelef);
		return false;
	}
	return true;
}, 'Ingrese un Número de Teléfono correcto.');

//número de celular
$.validator.addMethod("valCodCelLarDis", function(codCelLarDis, element) {
	var numCelular = $('#numCelular').val();
	if(!esVacioNulo(numCelular) && esVacioNulo(codCelLarDis))
		return false;
	return true;
}, "Seleccione el Codigo de Ciudad.");

$.validator.addMethod("valNumCelular", function(numCelular, element) {
	var codCelLarDis = $('#codCelLarDis').val();
	//sin dato
	if(esVacioNulo(numCelular) && !esVacioNulo(codCelLarDis)){
		configurarMensajeValidator('valNumCelular',this, element, 'Ingrese el Número de Celular.');
		return false;
	}
	//con dato
	if(isNaN(numCelular)){
		configurarMensajeValidator('valNumCelular',this, element, 'Ingrese caracteres numéricos para el Número de Celular.');
		return false;
	}
	return true;
}, 'Ingrese un Número de Celular correcto.');

//validar correo
$.validator.addMethod("valDesCorreo", function(desCorreo, element) {
	if(!esVacioNulo(desCorreo) && !validacorreo(desCorreo))
		return false;
	return true;
}, "Ingrese un Correo válido.");

// =========================
// domicilio actual - ubigeo
// =========================
$.validator.addMethod("valCodUbigeoDir2Depa", function(codUbigeoDir2Depa, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(codUbigeoDir2Depa))
		return false;
	return true;
}, "Ingrese el Departamento.");
$.validator.addMethod("valCodUbigeoDir2Prov", function(codUbigeoDir2Prov, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(codUbigeoDir2Prov))
		return false;
	return true;
}, "Ingrese la Provincia.");
$.validator.addMethod("valCodUbigeoDir2", function(codUbigeoDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(codUbigeoDir2))
		return false;
	return true;
}, "Ingrese el Distrito.");

$.validator.addMethod("valCodViaDir2", function(codViaDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(codViaDir2))
		return false;
	return true;
}, "Ingrese el Tipo de Vía.");
$.validator.addMethod("valCodZonaDir2", function(codZonaDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(codZonaDir2))
		return false;
	return true;
}, "Ingrese el Tipo de Zona.");
$.validator.addMethod("valNomViaDir2", function(nomViaDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(nomViaDir2))
		return false;
	return true;
}, "Ingrese el Nombre de la Vía.");
$.validator.addMethod("valNomZonaDir2", function(nomZonaDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(nomZonaDir2))
		return false;
	return true;
}, "Ingrese el Nombre de la Zona.");
$.validator.addMethod("valNumViaDir2", function(numViaDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	if(esDomiActualEditado == '1' && esVacioNulo(numViaDir2))
		return false;
	return true;
}, "Ingrese Nro. de Vía, si no tiene ingresar \"sn\".");
$.validator.addMethod("valNumKilomDir2", function(numKilomDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	var numManzDir2 = $('#numManzDir2').val();
	var numLoteDir2 = $('#numLoteDir2').val();
	var numViaDir2 = $('#numViaDir2').val();
	
	if(esDomiActualEditado == '1'){
		if(numViaDir2 == 'sn' && esVacioNulo(numKilomDir2) && esVacioNulo(numManzDir2) && esVacioNulo(numLoteDir2)){
			return false;
		}
	}
	return true;
}, 'Ingrese Nro. de Vía, Manzana, Lote o Kilómetro.');
$.validator.addMethod("valNumKilomDir2WithVia", function(numKilomDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	var numViaDir2 = $('#numViaDir2').val();
	
	if(esDomiActualEditado == '1'){
		if(!esVacioNulo(numViaDir2) && numViaDir2 != 'sn' && numKilomDir2 != ''){
			return false;
		}
	}
	return true;
}, 'No puede ingresar Kilómetro si ya registró el Nro. de Vía.');


$.validator.addMethod("valDesReferDir2", function(desReferDir2, element) {
	var esDomiActualEditado = $('#esDomiActualEditado').val();
	var numViaDir2 = $('#numViaDir2').val();
	if(esDomiActualEditado == '1' && numViaDir2 == 'sn' && esVacioNulo(desReferDir2))
		return false;
	return true;
}, "Ingrese una Referencia.");

//=======================
//domicilio manual reniec
//=======================
$.validator.addMethod("valCodUbigeoDir1Depa", function(codUbigeoDir1Depa, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(codUbigeoDir1Depa))
		return false;
	return true;
}, "Ingrese el Departamento.");
$.validator.addMethod("valCodUbigeoDir1Prov", function(codUbigeoDir1Prov, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(codUbigeoDir1Prov))
		return false;
	return true;
}, "Ingrese la Provincia.");
$.validator.addMethod("valCodUbigeoDir1", function(codUbigeoDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(codUbigeoDir1))
		return false;
	return true;
}, "Ingrese el Distrito.");

$.validator.addMethod("valCodViaDir1", function(codViaDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(codViaDir1))
		return false;
	return true;
}, "Ingrese el Tipo de Vía.");
$.validator.addMethod("valCodZonaDir1", function(codZonaDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(codZonaDir1))
		return false;
	return true;
}, "Ingrese el Tipo de Zona.");
$.validator.addMethod("valNomViaDir1", function(nomViaDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(nomViaDir1))
		return false;
	return true;
}, "Ingrese el Nombre de la Vía.");
$.validator.addMethod("valNomZonaDir1", function(nomZonaDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(nomZonaDir1))
		return false;
	return true;
}, "Ingrese el Nombre de la Zona.");
$.validator.addMethod("valNumViaDir1", function(numViaDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	if(!esReniec && esVacioNulo(numViaDir1))
		return false;
	return true;
}, "Ingrese Nro. de Vía, si no tiene ingresar \"sn\".");
$.validator.addMethod("valNumKilomDir1", function(numKilomDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	var numManzDir1 = $('#numManzDir1').val();
	var numLoteDir1 = $('#numLoteDir1').val();
	var numViaDir1 = $('#numViaDir1').val();
	
	if(!esReniec){
		if(numViaDir1 == 'sn' && esVacioNulo(numKilomDir1) && esVacioNulo(numManzDir1) && esVacioNulo(numLoteDir1)){
			return false;
		}
	}
	return true;
}, 'Ingrese Nro. de Vía, Manzana, Lote o Kilómetro.');
$.validator.addMethod("valNumKilomDir1WithVia", function(numKilomDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	var numViaDir1 = $('#numViaDir1').val();
	
	if(!esReniec){
		if(!esVacioNulo(numViaDir1) && numViaDir1 != 'sn' && numKilomDir1 != ''){
			return false;
		}
	}
	return true;
}, 'No puede ingresar Kilómetro si ya registró el Nro. de Vía.');


$.validator.addMethod("valDesReferDir1", function(desReferDir1, element) {
	var esReniec = $('#codDocum').val()=='01' && $('#indReniec').val()=='1';
	var numViaDir1 = $('#numViaDir1').val();
	if(!esReniec && numViaDir1 == 'sn' && esVacioNulo(desReferDir1))
		return false;
	return true;
}, "Ingrese una Referencia.");

//discapacidad
$.validator.addMethod("valIndDiscapacidad", function(value, element) {
	return $("#indDiscapacidadSi").is(':checked') || $("#indDiscapacidadNo").is(':checked')
}, "Indique si posee alguna discapacidad.");

$.validator.addMethod("valIndDiscapacidadConadis", function(value, element) {
	if($("#indDiscapacidadSi").is(':checked')){
		for(var i=0; i<listaArchivosDiscapacidad.length; i++){
			if(listaArchivosDiscapacidad[0].codAccion!='3')
				return true;
		}
		return false
	}
	return true;
}, "Debe adjuntar la resolución del CONADIS.");
