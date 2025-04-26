// Primitives types
// Complex types
// Functions, params

// Primitives types
let age: number;
age = 12.1;

let userName: string;
userName = "Israel Lucena";

let isInstructor: boolean;
isInstructor = true;

// Complex types
let hobbies: string[];
hobbies = ["Run", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Israel",
  age: 32,
};

// person = {
//   isEmployee: true,
// }
// Error: Type '{ isEmployee: boolean; }' is not assignable to type '{ name: string; age: number; }'.

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = "Angular - The Complete Guide";
course = 12345;

type Course = {
  title: string;
};

let course2: Course = {
  title: "Angular - The Complete Guide2",
};

// Functions, params
function add(a: number, b: number) {
  // This function takes two numbers and returns their sum
  return a + b;
}

function printResult(value: any): void {
  console.log("Result: " + value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray); // [-1, 1, 2, 3]
// updatedArray[0].split(''); // Error: Property 'split' does not exist on type 'number'.

const stringArray = ["a", "b", "c"];
const updatedStringArray = insertAtBeginning(stringArray, "z");
console.log(updatedStringArray); // ['z', 'a', 'b', 'c']
stringArray[0].split(""); // No error, as stringArray is of type string[]

// Classes
class Student {
  // private firstName: string;
  // private lastName: string;
  // private age: number;
  // private courses: string[];

  constructor(
    private firstName: string,
    private lastName: string,
    private age: number,
    private courses: string[]
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  enrollInCourse(course: string) {
    this.courses.push(course);
  }

  agePlusOne() {
    this.age += 1;
  }

  listCourses() {
    return this.courses.slice();
  }
}
const student = new Student("Israel", "Lucena", 32, ["Angular", "TypeScript"]);
student.enrollInCourse("React");
console.log(student.listCourses()); // ['Angular', 'TypeScript', 'React']

// Interfaces

interface Human {
  name: string;
  age: number;

  greet: (phrase: string) => void;
}

let israel: Human;

israel = {
  name: 'Israel',
  age: 32,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

class Instructor implements Human { 
  name: string;
  age: number;
  courses: string[] = [];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};
