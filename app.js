function codificar() {
  const textAreaMsg = document.getElementById('textAreaEntrada').value;
  document.getElementById('textAreaSaida').innerHTML = textAreaMsg
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
} 

function decodificar() {
  const textAreaMsg = document.getElementById('textAreaEntrada').value;
  const msgDecode = textAreaMsg
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  document.getElementById('textAreaSaida').innerHTML = msgDecode;  
} 

function verificarTextArea() {
  const textAreaSaida = document.getElementById('textAreaSaida').value.trim();
  const botaoCopiar = document.getElementById('copy');
  const img = document.getElementById('imagem');

  if (textAreaSaida.length > 0) {
    img.style.display = 'none'
    botaoCopiar.style.display = 'inline-block';
  } else {
    img.style.display = 'flex'
    botaoCopiar.style.display = 'none';
  }
}

function aoClicar() {
  codificar();
  verificarTextArea();
}

function copiar() {
  const textAreaSaida = document.getElementById('textAreaSaida').innerHTML;
  navigator.clipboard.writeText(textAreaSaida).then(() => {
    alert('Texto copiado para a área de transferência!');
  }, () => {
    alert('Falha ao copiar o texto.');
  });
}