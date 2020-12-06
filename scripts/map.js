$(function () {
    var mymap = L.map('mapid').setView([51.035665244319944, -114.0371571], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);
    L.marker([51.035665244319944, -114.0371571]).addTo(mymap);
});