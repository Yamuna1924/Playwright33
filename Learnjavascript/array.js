// str="Yamuna"
//result=anumaY
// arr=str.split("").reverse().join("")
// console.log(arr)
//filter-based on some logic i need to fiiter the elements (i need even number i filter,i need odd number i filtered) 
// arr1=[0,1,2,3,4,5,6,7,8,9,10]
// let evennumber= arr1.filter(number=> number % 2==0)
// console.log(evennumber)
// let oddnumber=arr1.filter(number=> number % 2 !=0 )
// console.log(oddnumber)
// let divisibleby3=arr1.filter(number=>number %3==0)
// console.log(divisibleby3)
//result
// [ 0, 2, 4, 6, 8, 10 ]
// [ 1, 3, 5, 7, 9 ]
// [ 0, 3, 6, 9 ]                  
 //map; is used to apply logic to each and every element in the array
 
//  arr1=[1,2,3,4,5,6,7,8,9,0,10,11,12]
//   //i want divide every element with 3
//   let dividedby3=arr1.map(number=>number+3)   //using ananymous function
//    console.log(dividedby3)
//...............=====
// let dividedby3=arr1.map( function (number){  //using normal function
//     return number/3
// })
 
// console.log(dividedby3)

//reduce :is used to reduce the array to a single value
//i want to add all the elements in the array
// arr4=[1,2,3,4,5,6,7,8,9,10]
// let sum=arr4.reduce((accumulator,number) => accumulator+number,1)
// console.log(sum)
// //56
// arr1=["Hello","Yamuna"]
// let sentence=arr1.reduce((accumulator,word)=> accumulator+word,"")
// console.log(sentence)
//HelloYamuna
// console.log("Hello"+"Yamuna")

arr8=[1,2,3,4,2,3,5,6,7,8,4,8,4,9,5]
// const uniquevalue=[...new set(arr8)]
 
// const uniquevalue = [...new Set(arr8)];
// console.log(uniquevalue); 
//[
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]



// let uniqueValuesForLoop = [];
// for (let i = 0; i < arr8.length; i++) {
//     if (!uniqueValuesForLoop.includes(arr8[i])) {
//         uniqueValuesForLoop.push(arr8[i]);
//     }
// }
// console.log(uniqueValuesForLoop);

// str="kanak"
//  function checkpolindrome(str){
//      revstr=str.split("").reverse().join("")

//      if(str==revstr){
//         console.log("This is polindrome")
//      }else{
//         console.log("This is not Polindrome")
//      }    
//  }

// checkpolindrome(str)



for(i=0;i<=100;i++){
    if(i%3==0){
        console.log("fizz")
    }else if(i==19){
        console.log("This is Yamuna birthday date")
    }else if(i==25){
        console.log("This is Naga birthday date")
    }else if(i%5==0){
        console.log("Buzz")

    }else if(i%3==0 && i%5==0){
        console.log("fizzBuzz")
    }else{
        console.log("yy")
    }
    
}