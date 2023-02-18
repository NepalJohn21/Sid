localStorage.setItem("sid", 0)

setInterval(() => {
    document.querySelector(".sid").innerHTML = localStorage.sid
}, 100);