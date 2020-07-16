function goHome() {
    window.location.href = '/web'
}

function showLoader() {
    [].forEach.call(document.getElementsByClassName('circle'), function (el) {
        el.style.display = 'block';
    });
}

function hideLoader() {
    [].forEach.call(document.getElementsByClassName('circle'), function (el) {
        el.style.display = 'none';
    });
}

function toggleSattelites() {
    var sattelites = document.getElementsByClassName('sattelites');
    sattelites.item(0).style.display = sattelites.item(0).style.display === "none"? 
        "block" : 
        "none";
}