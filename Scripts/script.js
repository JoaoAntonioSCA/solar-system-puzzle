function checkWord() {
    const textBox = document.getElementById('textBox');
    const word = textBox.value.trim().toLowerCase();

    if (word === 'we are unprepared') {
        window.location.href = 'file:///E:/Documentos%20(E2.s)/Codes/html-css/outros/p-solar-system/game/venus.html'; // Next level (Venus) URL
    } else {
        alert('The answer you typed is wrong. Give up now!');
    }
}