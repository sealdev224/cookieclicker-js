let cookie = document.getElementById("cookie");
let cookie_display = document.getElementById("cookieamount");
let cookie_amount = 0;

function addcookie() {
    cookie_amount += 1;
    cookie_display.innerHTML = `Cookies: ${cookie_amount}`;
}
