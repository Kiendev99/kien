// 1. Function declaration (Khai bao ham)
function func1() {
    // Hoisting
    console.log("func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
// 2. Function return
var num1;
// function sum(): number {
//     return;
// }
// function showName(): string {
//     return;
// }
function logger() {
    console.log("Thêm mới thành công");
}
function showError() {
    var error = new Error("Something went wrong!");
    throw error;
}
// const err = showError()
// 3. Function parameter
function sum(a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
}
// console.log(sum(10, -1));
function showName() {
    return "";
}
// 4. Rest parameter
// 5. Callback
var numArr = [5, 10, 15, 20];
// const result = numArr.map((item) => {
//     console.log(item);
// })
// const we17305_map = function (arr: number[], callback?: (item: number, index: number) => number) {
//     const temp: number[] = []
//     for (let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17305_map(numArr, (item, index) => {
//     console.log(index);
//     return item * 2
// })
// console.log(result);
