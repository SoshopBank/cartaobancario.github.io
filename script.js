// Informations de la carte bancaire (à des fins d'illustration seulement)
const cardDetails = {
  cardholder: 'John Doe',
  cardnumber: '1234 5678 9012 3456',
  expiration: '12/24',
  securitycode: '123',
};

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Identifiants uniques (à des fins d'illustration seulement)
  var validUsername = 'john_doe';
  var validPassword = 'secret';

  if (username === validUsername && password === validPassword) {
    var loginContainer = document.querySelector('.login-container');
    var dashboard = document.getElementById('dashboard');
    loginContainer.style.display = 'none';
    dashboard.style.display = 'block';

    // Remplir les informations de carte bancaire dans le tableau de bord
    document.getElementById('cardholder').textContent = cardDetails.cardholder;
    document.getElementById('cardnumber').textContent = cardDetails.cardnumber;
    document.getElementById('expiration').textContent = cardDetails.expiration;
    document.getElementById('securitycode').textContent = cardDetails.securitycode;

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
      document.getElementById('transferButton').style.display = 'block';
    } else {
      document.getElementById('transferButton').style.display = 'none';
    }
  } else {
    alert('Identifiants invalides. Veuillez réessayer.');
  }
}

function showErrorPopup() {
  // Afficher le popup d'erreur seulement si le bouton de transfert est visible
  if (document.getElementById('transferButton').style.display === 'block') {
    var popup = document.getElementById('errorPopup');
    popup.style.display = 'block';
  }
}

function hideErrorPopup() {
  var popup = document.getElementById('errorPopup');
  popup.style.display = 'none';
}
