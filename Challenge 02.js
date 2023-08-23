class PastaNode {
    constructor(pastaName, description) {
        this.pastaName = pastaName;
        this.description = description;
        this.nextPasta = null;
    }
}

class PastaList {
    constructor() {
        this.head = null;
    }

    addPasta(pastaName, description) {
        const newPasta = new PastaNode(pastaName, description);
        if (!this.head) {
            this.head = newPasta;
        } else {
            let current = this.head;
            while (current.nextPasta) {
                current = current.nextPasta;
            }
            current.nextPasta = newPasta;
        }
    }

    printPastas() {
        let current = this.head;
        while (current) {
            console.log(`Pasta Name: ${current.pastaName}`);
            console.log(`Description: ${current.description}`);
            if (current.nextPasta) {
                console.log(`Points to next Pasta: ${current.nextPasta.pastaName}`);
            } else {
                console.log("No next Pasta");
            }
            console.log("-".repeat(20));
            current = current.nextPasta;
        }
    }
}

// Crear la lista de pastas por tomar
const pastaList = new PastaList();
pastaList.addPasta("Fettuccine Alfredo", "Deliciosa pasta con salsa Alfredo cremosa.");
pastaList.addPasta("Spaghetti Bolognese", "Pasta con salsa de carne y tomate.");
pastaList.addPasta("Penne Arrabbiata", "Pasta picante con salsa de tomate y chiles.");

// Imprimir todas las pastas por tomar
pastaList.printPastas();
