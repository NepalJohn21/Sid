localStorage.setItem("sid", 0)
localStorage.setItem("sidpc", 1)
const f1 = () => {
    if (Number(localStorage.sid) >= 500) {
        localStorage.setItem("sid", Number(localStorage.sidpc) - 500)
        localStorage.setItem("sidpc", Number(localStorage.sidpc) + 1)
    } else {
        alert("Not enough this!")
    }
}

setInterval(() => {
    document.querySelector(".sids").innerHTML = localStorage.sid
}, 100);