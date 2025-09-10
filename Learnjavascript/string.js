str='This is js class'
//lenght-to find out how many characters in string
// console.log(str.length) //16
//indexing-
// console.log(str[5]) //i
// console.log(str.chartAt(5))
//substring-to get part of string
// console.log(str.substr(3,6)) //s is j
//touppercase
// str1="javascript"
// str2=str1.toUppercase()
// console.log(str2)
//toLowercase
// str3="JAVASCRIPT"
// str4=str3.toLowercase()
// console.log(str4)
//includes-to check if string contains a substring or not
// console.log(str.includes("This")) //true
// //how to convert string to number
// str5=Number("57")
// console.log(typeof(str5)) //number
// str6=Number("57.5")
// console.log(typeof(str6)) //number
// str7=Number("Raju")
// console.log(typeof(str7)) //Number 
// console.log(str7) //NaN
// //replace-to replace a substring with another substring
// p1="rs300"
// p2="rs25"
// console.log(p1+p2) //1)it gives string rs300rs25 so need to change replace rs with empty string
// //2)then convert string to number
// p3=p1.replace("rs","") //"300" or directly write Number(p1.replace("rs","")) //300
// p4=p2.replace("rs","") //"25"  or Number(p2.replace("rs",""))//25
// p5=Number(p3) //300
// p6=Number(p4) //25  
// console.log(p5+p6) //325

p1=Number("10.6") //10.6
console.log(p1)
console.log(parseInt(p1)) //10
console.log(parseFloat(p1)) //10.6
// console.log(p1.toFixed(2)) //10.60
// console.log(p1.toFixed(3)) //10.600
// console.log(p1.toFixed(1)) //10.6
// console.log(p1.toFixed(0)) //11