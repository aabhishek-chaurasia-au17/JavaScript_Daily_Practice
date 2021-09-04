const flatten = function(arr, resulte = []) {
    for (const elem of arr){
        if(Array.isArray(elem)){
            flatten(elem, resulte);
        }else{
            resulte.push(elem);
        }
    }
    return resulte
}

console.log(flatten([[0,1,[2,3,[4,[5,6]]]],[7,[8,12,[9,10]]]]));