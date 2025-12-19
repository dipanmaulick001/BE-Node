//filter 

let arr2 = [1 , 2 , 3 , 4, 5 ,6 ,7 ,8 ,9];

//only return the multiples of 3

const newArr2 = arr2.filter( function(n){
    if (n%3==0){
        return true;
    }else{
        return false;
    }
})

console.log(newArr2);