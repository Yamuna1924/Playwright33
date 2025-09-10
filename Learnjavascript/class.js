// class calculator {
//     //functions become methods
//     //methods are functions that belong to an object
//     //in class we write variables also 
//     studentname="Krishna"
//     add(n1, n2) {
//         console.log(n1 + n2)
//     }
//     substract(n1, n2) {
//         console.log(n1 - n2)
//         this.add(99,10) //calling add method with substract method-we use this.keyword
//         //this keyword refers to the current object instance
//     }
//     multiply(n1, n2) {
//         console.log(n1 * n2)

//     }
//     divide(n1, n2) {
//         console.log(n1 / n2)
//     }
//     //constructor without parameters
//     // constructor(){
//     //     console.log("This is Yamuna _constuctor methos")
//     // }
//     constructor(value1,value2){
//         console.log(value1)
//         console.log(value2)
//         console.log("This is Yamuna _constuctor methos with parameters")
//         this.add(6,8)
//     }

// }
// //create object to run otherwise methods are not called/obj,cal ,create n number......yamu also
// let obj1 = new calculator("yamuna","Nagu") //we call as object of the class or instance of the class 
// // obj1.add(3, 5)
// // obj1.substract(56, 34)
// obj1.substract(87,34)
//we can create multiple objects to run methods
// const yamu = new calculator(2,3)
// yamu.add(5, 6)
// yamu.divide(8, 9)

// console.log(obj1.studentname)
// yamuna
// Nagu
// This is Yamuna _constuctor methos with parameters
// 8
// 22
// 2
// 3
// This is Yamuna _constuctor methos with parameters
// 11
// 0.8888888888888888
// Krishna
//===================================================================//
//class is used to re usability of code 
//we create class and export then import ,create object use in onother code
//ex: create login with creds and used in add jobtitle,add employee,add buzzevery where jusst import,create obj and used
//easy to maintainance and reusabilityof code
//=============================================
//=>>..this. keyword used to calling one mothod with another method in the same class
//..this. keyword used to refer the current object instance
//ex:
// class calculator2 {

//     studentname="Krishna"
//     add(n1, n2) {
//         console.log(n1 + n2)
//         this.studentname
//     }
//     substract(n1, n2) {
//         console.log(n1 - n2)
//         this.add(99,10) //calling add method with substract method-we use this.keyword
//         //this keyword refers to the current object instance
//     }
// }
// const obj3=new calculator2()
// obj3.add(3,4)
// obj3.substract(9,8)
//result
// 7
// 1
// 109


//=>>>constuctor-simply a mothod,Runs automatically when object is created
//...constructor parameters direclty we can assign to object 
//..In JavaScript, a class can have only one constructor.
//..define more than one constructor,Js will throw an error, because it wouldn’t know which one to call when creating an object.
//ex:
// class value{
//     constructor(value1,value2){
//         console.log(value1)
//         console.log(value2)
//         console.log("This is Yamuna _constuctor methos with parameters")
        
//     }
// }
// const obj2=new value("yamuna","Nagu")
// yamuna
// Nagu
// This is Yamuna _constuctor methos with parameters

//==>static-without creating an object we can call static varibles and methods with classname
//...static methods are called on the class itself, not on instances of the class.
//ex:
  class student{
    static stuname="Lavanya"        //static variable
    stuplace="hyd"                  //  non static variable
    m1(){                            //non static method
        console.log("This is m1 method")
        console.log(this.stuplace)
    }
    static m2(){                      //static method
        console.log("This is m2 method")
    }
    static m3(){                      //static method
        console.log("This is m3 method")
        console.log(this.stuname)
  }
}
const obj4=new student()
obj4.m1() //unstatic method
console.log(student.m3())//static method 
    
//   console.log(student.stuname) //Lavanya
//     console.log(student.stuplace) //undefined, because stuplace is not static
//     console.log(student.m2()) //This is m2 method
//     console.log(student.m1()) //undefined
