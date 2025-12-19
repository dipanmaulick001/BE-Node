//create a map function that takes an array and a transform function as an input 
//and returns the transformed array as OP.
let arr = [ 1 , 2 , 3 ,4 ];



function transform(x){
    return x*2;
}



function mapFunc(arr , transform){
    let result = [];

    for(let i= 0 ; i<arr.length ; i++){
        result.push(transform(arr[i]))
    }
    return result;
}

let ans = mapFunc(arr ,transform);
console.log(ans)