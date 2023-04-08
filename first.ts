////////////////////////////////
// style
////////////////////////////////

// use camelCase for object properties, functions, and variables.
// use PascalCase for classes, interfaces, and types.

// single quotes ' for 'strings'



////////////////////////////////
//// variables with types
////////////////////////////////

// In JS, "" == 0 is true because == coerces "" to 0
// Other languages detect this without running: static type checking.
// TS introduces typing.

// Any: equivalent to opting out of type checking for a variable.
// Built-in types: number, string, boolean, void, null and undefined.
// User-defined types: enum, class, interface, array, and tuple.

let a: number = 1
let b: number = 5;
let c = a + b;

// use the console object to output messages and debugging information to the terminal.
console.log(c);


////////////////////////////////
//// functions 
////////////////////////////////


export function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  const greeting = greet("li");
  console.log(greeting); 


////////////////////////////////
//// object literals 
////////////////////////////////

const JobieConst = {  
  color: 'black',
}


////////////////////////////////
//// basic class
//// with a constructor and one method 
////////////////////////////////

class Dog {

  // fields  
    color: String;  
    legs: Number;  
    isCute: Boolean;
  
  constructor(color: String, legs: Number, isCute: Boolean) {  
      // "this" is like "self" in python
      this.color = color;
      this.legs = 4;  
      this.isCute = true;  
    }
  
  // a method
  DescribeDog(): void {  
      console.log(`This dog is ${this.color} and has ${this.legs} legs`);  
    }
  
  }

const jobie = new Dog('black', 4, true);
jobie.DescribeDog(); // prints "This dog is black and has 4 legs" to the console



////////////////////////////////
//// complex class
//// user-defined types and an error catcher, 
//// and a new type that uses partial properties
////////////////////////////////


// make some types we will use in the class.

// make an enum type called "LanguageMarkerOption"
export enum LanguageMarkerOption {
  NoMarker = 'nomarker',
  Top = 'top', // Emulate that the first line of document is the language marker
  Always = 'always', // Always visible
}


export class PromptOptions {

  // "properties" of the class:

  /** The maximum prompt length in tokens */
  readonly maxPromptLength: number = 1500;
  /** Whether to include a language marker in the prompt */
  readonly languageMarker: LanguageMarkerOption = LanguageMarkerOption.Top;
  /** The percent of `maxPromptLength` to reserve for snippets */
  readonly suffixPercent: number = 0;

  // a constructor is for making new instances, and has all the fields of the class.
  constructor(options?: PartialPromptOptions) {

    // an error message if one of the values arent in expected range.
    if (this.suffixPercent < 0 || this.suffixPercent > 100) {
        throw new Error(`suffixPercent must be between 0 and 100, but was ${this.suffixPercent}`);
    }

}
}


// "type" keyword to define a new type.
// sets PartialPromptOptions to have all the properties of PromptOptions as optional.
// this type will be "completed to" a PromptOptions object: it will be converted into PromptOptions
// that uses any specified options, and fills the rest with the default options. 
export type PartialPromptOptions = Partial<PromptOptions>;




////////////////////////////////
//// interfaces
//// syntactical contract : defines the syntax/property names that any entity must adhere to.
//// adds/enforces strong type checking: prevent errors caused by misspelled property names or incorrect data types.
//// separates the definition of an object's structure and behavior from its implementation

////////////////////////////////

// declare an interface
export interface DocumentInfo {
  /** The file path of the document relative to its containing project or folder, if known. */
  relativePath?: string;
  /** The source text of the document. */
  source: string;
  /** The language identifier of the document. */
  languageId: string;
}

// implement the interface
const myDoc: DocumentInfo = {
  relativePath: '/myProject/myFile.ts',
  source: 'console.log("Hello, world!");',
  languageId: 'typescript',
};
