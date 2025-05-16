let contador = parseInt(localStorage.getItem("contador")) || 0;
atualizarTela();

function atualizarTela() {
  document.getElementById("contador").textContent = contador;
  localStorage.setItem("contador", contador);
}

function incrementar() {
  contador++;
  atualizarTela();
}

function decrementar() {
  contador--;
  atualizarTela();
}

function zerar() {
  contador = 0;
  atualizarTela();
}
