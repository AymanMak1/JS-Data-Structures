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
ll.insertFirst(21);
ll.insertFirst(23);
ll.insertFirst(31);
ll.insertFirst(57);
ll.insertLast(59);
console.log(ll);
ll.print();