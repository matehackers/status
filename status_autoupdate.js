var updateStatus = function () {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://matehackers.org/_mateaberto/status.json?t=' + new Date().getTime(), true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log("Status atualizado");
      var data = JSON.parse(request.responseText);
      if (data["state"]["open"]) {
        document.getElementById("status").innerHTML = "<img src=\"_media/aberto.png\" />";
      } else {
        document.getElementById("status").innerHTML = "<img src=\"_media/fechado.png\" />";
      }
    } else {
      console.log("A conexão com o servidor ocorreu, mas retornou algum erro");
    }
  };

  request.onerror = function(error) {
    console.log(error);
    console.log("Erro de conexão");
  };

  request.send();
    setTimeout(updateStatus, 1000 * 60 * 3);
  }

$(document).ready(updateStatus);
