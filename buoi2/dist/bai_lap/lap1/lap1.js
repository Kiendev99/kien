function sort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((callback && callback(arr[i], arr[j]) > 0)) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var arr3 = ["b", "a", "e", "d", "v"];
console.log(sort(arr3, function (a, b) {
    return a.localeCompare(b);
}));
