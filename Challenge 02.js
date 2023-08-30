
const thingsToBuy = [
    { name: "Leche", description: "Para el desayuno" },
    { name: "Pan", description: "Pan integral" },
    { name: "Huevos", description: "Huevos orgánicos" },
    { name: "Frutas", description: "Manzanas, bananas, naranjas" },
    { name: "Verduras", description: "Brócoli, espinacas, zanahorias" },
    { name: "Carne", description: "Pollo, carne de res" },
    { name: "Pescado", description: "Salmón fresco" },
    { name: "Arroz", description: "Arroz integral" },
    { name: "Pasta", description: "Pasta de trigo integral" },
    { name: "Aceite de oliva", description: "Aceite de oliva virgen extra" },
    { name: "Queso", description: "Queso cheddar" },
    { name: "Yogur", description: "Yogur natural" },
    { name: "Cereal", description: "Cereal de avena" },
    { name: "Mantequilla de maní", description: "Mantequilla de maní natural" },
    { name: "Mermelada", description: "Mermelada de frutas" },
    { name: "Café", description: "Café orgánico" },
    { name: "Té", description: "Té verde" },
    { name: "Chocolate", description: "Chocolate negro" },
    { name: "Panecillos", description: "Panecillos integrales" },
    { name: "Galletas", description: "Galletas de avena" }
];

class Node {
    constructor(name, description, next = null) {
        this.name = name;
        this.description = description;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(name, description) {
        const newNode = new Node(name, description);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return `${name} agregado a la lista de compras: ${description}`;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return `${name} agregado a la lista de compras: ${description}`;
    }

    peek(name, current = this.head) {
        if (!this.head) {
            return false;
        }

        if (current !== null) {
            if (current.name === name) {
                return true;
            } else {
                return this.peek(name, current.next);
            }
        }

        return false;
    }

    size(current = this.head, count = 0) {
        if (current === null) {
            return count;
        }
        
        return this.size(current.next, count + 1);
    }    

    remove(name) {
        if (!this.head) {
            return false;
        }

        if (this.head.name === name) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            return true;
        }

        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.name === name) {
                prev.next = current.next;
                if (current === this.tail) {
                    this.tail = prev;
                }
                return true;
            }
            prev = current;
            current = current.next;
        }

        return false;
    }

    print() {
        let node = this.head;
        while (node !== null) {
            console.log(`Compra: ${node.name} | Descripción: ${node.description} | Siguiente: ${node.next ? node.next.name : null}`);
            node = node.next;
        }
    }
}

const shoppingList = new LinkedList();

for (const item of itemsToBuy) {
    console.log(shoppingList.append(item.name, item.description));
}
console.log(`Tamaño de la lista de compras: ${shoppingList.size()}`);

console.log("Lista de Compras: ");
shoppingList.print();

shoppingList.remove("Pan");
console.log("¿Huevos están en la lista?", shoppingList.peek("Huevos"));
console.log("Tamaño de la lista de compras después de eliminar: ", shoppingList.size());
