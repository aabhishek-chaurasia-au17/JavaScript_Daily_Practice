let text = document.querySelector('h1');

text.innerText = 'Hare Krishna'

function styles() {
    text.style.border = 'solid 1px black'
    text.innerHTML = 'Jai Shree Ram';
    text.style.color = 'Orange'
    text.style.textAlign = 'center'
}

text.addEventListener('click', styles, function () {
    console.log(styles);
});

