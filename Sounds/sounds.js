const btn = Array.from(document.querySelectorAll(".btn"))

function stopSound() {
    for (let i = 0; i < btn.length; i++) {
        const sound = document.getElementById(btn[i].innerText)
        sound.pause()
        sound.currentTime = 0
    }
}
function playSound(btn) {
    btn.addEventListener("click", function () {
        stopSound()
        document.getElementById(btn.innerText).play()
    })
}
for (let i = 0; i < btn.length; i++) {
    let button = btn[i]
    playSound(button)
}

document.querySelector(".stop").addEventListener("click", function () {
    stopSound()
})