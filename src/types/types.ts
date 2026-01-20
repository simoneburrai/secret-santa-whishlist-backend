interface User {
    name: string,
    email: string,
    password: string
}

type Priority  = 1 | 2 | 3 | 4 | 5;
interface Gift {
    name: string,
    image?: string,
    link?: string,
    price: number,
    priority: Priority
    notes?: string
}
interface Wishlist {
    userId: number,
    name: string,
    gifts: Gift[]
}



export type {
    User,
    Wishlist,
    Gift
}





