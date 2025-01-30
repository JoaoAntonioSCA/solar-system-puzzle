function checkWord() {
    const textBox = document.getElementById('textBox');
    const word = textBox.value.trim().toLowerCase();

    if (word === 'answer2') {
        window.location.href = 'file:///E:/Documentos%20(E2.s)/Codes/html-css/outros/p-solar-system/game/earth.html'; // Next level (Earth) URL
    } else {
        alert('The answer you typed is wrong. Give up now!');
    }
}