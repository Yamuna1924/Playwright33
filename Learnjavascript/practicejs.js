// function isAnagram(a, b) {
//     str1 = a.split("").sort().join("")
//     str2 = b.split("").sort().join("")

//     if (str1 == str2) {
//         console.log("Given strings are anagram")
//     }
//     else {
//         console.log("Given strings are not anagram")
//     }
// }
// isAnagram("Anagram","Nagaram") //need to convert lower case
// // a-toLowerCase-anagram, split-a n a g r a m  ,sort-a a g n m r ,join-aagnmr
// //b-toLowerCase-nagaram, split-n a g a r a m ,sort-a a g n m r ,join-aagnmr //a=b
// // //Given strings are anagram
// isAnagram("anagram","nagaram") //no need to convert to lowercase
//  function isAnagram(x,y){
// str1=x.toUpperCase().split("").sort().join("")
// str2=y.toUpperCase().split("").sort().join("")
// if(str1==str2){
//     console.log("Given Strings are Anagram")
// }else{
//     console.log("Given Strings are not Anagram")
// }
//  }
//  isAnagram("Heart","Heat")
//  isAnagram("haert","earth")
//==========================================================================================
//Rotation r times
arr=[1,2,3,4,5]
function rightrotation(arr,r){
    if(r==0) return arr;
    for(i=0;i<r;i++){
        let arr2=arr.pop();
        arr.unshift(arr2);
        
    }
    return arr;

}
console.log(rightrotation([1,2,3,4,5],3))
//[ 3, 4, 5, 1, 2 ]
////leftrotation
arr=[1,2,3,4,5]



function leftrotation(arr,r){
    if(r==0) return arr;
    for(i=0;i<r;i++){
        let arr2=arr.shift(arr);
        arr.push(arr2);
    }
    return arr;

}
console.log(leftrotation([1,2,3,4,5],3))
