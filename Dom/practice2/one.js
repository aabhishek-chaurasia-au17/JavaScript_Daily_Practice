
let a = document.getElementById('incriment');
let b = document.getElementById('dicriment');
let c = document.getElementById('conuter');

let d = Number(c.innerText)

a.addEventListener('click', function() {
    d ++
    c.innerText = d
})  

b.addEventListener('click', function() {
    d --
    c.innerHTML = d
})