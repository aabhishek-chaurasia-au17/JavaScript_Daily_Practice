let inner = document.querySelector('.box-inner');
let outer = document.querySelector('.box-outer');


inner.addEventListener('click', function(){
    inner.style.background = 'red'
    alert('inner Box')
},true)

outer.addEventListener('click', function(){
    outer.style.background = 'yellow'
    alert('outer Box')
},true)

