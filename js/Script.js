function calcular() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let media = (nota1 + nota2 + nota3) / 3;
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem");''
    let resultado = document.getElementById("resultado");
    resultado.textContent = `ola ${nome}, sua média é: ${media.toFixed(1)}`
    
    if (media >= 6) { 
        mensagem.textContent = `Você foi aprovado.`;
    } else {
        mensagem.textContent = `Você foi reprovado.`;
    }
}

