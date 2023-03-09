const calcular = document.getElementById("calcular");

calcular.addEventListener("click", function () {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var result = document.getElementById("resposta");

  if (altura != "" && peso != "") {
    altura = parseFloat(altura.replace(",", "."));
    peso = parseFloat(peso.replace(",", "."));
    if (altura > 3) {
      altura = altura / 100;
    }

    var imc = peso / Math.pow(altura, 2)

    return respostaIMC(imc);
  } else {
    result.style.visibility = "visible";
    result.style.color = "#ff0000";
    return (result.innerHTML = "Sem Valor, preencrer os campos!")
  }

});

function respostaIMC(imc) {
  const result = document.getElementById("resposta");

  if (imc < 18.5) {
    result.style.visibility = "visible";
    result.style.color = "#71b9db";
    return (result.innerHTML = "Magreza");
  } else if (imc < 24.9) {
    result.style.visibility = "visible";
    result.style.color = "#73db71";
    return (result.innerHTML = "Normal");
  } else if (imc < 29.9) {
    result.style.visibility = "visible";
    result.style.color = "#dbcb71";
    return (result.innerHTML = "Sobrepeso");
  } else if (imc < 34.9) {
    result.style.visibility = "visible";
    result.style.color = "#db9d71";
    return (result.innerHTML = "Obesidade grau I");
  } else if (imc < 39.9) {
    result.style.visibility = "visible";
    result.style.color = "#db7c71";
    return (result.innerHTML = "Obesidade grau II");
  } else {
    result.style.visibility = "visible";
    result.style.color = "#e94545";
    return (result.innerHTML = "Obesidade grau III");
  }
}
