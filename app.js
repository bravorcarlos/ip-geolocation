fetch("http://ipwho.is/")
.then(response => response.json())
.then(data => {
    flag.style.display = "flex";
    flag.src = data.flag.img;
    ip.innerHTML = data.ip;
    cityCountry.innerHTML = `${data.city}, ${data.country}`;
    console.log(data);
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62822.22544581403!2d${data.longitude}!3d${data.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1664245217981!5m2!1ses!2sve" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
})

let flag = document.getElementById("flag");
let ip = document.getElementById("ip");
let map = document.getElementById("map");
let cityCountry = document.getElementById("cityCountry");

