localStorage.setItem("sid", 0)

setInterval(() => {
    document.querySelector(".sids").innerHTML = localStorage.sid
}, 100);