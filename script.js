function participar() {
  alert("Inscrições abertas em breve! Acompanhe nossas redes.");
}

document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msgEnviada").innerText = "Mensagem enviada com sucesso!";
  this.reset();
});
