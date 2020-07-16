function goHome() {
    window.location.href = '/web'
}

function showLoader() {
    var pokemonBall = document.getElementsByClassName('pokemon-ball');
    pokemonBall.item(0).style.display = "block";
}

function hideLoader() {
    var pokemonBall = document.getElementsByClassName('pokemon-ball');
    pokemonBall.item(0).style.display = "none";
}