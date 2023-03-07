const calcular = document.getElementById("calcular");

calcular.addEventListener("click", function () {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  
  if (!Number.isInteger(altura)) {
    var newNumber = altura / 100;
    console.log(newNumber);
    var calculo = peso / (newNumber * newNumber);
    respostaIMC(calculo);
  } else {
    var n1 = parseFloat(altura.replace(",", "."));
    var calculo = peso / (n1 * n1);
    console.log(n1);
    respostaIMC(calculo);
  }
 
});

function respostaIMC(resultado) {
  const result = document.getElementById("resposta");
  if (!isNaN(resultado)) {
    if (resultado < 18.5) {
      result.style.visibility = "visible";
      result.style.color = "#71b9db";
      return (result.innerHTML = "Magreza");
    } else if (resultado < 24.9) {
      result.style.visibility = "visible";
      result.style.color = "#73db71";
      return (result.innerHTML = "Normal");
    } else if (resultado < 29.9) {
      result.style.visibility = "visible";
      result.style.color = "#dbcb71";
      return (result.innerHTML = "Sobrepeso");
    } else if (resultado < 34.9) {
      result.style.visibility = "visible";
      result.style.color = "#db9d71";
      return (result.innerHTML = "Obesidade grau I");
    } else if (resultado < 39.9) {
      result.style.visibility = "visible";
      result.style.color = "#db7c71";
      return (result.innerHTML = "Obesidade grau II");
    } else {
      result.style.visibility = "visible";
      result.style.color = "#e94545";
      return (result.innerHTML = "Obesidade grau III");
    }
  } else {
    result.style.visibility = "visible";
    return (result.innerHTML = "Sem Valor");
  }
}
