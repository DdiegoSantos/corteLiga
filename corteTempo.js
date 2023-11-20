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