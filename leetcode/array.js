let arr1=[1];
let arr2=[55,5,6,7,8,9];
// let arr3=arr2.splice(1,1,2,3,4);
// arr2.reverse();
// let cmp = function(){
//     return 1;
// }
// arr2.sort(cmp);
// console.log( arr1.concat([2,2,2]));

let arr3 = arr2.splice(1,0,1,1);

console.log(arr3);


// let arr9 = [
//     {name:"aaa",age:34},
//     {name:"bbb",age:30},
//     {name:"ccc",age:60}
// ]
// let cmp = function(prop){
//     return function(a,b){
//         return a[prop] - b[prop];
//     }
// }

// // console.log(arr9.sort(cmp('age')));

// arr9.sort((a, b) => b['age'] - a['age']);
// console.log(arr9);