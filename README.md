# Angular/TypeScript

### Defining Variables
```
var num: number = 3;
var num = 3; // variable num is of type "number"
var num; // variable num is of type "any"
```
### Defining Arrays
```
let list: number[] = [1, 2, 3];
```

### Defining Functions
```
let myAdd = ( x: number , y: number): number => { return x+y; };
// first two "number" defines type for parameters 'x' and 'y'
// third "number" defines `return type` of function

var addFunction = (n1: number, n2: number, n3?: number) : number => {
		//observe "?" in parameter n3
		//Optional parameter has to be the last parameter in the list 
	}
	var sum = addFunction(10, 20);	//output: 30
  
  var addFunction = (n1: number, n2: number, n3: number = 30) : number => {
		//observe parameter n3 has default value
	}

    var sum = addFunction(10, 20);	// output: 60
    
    
                                         //return type
    function addNums(num1:any, num2:number):number {
      if(typeof num1 == "string") {
        if(isNaN(parseInt(num1, 10))) {
           return 0;
           }
           num1 = parseInt(num1, 10);
        }
         return num1+num2;
      }
      console.log(addNums('10',20));
      
      var myArr:any[] = [1, 2, "other"];
      
      
      function volumeOfCube(length: number, width: number, height: number){
   var volume= length*width*height;
   return "Volume of the cube is: " + volume;
  }
  document.body.innerHTML = volumeOfCube(1,2,3);
```

### Defining Objects
```
interface Point2D {
	    x: number;
	    y: number;
	}
     var point2D: Point2D = { x: 0, y: 10 }
```

### Data Type Classification
```
Built-in types in Typescript are number, string, boolean, null, undefined, and void.
null - variable is set to an object whose value is undefined (empty)
undefined - variable has no value or object assigned to it.

var value: any = 30;  //can take string, number, boolean anything


User-defined types include enums, classes, interfaces, arrays etc.

interface ToDo {
  name: string,
  completed?: boolean; 
  // ? tells that 'completed' is optional property, user need not give value
 }
 let todo: ToDo = {
  name: 'some string'; 
 }
```

## Generics
```
function calVolumeCube<T>(side: T): T {
     return side*side*side;
 }
```

### Enums
```
 enum CardSuit {
        Clubs,    //0
        Diamonds, //1
        Hearts,   //2
        Spades    //3
    }
    // Sample usage
    var card = CardSuit.Clubs;
    // Safety
    card = "some string"; // Error : string is not assignable to type CardSuit
```

### 'Hello World' Program
```
class Greeter{
  greeting : T;
  constructor (public greeting : T) { this.greeting = greeting; }
  greet() {
   return "<h1>" + this.greeting + "</h1>";  
  }
 }
 var greeter = new Greeter <string>("Hello world");
 document.body.innerHTML = greeter.greet();
```

# Object Oriented Approach
```
class Student{
    name: string;
}

var newClassObject = new Student();
newClassObject = {
    name: "rajesh";
}
var name = new Student();

name.name = "raul";


class Student {
 private firstName: string;  //private members
 private lastName: string;
 yearOfBirth: number;    //Public scope by default
 schoolName: string;
 city: string;

    //Constructor            
    constructor(firstName: string, lastName: string, schoolName: string, city: string, yearOfBirth: number) {
            this.firstName = firstName;
         this.lastName = lastName;
         this.yearOfBirth = yearOfBirth;
         this.city = city;
         this.schoolName = schoolName;
     }

    age() {
        return 2017 - this.yearOfBirth;
    }    

    printStudentFullName(): void {
        alert(this.lastName + ',' + this.firstName);
    }
}

abstract class Animal {	//abstract - prevents from instantiating.. but can extend it to create other animals
	private name: string;
	
	constructor(theName: string) {
		this.name = theName;
	}
	
	walk(distance: number) {
		console.log("Hi, my name is " + this.name + " and walking " + distance + "meter");
	}
}

let myAnimal = new Animal("Dave");
myAnimal.walk(10);

class Snake extends Animal{
	constructor(theName: string({
	super(theName);
	}
}
```
- Interface, declares standard structure for an object (properties and methods) //implement
```
interface Student{
    name: string;
}
var newInterfaceObject : Student = {
    name: "ramesh";
}


interface Volume {
		length: number;
		width: number;
		sayHi: () => string;
	}
	//Volume binding object Physics to define all members as specified by interface 
	var Physics: Volume = {
		length: 10,
		width: "ten",
		sayHi: (): string => { return "Hello" }
	}
```

- Inheritance
```
class Cube {
		length: number;
		constructor(length : number) {
			this.length = length;
		}
    }
	class Physics extends Cube {
		color: string;
		constructor(length: number, color: string) {
			super(length);
			this.color = color;
		}
	}
	var obj = new Physics(10, "yellow");
```

- Overloading
```
class Length{
	Length(length: number);
	Length(length:string);
	Length(value: any) {
		if (value && typeof value == "number") {
		alert("overload 1");
	}
	if (value && typeof value == "string") {
		alert("overload 2");
	}
}}
```
- Polymorphism - Overriding, a mechanism by which the child class redefines the superclass’s method.
```
class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called…") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() 
      console.log("doPrint() is printing a string…")
   } 
} 

var obj = new StringPrinter() 
obj.doPrint()
```
