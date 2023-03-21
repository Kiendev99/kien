function sort<T>(arr: T[], callback?: (a: T, b: T) => number): T[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (
                (callback && callback(arr[i], arr[j]) > 0)
            ) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const arr3 = ["b", "a", "e", "d", "v"]
console.log(
    sort(arr3, (a, b) => {
        return a.localeCompare(b);
    })
);