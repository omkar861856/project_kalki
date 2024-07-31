let string = "hello world!";

//concatination joining two strings or arrays 

let string3 = string; 

string3 = "Hello World 3"

console.log(string3);

const string2 = "hello world from other universe!";

// template literal syntax --> es6
console.log(string.concat(` ${string2}`));

console.log(string)


console.log(string.includes(`worlds`));

// copy by value and copy by reference

 let array = [1, 2, 3];

 let array2 = array


array2.pop();

console.log(array);


let myObj = {
    name: "John",
    age: 30
}


let myObj2 = myObj;


myObj2.age = 31;


console.log(myObj);

console.log(string.indexOf("l"))

console.log(string3.substring(0,5).repeat(4));


// object methods

let obj = {
    name: "John",
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

obj.age = 31; 


obj = {
    name: "Jane",
    age: 31
}

console.log(obj);

console.log(new Object)


console.log(Object.keys(obj));


 // es5 var declare variables  - hoisting redeclaration

 // string , array , object 





const arrayMethods = {

    slice: function (a,b){
        return a +b
    },
    map: function(){
        return 4
    }

}


let array1 = [1, 2, 3];

let array3 = arrayMethods.slice();

console.log(arrayMethods.slice(0,3))




