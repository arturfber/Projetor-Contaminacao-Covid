document.querySelector('#submit').addEventListener('click', function(e){
    let valor = Number(document.querySelector('#valor').value);
    predict(valor);
})
document.querySelector("#valor").addEventListener('click', function(e){
    apagarInput()
});
document.querySelector('#valor').addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        let valor = Number(document.querySelector('#valor').value);
        predict(valor);
    }
});


function predict(dias){

    // Rejeitar valores menores que 0
    if(dias > 0){

        // Número total de casos confirmados no Brasil até o dia 17/03/2021
        let casosConfirmados = 11706639;
        // Taxa de transmissão estipulada no Brasil até o dia 17/03/2021
        let taxaTransmissao = 1.23;
        console.log("Total de dias: " + dias);
                   
        let result = document.querySelector('#resultado');

        result.innerHTML = ''

        // Uma pessoa infectada com o vírus pode começar a transmití-lo na média de 5 dias
        for(count = 1; count <= dias; count+=5){
            
            result.innerHTML = result.innerHTML + '<li>' + count + ' 🡆 ' + casosConfirmados.toLocaleString('en-US') + '</li>';
            casosConfirmados = casosConfirmados * taxaTransmissao;
            
        }
    }        
    else{
        document.querySelector('#resultado').innerHTML = "Por favor, insira um valor maior que 0."
        console.log("Por favor, insira um valor maior que 0.");
    }
}

function apagarInput(){
    document.querySelector('#valor').value = ''
}
