class Stack{
    constructor(){
        this.items = [];
        this.count=0;
    }
    push(el){
        this.items[this.count]=el;
        console.log(`${el} has been added to the stack[${this.count}]`);
        this.count++;
        return this.count - 1;
    }

    pop(){
        if(this.count === 0) return undefined
        let deletedItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deletedItem} has been removed from the stack`);
        return deletedItem;
    }

    peek(){
        console.log(`The top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }
    
    emtpy(){
        console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty")
        return this.count == 0;
    }
    size(){
        console.log(`There are ${this.count} elements on the stack`)
    }
    print() {
        let print ='';
        this.items.forEach(item =>{
            print += item + ' ';
        })
        return print;
    }
}

const stack = new Stack();
stack.emtpy()
stack.push(21)
stack.push(23)
stack.push(31)

stack.emtpy()
console.log(stack.print());
stack.push(57)
stack.push(59)
stack.peek()

stack.pop()
stack.pop()
stack.size()
console.log(stack.print());
//console.log(stack)