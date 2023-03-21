// Array
const arr: Array<number> = [1, 2, 3, 4, 5];

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[][] = [[1, 2, 3], [4, 5, 6]];

// Tuples
const Tuple: [string, number, number] = ['a', 5, 6];

// Enum
enum ROLE { ADMIN, USER }
const role: ROLE = ROLE.ADMIN
console.log(role);
enum STATUS_CODE { SUCCESS = 200, CLIENT_ERROR = 400, SERVER_ERROR = 500 }
const code = STATUS_CODE.SUCCESS 