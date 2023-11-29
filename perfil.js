




var agora = new Date();
	dia = agora.getDate();
	mes = agora.getMonth() + 1;
	hora = agora.getHours();

function calc() {

        var valorTorrado = document.getElementById('valor_torrado').value;
        var relacaoExtracao = document.getElementById('relExt').value;        
        var resultTor = valorTorrado * relacaoExtracao;
	

        var valorDiluido = document.getElementById('valor_diluido').value;


        var totDiluido = Number.parseFloat(resultTor) + Number.parseFloat(valorDiluido);
	var torre1 = document.getElementById('vazaoTor1').value;
	var torre2 = document.getElementById('vazaoTor2').value;
	var vazaoTotTorres = Number.parseFloat(torre1) + Number.parseFloat(torre2);

	var concentrado = document.getElementById('valor_concentrado').value;
	var rendConcentrador = document.getElementById('rendConcentrador').value;

	

	var totConc = Number.parseFloat(concentrado) + Number.parseFloat(totDiluido) * Number.parseFloat(rendConcentrador);
	
	
        var diaOut = document.getElementById('diaOut').value;
	var horaOut = document.getElementById('horaOut').value;
	var horasDia = (diaOut - dia) * 24 + Number.parseInt(horaOut) - hora;

	var QTDtorras = ((((horasDia - totConc / vazaoTotTorres) * vazaoTotTorres) * 0.5) / 0.485 ) / 450;

	var result = document.getElementById('result');
        result.innerText = `Quantidade de cargas para torrar: ${(QTDtorras).toFixed(2)}...`

        
	
        

        

        
        
        
        


    }

// Number.parseFloat(concentrado) + (totConc / vazaoTotTorres).toFixed(2) horasOut




function calc_pcp() {
	var prod0 = document.getElementById('peso0').value;
	var unit0 = document.getElementById('unit0').value;
	var prod1 = document.getElementById('peso1').value;
	var unit1 = document.getElementById('unit1').value;
	var prod2 = document.getElementById('peso2').value;
	var unit2 = document.getElementById('unit2').value;

	var torre1 = document.getElementById('valor_Emb0').value * document.getElementById('pesoEmb0').value;
	var torre2 = document.getElementById('valor_Emb1').value * document.getElementById('pesoEmb1').value;

	var torrado = document.getElementById('valor_torrado').value * (document.getElementById('renTor').value / 100);
	var diluido = document.getElementById('valor_diluido').value * (document.getElementById('brix_diluido').value / 100);
	var concentrado = document.getElementById('valor_concentrado').value * (document.getElementById('brix_concentrado').value / 100);

	var Falta = document.getElementById('Falta');

	//se os campos não forem preechidos apresentar uma mensagem de alerta

	if (prod0 == "" && unit0 == "" && prod1 == "" && unit1 == "" && prod2 == "" && unit2 == "") {
		alert('Atenção! Campos importantes precisão ser preenchidos.');
		document.getElementById('peso0').style.border = "red 2px solid";
		document.getElementById('unit0').style.border = "red 2px solid";
		document.getElementById('peso1').style.border = "red 2px solid";
		document.getElementById('unit1').style.border = "red 2px solid";
		document.getElementById('peso2').style.border = "red 2px solid";
		document.getElementById('unit2').style.border = "red 2px solid";

	} else {
		document.getElementById('peso0').style.border = "";
		document.getElementById('unit0').style.border = "";
		document.getElementById('peso1').style.border = "";
		document.getElementById('unit1').style.border = "";
		document.getElementById('peso2').style.border = "";
		document.getElementById('unit2').style.border = "";


		if (document.getElementById('valor_Emb0').value == "" || document.getElementById('pesoEmb0').value == "" ||
			document.getElementById('valor_Emb1').value == "" || document.getElementById('pesoEmb1').value == "" || document.getElementById('valor_torrado').value == "" || document.getElementById('renTor').value == "" || document.getElementById('valor_diluido').value == "" || document.getElementById('brix_diluido').value == "" || document.getElementById('valor_concentrado').value == "" || document.getElementById('brix_concentrado').value == "") {
			document.getElementById('valor_Emb0').style.border = "red 2px solid";
			document.getElementById('pesoEmb0').style.border = "red 2px solid";
			document.getElementById('valor_Emb1').style.border = "red 2px solid";
			document.getElementById('pesoEmb1').style.border = "red 2px solid";
			document.getElementById('valor_torrado').style.border = "red 2px solid";
			document.getElementById('renTor').style.border = "red 2px solid";
			document.getElementById('valor_diluido').style.border = "red 2px solid";
			document.getElementById('brix_diluido').style.border = "red 2px solid";
			document.getElementById('valor_concentrado').style.border = "red 2px solid";
			document.getElementById('brix_concentrado').style.border = "red 2px solid";

			alert('Atenção! Campos importantes precisão ser preenchidos.');

		} else {
			document.getElementById('valor_Emb0').style.border = "";
			document.getElementById('pesoEmb0').style.border = "";
			document.getElementById('valor_Emb1').style.border = "";
			document.getElementById('pesoEmb1').style.border = "";
			document.getElementById('valor_torrado').style.border = "";
			document.getElementById('renTor').style.border = "";
			document.getElementById('valor_diluido').style.border = "";
			document.getElementById('brix_diluido').style.border = "";
			document.getElementById('valor_concentrado').style.border = "";
			document.getElementById('brix_concentrado').style.border = "";

			document.getElementById('result_torrado').value = torrado;
			document.getElementById('result_diluido').value = diluido;
			document.getElementById('result_concentrado').value = concentrado
			document.getElementById('result_torre1').value = torre1;
			document.getElementById('result_torre2').value = torre2;


			var res = document.getElementsByTagName('p')[0];
			var res_prod = document.getElementById('res_prod');


			a = (Number.parseFloat((prod0 * unit0).toFixed(2)) + Number.parseFloat((prod1 * unit1).toFixed(2)) + Number.parseFloat((prod2 * unit2).toFixed(2)));
			b = (Number.parseFloat(torre1) + Number.parseFloat(torre2) + Number.parseFloat(torrado) + Number.parseFloat(diluido) + Number.parseFloat(concentrado));

			res.innerHTML = `${(Number.parseFloat((prod0 * unit0).toFixed(2)) + Number.parseFloat((prod1 * unit1).toFixed(2)) + Number.parseFloat((prod2 * unit2).toFixed(2)))} de produção`;

			res_prod.innerHTML = ` Total de Pó em Linha: ${Number.parseFloat(torre1) + Number.parseFloat(torre2) + Number.parseFloat(torrado) + Number.parseFloat(diluido) + Number.parseFloat(concentrado)}`;

			Falta.innerHTML = `Faltam ${(((a - b) / 0.49) / 450).toFixed(0)} cargas para torrar `;

			//alert(Rtorrado)
		}


	}

}
