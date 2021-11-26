/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let arr = address.split(".");
  return arr.join("[.]");
};

// var defangIPaddr = function (address) {
//   let arr = address.split("");
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ".") ans.push("[.]");
//     else ans.push(arr[i]);
//   }
//   return ans.join("");
// };

let address = "1.1.1.1";
console.log(defangIPaddr(address));
