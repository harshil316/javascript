// // 21/11/2022
// function test
// {
//     console.log(` inside function ... ${n}`);   //template literal
//     return []; 
// }

// let n = test(10);
// console.log(typeof n);

// 22/11/2022

// //     function
// //         business logic called as function
// //         functions are used to reuse the business logic
// //         we have following types of functions upto "ES13"
// //         1) named functions
// //         2) anonymous functions
// //         3) rest parameters in functions
// //         4) default parameters in functions
// //         5) optional parameters in functions
// //         6) generators
// //         7) constructor functions
// //         8) IIFE  (Immidiate Invokable functional Expressions)  

// named function

//     the function with the particular name called as named function
//     Syntax

//     1) function definition
//     2) function calling

// function definition

//    function functionname(arg1,arg2,arg3,arg4,......argn){
//        business logic
//    }
// function calling

//    functionname(param1,param2,param3,param4,.....paramn);







// function fun_one(){
//     return "welcome to named functions";
// }
// console.log( fun_one() );  

// function fun_one(){
//     return "welcome";
// }
// console.log( fun_one );

// function fun_one(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }
// fun_one("Angular13","NodeJS","MongoDB");
// fun_one("ReactJS","NodeJS");
// fun_one();
// fun_one(undefined, "NodeJS");
// fun_one(null, null, null);
// fun_one(null, " ",null);
// fun_one(null, {},[]);



// function fun_zero() {
//   console.log("inside  fun_zero()");
//   return "Hello";
// }
// function fun_one() {
//   console.log("inside  fun_one()");
//   return fun_zero();
// }
// function fun_two() {
//   console.log("inside  fun_two()");
//   return fun_one();
// }
// console.log(fun_two());



// function fun_one() {
//     return "Hello";
//   }
//   function fun_two() {
//     return fun_one;
//   }  
//   console.log(fun_two()());
    



  function fun_one(arg1, arg2, arg3) {
    console.log(arg1(), arg2(), arg3());
    // console.log(arg1, arg2, arg3);
  }
  function fun_two() {
    return "Hello_1";
  }
  function fun_three() {
    return "Hello_2";
  }
  function fun_four() {
    return "Hello_3";
  }
  fun_one(fun_two, fun_three, fun_four);