// 1. Function declaration (Khai bao ham)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function () {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}
// 2. Function return
let num1: number;
// function sum(): number {
//     return;
// }

// function showName(): string {
//     return;
// }

function logger(): void {
    console.log("Thêm mới thành công");
}

function showError(): never {
    const error = new Error("Something went wrong!")
    throw error;
}

// const err = showError()

// 3. Function parameter
function sum(a: number, b: number = 0): number {
    return a + b
}

// console.log(sum(10, -1));


function showName(): string {
    return "";
}

// 4. Rest parameter

// 5. Callback
const numArr = [5, 10, 15, 20]
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