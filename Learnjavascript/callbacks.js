//callback function is a function that is passed as an argument to another function
    //example of callback function
        // function m15(){
        // console.log("This.is m15 method")
        // }
        // function m16(callback){
        // console.log("This is m16 method")
        // callback() //calling the callback function
        // }
        // m16(m15)
//callback
// function name(){
//     console.log("Yamuna")
// }
// function greeting(callback){
//     console.log("Good evening")
//     callback()
// }
// greeting(name) //Good evening
                //Yamuna
//closer function is a function that has access to its outer function's scope even after the outer function has finished executing

function add(n1,n2,n3){
    console.log(n1+n2+n3)
}
function substract(n1,n2){
    console.log(n1-n2)
}
function multiply(n1,n2){
    console.log(n1*n2)
}
function calculator(callback){
    let n1= 6
    let n2= 8
    let n3= 9

    callback(n1,n2,n3)
}
calculator(add) //23
calculator(substract) //-2
calculator(multiply) //48

//higher order function is a function that takes another function as an argument or returns a function as its result
 