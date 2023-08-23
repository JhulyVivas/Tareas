class Book {
    constructor(name, isbn, author, editorial) {
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

const books = [
    new Book("Libro 1", "ISBN123", "Autor A", "Editorial X"),
    new Book("Libro 2", "ISBN456", "Autor B", "Editorial Y"),
    new Book("Libro 3", "ISBN789", "Autor C", "Editorial Z"),
    new Book("Libro 4", "ISBN101", "Autor D", "Editorial W"),
    new Book("Libro 5", "ISBN102", "Autor E", "Editorial V"),
    new Book("Libro 6", "ISBN103", "Autor F", "Editorial U"),
    new Book("Libro 7", "ISBN104", "Autor G", "Editorial T"),
    new Book("Libro 8", "ISBN105", "Autor H", "Editorial S"),
    new Book("Libro 9", "ISBN106", "Autor I", "Editorial R"),
    new Book("Libro 10", "ISBN107", "Autor J", "Editorial Q")
];

const bookStack = new Stack();


books.forEach(book => bookStack.push(book));


bookStack.print();

console.log("Libro en la parte superior:", bookStack.peek());

bookStack.pop();

bookStack.print();

console.log("Tamaño de la pila:", bookStack.size());


