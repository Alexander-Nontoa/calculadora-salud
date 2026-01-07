function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const estatura = parseFloat(document.getElementById("estatura").value) / 100;

    if (!peso || !estatura) {
        document.getElementById("resultado").innerHTML = "Por favor ingresa datos válidos.";
        return;
    }

    const imc = (peso / (estatura * estatura)).toFixed(2);

    let estado = "";

    if (imc < 18.5) estado = "Bajo peso";
    else if (imc < 25) estado = "Normal";
    else if (imc < 30) estado = "Sobrepeso";
    else estado = "Obesidad";

    document.getElementById("resultado").innerHTML = 
        `Tu IMC es <strong>${imc}</strong><br>Estado: <strong>${estado}</strong>`;
}
