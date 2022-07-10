// generate 255 length array from number 0 to 255
const arr = Array.from({ length: 255 }, (v, k) => k);
// shuffle array
arr.sort(() => Math.random() - 0.5);
console.log(arr);