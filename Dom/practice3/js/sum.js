
const firstnum = document.getElementById('num1').value;
const twonum = document.getElementById('num2').value;
const submit = document.getElementById('submit');
const shownum = document.getElementById('show');

// submit.addEventListener('click',function() {
//     let showsum = Number(firstnum) + Number(twonum)
//     shownum.innerText = showsum
    
// })

submit.addEventListener('click',function(firstnum,twonum) {
    return firstnum + twonum
   
})