
export type Review = {
    id: number;
    bookId: number;
    name: string;
    date: string;
    content: string;
}

export type Book = {
    name: string;
    id: number;
    description?: string;
    reviews?: Review[];
}