function showLoader() {
    [].forEach.call(document.getElementsByClassName('stack-layer'), function (el) {
        el.style.display = 'block';
    });
}

function hideLoader() {
    [].forEach.call(document.getElementsByClassName('stack-layer'), function (el) {
        el.style.display = 'none';
    });
}