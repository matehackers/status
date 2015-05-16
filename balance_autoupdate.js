var updateStatus = function() {
  var request = new XMLHttpRequest();
  request.open('GET', '/_financeiro/balance', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log("Status financeiro atualizado");
      var data = JSON.parse(request.responseText);
      document.getElementById("balance").value = parseFloat(data["balance"]);
      document.getElementById("balance-human").innerHTML = data["balance"];
    }
  }

  request.onerror = function() {
    console.log("Erro de conexão financeira");
  };

  request.send();
  setTimeout(updateStatus, 1000 * 60 * 3);
}

$(document).ready(updateStatus);
