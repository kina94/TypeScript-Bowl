{
    interface Stack<T>{
        readonly size: number;
        push(value: T): void;
        pop(): T;
    }
    
    type StackNode<T> = {
        readonly value: T;
        readonly next?: StackNode<T>;
    }
    
    class StackImpl<T> implements Stack<T>{
        private _size: number = 0;
        private head?: StackNode<T>
    
        constructor(private capacity: number){}
    
        get size(){
            return this._size;
        }
    
        push(value: T): void{
            if(this.size === this.capacity){
                throw new Error('Stack is full')
            }
            const node = {value, next:this.head}
            this.head = node;
            this._size++;
        } 
    
        pop(): T{
            if(this.head == null) { // ==라면 null과 undefined을 같이 취급함
                throw new Error('Stack is empty')
            }
            const node = this.head
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }
    
    
    const stack= new StackImpl<string>(10);
    stack.push('Kina 1')
    stack.push('Kina 2')

    const stack2 = new StackImpl<number>(5);
    stack2.push(5)
    stack2.push(4)
    console.log(stack2)
}
