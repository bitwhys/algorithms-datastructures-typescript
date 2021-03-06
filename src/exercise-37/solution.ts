
interface stackLength {
  stack1: number;
  stack2: number;
}

class DoubleStack {
  _stacksLength: stackLength
  _array: Array<any>
  _arraySize: number

  constructor(n: number){
    this._array = [];
    this._arraySize = n;
    this._stacksLength = {
      stack1: 0,
      stack2: 0
    };
  }

  push(value: any, stack: string): string{
    if(this._stacksLength.stack1 + this._stacksLength.stack2 < this._arraySize){
      const action = stack === '1' ? 'push' : 'unshift';
      this._array[action](value);
    } else {
    }
  }

  pushStack1(value: any){
    return this.push(value, '1');
  }

  pushStack2(value: any){
    return this.push(value, '2');
  }

  pop(stack: string){
      const action = stack === '1' ? 'pop' : 'shift';
      return this._array[action]();
    }
  }
}

const t = new DoubleStack(5);

console.assert(t.pop('1') === 'Stack 1 Underflows', 'Wrong Implementation');

t.pushStack1(10);
t.pushStack1(20);
t.pushStack1(30);
t.pushStack1(40);
t.pushStack1(50);

console.assert(t.pushStack1(50) === 'Stack 1 Overflows', 'Wrong Implementation');
console.assert(t.pushStack2(50) === 'Stack 2 Overflows', 'Wrong Implementation');
console.assert(t.pop('1') === 50, 'Wrong Implementation');
console.assert(t.pushStack2(42) !== 'Stack 2 Overflows', 'Wrong Implementation');
console.assert(t.pop('1') === 40, 'Wrong Implementation');
console.assert(t.pop('1') === 30, 'Wrong Implementation');
console.assert(t.pop('1') === 20, 'Wrong Implementation');
console.assert(t.pop('1') === 10, 'Wrong Implementation');
console.assert(t.pop('1') === 'Stack 1 Underflows', 'Wrong Implementation');
console.assert(t.pop('2') === 42, 'Wrong Implementation');
console.assert(t.pop('2') === 'Stack 2 Underflows', 'Wrong Implementation');
