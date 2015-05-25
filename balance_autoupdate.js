var updateBalancea = function() {
  var request = new XMLHttpRequest();
  request.open('GET', '/_financeiro/balance', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      console.log("Status financeiro atualizado");
      var data = JSON.parse(request.responseText);
      jQuery("#balance").val(parseFloat(data["balance"]));
      jQuery("#balance-human").html(data["balance"]);

      jQuery("#last-update time").attr('datetime', data["lastUpdate"]);
      jQuery("#last-update time").html(data["lastUpdateHuman"]);

      jQuery("#days-remaining").attr('data-days', data["daysRemaining"]);
      jQuery("#days-remaining").html(data["daysRemaining"]);
    }
  };

  request.onerror = function() {
    console.log("Erro de conexão financeira");
  };

  request.send();
  setTimeout(updateBalance, 1000 * 60 * 3);
};
