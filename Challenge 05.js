class Person {
    constructor(firstName, lastName, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    isLeaf() {
        return this.children.length === 0;
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(firstName, lastName, node = this.root) {
        if (!this.root) {
            return null;
        }

        if (node.value.firstName === firstName && node.value.lastName === lastName) {
            return node;
        } else {
            const children = node.children;
            const inChildren = children.find(item => item.value.firstName === firstName && item.value.lastName === lastName);

            if (inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if (hasChild) {
                        return;
                    }
                    hasChild = this.search(firstName, lastName, item);
                });

                return hasChild;
            }
        }
    }

    insert(value, parent) {
        const newNode = new Node(value);

        if (!parent) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parent.firstName, parent.lastName);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                return null; // Parent not found
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }

        console.log(`${node.value.firstName} ${node.value.lastName}`);
        node.children.forEach(element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }

        node.children.forEach(element => {
            this.postOrder(element);
        });

        console.log(`${node.value.firstName} ${node.value.lastName}`);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }

        if (node.children.length === 0) {
            console.log(`${node.value.firstName} ${node.value.lastName}`);
        } else {
            this.inOrder(node.children[0]);
            console.log(`${node.value.firstName} ${node.value.lastName}`);

            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

// Ejemplo de uso
const tree = new NaryTree();

tree.insert(new Person("Margarita", "Muñoz", "1944-12-12"), null);
tree.insert(new Person("Jose", "Vivas", "1945-12-11"), new Person("Margarita", "Muñoz"));
tree.insert(new Person("Glenda", "Vivas", "1967-03-31"), new Person("Margarita", "Muñoz"));
tree.insert(new Person("Haminson", "Vivas", "1965-04-11"), new Person("Margarita", "Muñoz"));
tree.insert(new Person("Jhuly", "Vivas", "2004-01-19"), new Person("Glenda", "Vivas"));

console.log("Preorder traversal:");
tree.preOrder();

console.log("Inorder traversal:");
tree.inOrder();

console.log("Postorder traversal:");
tree.postOrder();
