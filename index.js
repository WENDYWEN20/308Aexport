console.log(5)
import {Stack} from './stack.js'
const stack1 =new Stack()
stack1.push('one')
stack1.push('two')
stack1.push('three')
console.log(stack1)
// stack1.pop('two')
// console.log(stack1)

const stack2 =new Stack()
stack2.push(10);
   stack2.push(20);
   stack2.push(30);
   console.log(stack2.peek()); // Expected output: 30
   console.log(stack2.pop());  // Expected output: 30
   console.log(stack2.peek()); // Expected output: 20
   console.log(stack2.isEmpty()); // Expected output: false
   console.log(stack2.size()); // Expected output: 2
   stack2.clear();
   console.log(stack2.isEmpty()); // Expected output: true