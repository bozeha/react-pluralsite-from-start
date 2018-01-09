



/// simple arrow fucntion
const printName =(name)=>
{
    console.log(name);
}
printName('boaz');


// if the function is only to return somting 

const isEven =(x) => x%2 ===0?'even':'odd';

console.log(isEven(99));


/// if we sending only one var to func we cun remove the ()
const isEvenShort =x => x%2 ===0?'even':'odd';

console.log(isEvenShort(99));



//// export object  
const person ={
    name : 'max'
}
// * default means when we import from this file the defualt element that we receive its person
export default person ;

/// for import we will write in other js file : 
// import person from './functions-exp.js' 
// becuse we export as defualte we can call it in any name exmp:
// import perrrrr from './functions-exp.js' 


//// export function 
export const clean =() =>{ }
// for import :
//import {clean} from './functions-exp.js' 
/// if we want to import this function as anther name :
//import {clean as myClean} from './functions-exp.js'


// export variable 
export const var_num= 10;
// for import :
//import {var_name} from './functions-exp.js' 


//* we can import every thing that been exprot from functions-exp.js:
// import * as bundled from './functionx-exp.js';
// this way we well get budled as object with evert export from functions-exp.js

/////////////////////CLASSES


//// Person is a new class
class Person{
    constructor()
    {
        this.name ='max';
    }
    printMyName()
    {
        console.log(this.name);
    }
}

/// create new const element type of Person 
const new_person = new Person();
new_person.printMyName();


/// inherit from class person to class family

class family extends Person{
    constructor(x,y)
    {
        /// must use super to run constructors of the class we extend
        super();
        this.wife=y;
        this.name=x;
    }
    printWife()
    {
        console.log(this.wife);
    }
}

/// send to constructor tow elements // 
const newFamily = new family('bob','boby');
newFamily.printWife();
newFamily.printMyName();



/////////////////////CLASSES the short and new way !!!!!
//// no need for constructors no need of super  no need of this. 
/// convert the function to arrw fucntion
//********** not used 
class ShortPerson{
    gender = "male!!!!!!!!!!!";

    printGender = () =>
    {
        console.log(this.gender);
    }
}

const new_short_person = new ShortPerson();
new_short_person.printGender();



 ////// spread => split arrays or object 
 
 const numbers =[1,2,3];

/// add the array numbers a new number

 const newNumbers =[...numbers,4];
 console.log(newNumbers);
 
/// add new param to object 
const constPerson = {
    name:'dan'
};
const newConstPerson ={
    ...constPerson,
    age:27
}
console.log(newConstPerson);


 // rest => use ... to make function refer the list of var as array  

const filterxxx = (...argsss)=> {
    // filter its abuild in js function to filter parmas
    return argsss.filter(x=> x=== 1);
}
console.log(filterxxx (1,2,3,1,2,2,1));



/// exmp if we dont use the ... we sending array 

const filteryyy = (y)=> {
    // filter its abuild in js function to filter parmas
    return y.filter(x=> x=== 1);
}
console.log(filteryyy ([1,2,3,1,2,2,1]));




//// destructuring => brake array or object to simple vars 
var first_person;
var third_person;

const pepole12= ['jon','bob','dan','shark'];
[first_person,,third_person]= pepole12;

console.log(third_person);

//////copy class vs copy pointer of class 
const copyPerson =
{
    name:'dan'
};

// this will copy only the pointer 
const copyPerson2 =copyPerson ;
copyPerson.name = "this is the sorce name ";
// now we will see that the propery of copyPerson2 becuse 
//copyPerson2 is only pointer to copyPerson 
console.log(copyPerson2);

/// to realy copy class 

const realyCopyPerson = 
{
    ...copyPerson
}
//changing the copyPerson.name will not effect on realyCopyPerson
copyPerson.name = "123123";

console.log(realyCopyPerson);



/// run function on every element in array and save on new one

const myNumbers=[1,2,3];

const myNewNumbers = myNumbers.map((num)=>{
    return num * 2;
})

console.log("myNumbers:"+myNumbers)
console.log("myNewNumbers:"+myNewNumbers)

