//Encapsulation;one method depend on onother method within the class

// class withdraw{
//     holdername;
//     atmpin;
//     withdrawamount;
//      holderdetails(name,pin,amount){
//         this.holdername=name;
//         this.atmpin=pin;
//         this.withdrawamount=amount;

//      }
//       dispalydetails(){
//         console.log(this.holdername,this.atmpin,this.withdrawamount)
//       }

// }
//  const obj=new withdraw()
//  obj.holderdetails("Yamuna",1234,5500)
// obj.dispalydetails()

//inheritance;one class inherit from another class
//single inheritance;one class inherit from one class
//  class A{
//       stuname1="yamuna"
//       stuplace1="Atp"
//      m1(){
//         console.log("This.is m1 method")
//      }
//      m2(){
//         console.log("This is m2 methos")
//      }
//  }
//   class B extends A{
//      stuname="shilpa"
//      stuplace="Atp"
//      m3(){
//         console.log("This.is m8 method")
//      }
//      m4(){
//         console.log("This is m4 methos")
//      }
//  }
//  const cls=new B()
//  cls.m1() //without creating object of class A we can call Class A methods
// console.log(cls.stuname1)
//  cls.m2()
//  cls.m3()
//  cls.m4()

//multilevel inheritance;one class inherit from another class and that class inherit from another class

//   class C{
//      stuname3="shilpa"
//      stuplace3="Atp"
//      m5(){
//         console.log("This.is m5 method")
//      }
//      m6(){
//         console.log("This is m6 methos")
//      }
//  }
//   class D extends C{
//       stuname2="yamuna"
//       stuplace2="Atp"
//      m7(){
//         console.log("This.is m7 method")
//      }
//      m8(){
//         console.log("This is m8 methos")
//      }
//  }
//   class E extends D{
//      stuname4="shilpa"
//      stuplace4="Atp"
//      m9(){
//         console.log("This.is m9 method")
//      }
//      m10(){
//         console.log("This is m10 methos")
//      }
//  }
//  class F extends E{
//      stuname5="shilpa"
//      stuplac5="Atp"
//      m11(){
//         console.log("This.is m11 method")
//      }
//      m12(){
//         console.log("This is m12 methos")
//      }
//  }
 
// const objf=new F()
// objf.m5() //c
// objf.m7() //D
// objf.m9() //E
// objf.m11() //F
// console.log(objf.stuplace3) //C
// console.log(objf.stuplace2) //D

//hirarchical inheritance;one class inherit from another class and that class inherit from another class
class G{
     stuname6="shilpa"
     stuplace6="Atp"
     m13(){
        console.log("This.is m13 method")
     }
     m14(){
        console.log("This is m14 methos")
     }
 }
class H extends G{
     stuname7="yamuna"
     stuplace7="Atp"
     m15(){
        console.log("This.is m15 method")
     }
     m16(){
        console.log("This is m16 methos")
     }
 }
class I extends G{
     stuname8="shilpa"
     stuplace8="Atp"
     m17(){
        console.log("This.is m17 method")
     }
     m18(){
        console.log("This is m18 methos")
     }
 }

//  const objh=new H()
//  objh.m13() //G
//  objh.m15() //H
//  console.log(objh.stuplace6) //G
//  const obji=new I()
//  obji.m13() //G
//  obji.m17() //I
//  console.log(obji.stuplace6) //G

//POLYMORPHISM;one method with same name in different classes
//overriding;one method with same name in different classes
//overloading;one method with same name in same class with different parameters
// class A{
//    add(n1,n2){
//       console.log(n1)
//       console.log(n2)
//       console.log(n1+n2)
//    }
   
//    m1(){
//       console.log("This is m1 method from parent")
//    }
// }
// class B extends A{
//    add(n1,n2,n3){
//       console.log(n1)
//       console.log(n2)
//       console.log(n3)
//       console.log(n1+n2+n3)
//    }
   
//    m1(){
//       console.log("This is m1 method from child")
//    }
// }
// // const objb=new B()
// // objb.m1()  //overriding //in js execute top to bottom,but in this override and execute 2nd one
// // objb.add(1,2,3,4) //overloading //here i given extra(4is overloded)parameter but it ovoid extra one 
// const obja=new A()
// obja.add(2,3,4) //overloaded

//Prototype:

class method{
   m1(){
        console.log("This.is m1 method")
      }
     m2(){
         console.log("This is m2 methos")
     }
}
method.prototype.m4=function() {
   console.log("This is prototype method")
 }
method.prototype.stuname="Yamuna"

const objp=new method()
objp.m1()
objp.m2()
objp.m4()
console.log(objp.stuname)

//result
//  This.is m1 method
// This is m2 methos
// This is prototype method
// Yamuna    

