const pushedBtn = document.getElementById('btn')

pushedBtn.addEventListener("click", () => {
    const oldHead = document.getElementById("text");
    setTimeout(() => {
        oldHead.textContent = "クリックされました";
    },2000)
})