const sinhvien: { name: string, grade: number, hometown: string, printInfo: () => string } = {
    name: "Đăng Tuấn",
    grade: 5,
    hometown: "Hà Nội",
    printInfo: function () {
        return `Sinh viên ${this.name} quê quán: ${this.hometown}`
    }
}

const sinhvien2: { name: string, grade: number, hometown: string, printInfo: () => string } = {
    name: "Anh Dũng",
    grade: 5,
    hometown: "Bắc Giang",
    printInfo: function () {
        return "";
    }
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}}

interface Book {
    authors: Author[],
    book_cover?: string,
    categories: { id: number, name: string, is_leaf: boolean }
    current_seller: {
        id: number, sku: string, name: string, link: string, logo: string, price: number, product_id: string,
        store_id: number, is_best_store: boolean, is_offline_installment_supported?: string
    }
    description: string,
    images: images[],
    list_price: number,
    name: string,
    original_price: string,
    quantity_show: quantity_show,
    rating_average: number,
    short_description: string,
    specifications: specifications[]
}

interface Author {
    id: number,
    name: string,
    slug: string
}

interface images {
    base_url: string,
    is_gallery: boolean,
    label?: string,
    large_url: string,
    medium_url: string,
    position?: string,
    small_url: string,
    thumbnail_url: string
}

interface quantity_show {
    text: string,
    value: number
}

interface specifications {
    name: string,
    attributes: attributes[]
}

interface attributes {
    code: string,
    name: string,
    value: string
}

// Differences type aliases / interface

// interface User {
//     username: string,
//     password: string,
//     email: string
// }

enum LEVEL { STAFF, MANAGER }

// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }

// Properties
interface User {
    username: string,
    password: string,
    email: string
}
// Method
interface User {
    login: () => void,
    logout: () => void
}

// type Admin = User & {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }