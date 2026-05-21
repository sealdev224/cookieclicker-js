let cookie = document.getElementById("cookie");
let cookie_display = document.getElementById("cookieamount");
let savedata = JSON.parse(localStorage.getItem("save")) || {
    cookies: 0
};

cookie_display.innerHTML = `Cookies: ${savedata.cookies}`;

function addcookie() {
    savedata.cookies += 1;
    cookie_display.innerHTML = `Cookies: ${savedata.cookies}`;

    localStorage.setItem("save", JSON.stringify(savedata));
}
