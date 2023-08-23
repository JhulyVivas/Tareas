class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        console.log(this.queue);
    }
}

class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

const atmQueue = new Queue();

const peopleData = [
    { name: "John", arrivedTime: "10:00 AM" },
    { name: "Alice", arrivedTime: "10:15 AM" },
    { name: "Bob", arrivedTime: "10:30 AM" },
    { name: "Eva", arrivedTime: "11:00 AM" },
    { name: "Mike", arrivedTime: "11:20 AM" },
    { name: "Sarah", arrivedTime: "11:30 AM" },
    { name: "David", arrivedTime: "12:00 PM" },
    { name: "Emily", arrivedTime: "12:15 PM" },
    { name: "Alex", arrivedTime: "12:30 PM" },
    { name: "Linda", arrivedTime: "12:45 PM" }
];

peopleData.forEach(personData => {
    const person = new Person(personData.name, personData.arrivedTime);
    atmQueue.enqueue(person);
});
atmQueue.print();

console.log("Queue size:", atmQueue.size());

console.log("Next person:", atmQueue.peek());

console.log("Queue size after processing:", atmQueue.size());

