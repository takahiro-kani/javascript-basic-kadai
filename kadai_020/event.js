const pushedBtn = document.getElementById('btn');

pushedBtn.addEventListener('click', () => {
    const oldHead = document.getElementById('text');
    oldHead.textContent = 'ボタンをクリックしました'; 
})