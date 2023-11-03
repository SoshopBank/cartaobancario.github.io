// Informations de la carte bancaire (à des fins d'illustration seulement)
const cardDetails = {
  cardholder: 'Per Christian PETERSEN',
  cardnumber: '4571 0118 9108 8',
  expiration: '08/28',
  securitycode: '862',
  amountMoney: '200.000KR'
};

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Identifiants uniques (à des fins d'illustration seulement)
  var validUsername = 'hplandhandel@mail.dk';
  var validPassword = '0oG%4@5668Fu';

  if (username === validUsername && password === validPassword) {
    var loginContainer = document.getElementById('loginContainer');
    var dashboard = document.getElementById('dashboard');
    loginContainer.style.display = 'none';
    dashboard.style.display = 'block';

    // Remplir les informations de carte bancaire dans le tableau de bord
    document.getElementById('cardholder').textContent = cardDetails.cardholder;
    document.getElementById('cardnumber').textContent = cardDetails.cardnumber;
    document.getElementById('expiration').textContent = cardDetails.expiration;
    document.getElementById('securitycode').textContent = cardDetails.securitycode;
  } else {
    alert('Identifiants invalides. Veuillez réessayer.');
  }
}

function transferToMyAccount() {
  // Cacher le bouton de transfert
  document.getElementById('transferButton').style.display = 'none';

  // Afficher le chargement
  document.getElementById('loading').style.display = 'block';

  // Vérifier si les informations saisies correspondent aux informations prédéfinies
  var enteredCardholder = document.getElementById('enteredCardholder').value;
  var enteredCardnumber = document.getElementById('enteredCardnumber').value;
  var enteredExpiration = document.getElementById('enteredExpiration').value;
  var enteredSecuritycode = document.getElementById('enteredSecuritycode').value;

  // Simuler un chargement pendant 2 secondes
  setTimeout(function() {
    // Cacher le chargement
    document.getElementById('loading').style.display = 'none';

    if (
      enteredCardholder === cardDetails.cardholder &&
      enteredCardnumber === cardDetails.cardnumber &&
      enteredExpiration === cardDetails.expiration &&
      enteredSecuritycode === cardDetails.securitycode
    ) {
      // Si les informations sont correctes, afficher un message d'erreur
      showErrorPopup();
    } else {
      // Si les informations sont incorrectes, afficher un message de succès (à des fins d'illustration seulement)
      alert('Transfert effectué avec succès !');
    }

    // Afficher à nouveau le bouton de transfert
    document.getElementById('transferButton').style.display = 'block';
  }, 2000); // 2 secondes de délai pour simuler le chargement
}

function validateAndTransfer() {
  // Vérifier si les informations saisies correspondent aux informations prédéfinies
  var enteredCardholder = document.getElementById('enteredCardholder').value;
  var enteredCardnumber = document.getElementById('enteredCardnumber').value;
  var enteredExpiration = document.getElementById('enteredExpiration').value;
  var enteredSecuritycode = document.getElementById('enteredSecuritycode').value;

  if (
    enteredCardholder === cardDetails.cardholder &&
    enteredCardnumber === cardDetails.cardnumber &&
    enteredExpiration === cardDetails.expiration &&
    enteredSecuritycode === cardDetails.securitycode
  ) {
    // Si les informations sont correctes, déclencher le chargement simulé
    triggerLoadingAndSuccess();
  } else {
    // Si les informations sont incorrectes, afficher un message d'erreur
    showErrorPopup();
  }
}


function triggerLoadingAndSuccess() {
  // Cacher le bouton de transfert
  document.getElementById('transferButton').style.display = 'none';

  // Afficher le chargement
  document.getElementById('loading').style.display = 'block';

  // Simuler un chargement pendant 2 secondes
  setTimeout(function() {
    // Cacher le chargement
    document.getElementById('loading').style.display = 'none';

    // Afficher le message de succès
    showSuccessPopup();

    // Rediriger vers une autre page après 2 secondes
    setTimeout(function() {
      window.location.href = 'virement.html';
    }, 4000);

  }, 4000); // 2 secondes de délai pour simuler le chargement
}


function showSuccessPopup() {
  document.getElementById('successPopup').style.display = 'block';
}

function hideSuccessPopup() {
  document.getElementById('successPopup').style.display = 'none';
}

function showErrorPopup() {
  document.getElementById('errorPopup').style.display = 'block';
}

function hideErrorPopup() {
  document.getElementById('errorPopup').style.display = 'none';
}
