// let numbers_array = [1, 2, 3, 4, 5];

//     console.log("original array: ");
//     console.log(numbers_array);

//     numbers_array.reverse();

//     console.log("reversed array: ");
//     console.log(numbers_array);



// function reverse_number()
// {
//     let rev = 0;
//     let num = 54321;
//     let lastDigit;
//     while (num != 0) 
//     {
//         lastDigit = num % 10;
//         rev = rev * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     console.log("Reverse number : " + rev);
// }
// reverse_number();


// anymous functions

// let reverse_number=()=>
// {
//     let rev = 0;
//     let num = 54321;
//     let lastDigit;
//     while (num != 0) 4
//     {
//         lastDigit = num % 10;
//         rev = rev * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }
//     console.log("Reverse number : " + rev);
// }
// reverse_number();



   
// Palindrome

// let checkPalindrome = (stringg) => {
//     return stringg === stringg.split("").reverse().join("");
// };
// console.log("Is Palindrome? : " + checkPalindrome("madam"));
// console.log("Is Palindrome?: " + checkPalindrome("apple"));




// generates all combinations 

// function substrings(str1)
// {
// var array1 = [];
//   for (var x = 0, y=1; x < str1.length; x++,y++) 
//   {
//    array1[x]=str1.substring(x, y);
//     }
// var combi = [];
// var temp= "";
// var slent = Math.pow(2, array1.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<array1.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array1[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   console.log(combi.join("\n"));
// }

// substrings("dhaduk");
