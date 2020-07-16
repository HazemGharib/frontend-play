function goHome() {
    window.location.href = '/web'
}

function showLoader() {
    [].forEach.call(document.getElementsByClassName('triangle'), function (el) {
        el.style.display = 'block';
    });
}

function hideLoader() {
    [].forEach.call(document.getElementsByClassName('triangle'), function (el) {
        el.style.display = 'none';
    });
}