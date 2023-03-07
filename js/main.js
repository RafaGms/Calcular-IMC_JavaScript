const calcular = document.getElementById('calcular');

calcular.addEventListener('click', function () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calculo = peso / (altura * altura);
    respostaIMC(calculo);
    console.log(calculo);
  });

  function respostaIMC(resultado){
    const result = document.getElementById('resposta')
    console.log(typeof(resultado));
if(typeof(resultado) == "number" && resultado != NaN){
    if(resultado < 18.5){
        return result.innerHTML = "Magreza"
    }
    else if(resultado < 24.9){
        return result.innerHTML = "Normal"
    }
    else if(resultado < 29.9){
        return result.innerHTML = "Sobrepeso"
    }
    else if(resultado < 34.9){
        return result.innerHTML = "Obesidade grau I"
    }
    else if(resultado < 39.9){
        return result.innerHTML = "Obesidade grau II"
    }
    else{
        return result.innerHTML = "Obesidade grau III"
    }
}
else{
    return result.innerHTML = "Sem valor"
}
    
 }

    
  

