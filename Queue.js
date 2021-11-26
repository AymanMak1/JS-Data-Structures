// FIFO
class Queue{
    constructor(){
        this.collection = []
    }
    print(){
        console.log(this.collection)
    }
    enqueue(element){
        this.collection.push(element)
    }
    dequeue(){
        return this.collection.shift();
    }
    front(){
        return this.collection[0];
    }
    size(){
        return this.collection.length;
    }
    isEmpty(){
        return (this.collection.length===0)
    }
}

var q = new Queue();
q.enqueue('Ayman');
q.enqueue('Achraf');
console.log(q.isEmpty());
q.print();
console.log(q.front());
console.log(q.size());
q.dequeue();
console.log(q.front());
console.log(q.size());
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
