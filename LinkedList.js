class Node{
    constructor(data, next= null){
        this.data = data;
        this.next = next;
    }

}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head || this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index){
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while(count  < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;
        previous.next = node;

        this.size++;
    }
    //sort(){}
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count == index){
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return;
    }

    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next;
        } else {
            while(count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    clear(){
        this.head = null;
        this.size = 0;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const n1 = new Node(100);
console.log(n1);
const ll = new LinkedList();
ll.insertLast(21);
ll.insertFirst(31);
ll.insertFirst(57);
ll.insertFirst(59);
ll.insertAt(23,3);
ll.getAt(2)
//ll.removeAt(0)
ll.insertAt(63,0);
console.log(ll);
ll.removeAt(0)
ll.print();
ll.clear();
ll.print();