
const btn = document.getElementsByClassName('btn');
const body = document.getElementsByTagName('body');
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

body.style.backgroundColor = 'violet';

btn.addEventListener('click', function(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[Index]
})

