
export class QueueNumber {
    private data = [];
    push=(item:number)=>this.data.push(item);
    pop=():number=>this.data.shift();
}

export interface MyPoint{
    x:number;
    y:number;
}

export class TSDemo1 implements MyPoint {
    x: number=10;
    y: number=20;


example1(){
    return 'This is a string';
}

example2(){
    return `This
    is
    a
    string
    Template`;
    }

example8(){
    var args: number[]=[0,1,2];
    (<any>this.foo)(...args);
    }
    foo(x:number, y:number, z:number){
        console.log(x,y,z);
    }

example9(){
    var args: number[]=[0,1,2];
    this.foo2(...args);
    }
    foo2(...x: number[]){
        console.log(JSON.stringify(x));
    }

example10(){
    var numbers = [1,2,3,4,5];
    var timesTwo = numbers.map((number) => number * 2);
    return timesTwo;
    }

example11(){
    return this.id;
}
id:Number;
constructor(){
    this.id=789;
}

example15(){
    let map=new Map();
    map.set('foo',800);
    return map.get('foo');
    //return map.has('foo');
}

example16(){
    let set=new Set();
    set.add('red');
    return set.has('red');
}


}
