let sum = document.getElementById('sum');
let minus = document.getElementById('minus');
let division = document.getElementById('division');
let multipl = document.getElementById('multipl');


let res = document.getElementById('result');
let num1 = document.getElementById('input1');
let num2 = document.getElementById('input2');


sum.addEventListener('click',function () {
    
    let getsum = Number(num1.value) + Number(num2.value)
    res.innerText = getsum;
    console.log(getsum);

    document.getElementById("input1").value = null;
    document.getElementById("input2").value = null;
})

minus.addEventListener('click',function () {

    let getminus = Number(num1.value) + Number(num2.value)
    res.innerText = getminus;
    console.log(getminus);

    document.getElementById("input1").value = null;
    document.getElementById("input2").value = null;
})

division.addEventListener('click',function () {

    let getdivision = Number(num1.value) / Number(num2.value)
    res.innerText = getdivision;
    console.log(getdivision);

    document.getElementById("input1").value = null;
    document.getElementById("input2").value = null;
})

multipl.addEventListener('click',function () {

    let getmultipl = Number(num1.value) * Number(num2.value)
    res.innerText = getmultipl;
    console.log(`ans is ${getmultipl}`);

    document.getElementById("input1").value = null;
    document.getElementById("input2").value = null;
})