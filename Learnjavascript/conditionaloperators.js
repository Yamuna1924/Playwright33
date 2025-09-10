//1))if satatement (single if)
// let age =20

// if (age>=18){
//     console.log('you are an adult')
// }

//2))if anf if (multiple independent if statements)
//in this case both are true statements
// let age =20 

// if (age>=18){ 
//     console.log('you are an adult')
// }
// if (age>=60){
//      console.log("You are a senior cistizen")
// }

//3))if else- you have two conditions (is condition true if block runs,condition false  else block runs)
// let age=20

// if(age>=18){
//     console.log("You are an adult")
// }
// else{
//     console.log("You are a minor")
// }

//4))else if -have more than two conditions

// let score=96

// if(score>=90){
//     console.log("Grade A")
// }else if(score>=75){
//     console.log("Grade B")

// }else if(score>=45){
//     console.log("Grade C")
// }else if(score>=35){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }

//5)) switch statement used perform different actions based on different conditions
    // ---alternatiive to if,if and if,if else,else if 

    // let score=75
    // switch (true) {
    //     case(score>=90):
    //      console.log("Grade A")
    //      break;
    //      case(score>=75):
    //         console.log("Grade B")
    //      break;
    //      case(score>=35):
    //      console.log("Pass")
    //      break;
             
    //     default:
    //         console.log("Fail")
    //         break;
    // }

    ////assignment

        let username="Admin"
        let password="admin123"
       

        if(username ==="" && password===""){

            console.log("username and password is required")
        }else if(username==="Admin" && password !== "admin123"){
            console.log("Invalid password")
        }else if(username!=="Admin" && password==="admin123"){
            console.log("Invalid password")
        }else if(username=="Admin"&& password==="admin123"){
            console.log("Log in Successfylly")
        }else {
            console.log("Invalid credentials");
        }



        //  const role[admin,manager,employee]
        //  switch (role) {
        //     case [1]:
        //         console.log("Access to Admin Dashboard")
        //         break;
         
        //     default:
        //         break;
        //  }

    