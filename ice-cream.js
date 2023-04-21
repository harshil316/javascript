//console.log("I");

// setTimeout(()=>{
//   console.log("eat");
// },2000)
// //   console.log("eat");
// console.log("Ice Cream")


// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "peanuts"],
//  };

//  let order = (fruit_name, call_production) =>{
//     setTimeout(function(){ 
//       console.log(`${stocks.Fruits[fruit_name]} was selected`)    
//      call_production();
//     },2000)
//   };  

//   let production = () =>{ 
//     setTimeout(()=>{
//         console.log("production has started")
//         setTimeout(()=>{
//             console.log("The fruit has been chopped")
//             setTimeout(()=>{
//                 console.log("Add Water and ice ...")
//                 setTimeout(()=>{
//                     console.log("BHmmmmmmmmmmmmmmmm ...")
//                     setTimeout(()=>{
//                         console.log(`select container ${stocks.holder[1]} was selected`)
//                         setTimeout(()=>{
//                             console.log(`topping ${stocks.toppings[1]} was selected`)
//                             setTimeout(()=>{
//                                 console.log("Serve it!!!!!!!!!")
//                               },1000)
//                           },1000)
//                       },1000)
//                   },1000)
//               },1000) 
//           },2000)                    
//       },0000)       
//  };    





// function getSum(n)
// {
//     var sum = 0;
//     while (n != 0) 
//     {
//         sum = sum + n % 10;
//         n = parseInt(n / 10);
//     }
//     function finsum()
//     {
//         var nn = sum
//         var nsum = 0;
//         while (nn != 0) 
//         {
//             nsum = nsum + nn % 10;
//             nn = parseInt(nn / 10);
//         }
//         return nsum
//     }
//     return finsum()
// }
// console.log(getSum(123456))






// let order = (call_production) =>
// function getSum(n)
// {
//     var sum = 0;
//     while (n != 0) 
//     {
//         sum = sum + n % 10;
//         n = parseInt(n / 10);
//     }
//     function finsum()
//     {
//         var nn = sum
//         var nsum = 0;
//         while (nn != 0) 
//         {
//             nsum = nsum + nn % 10;
//             nn = parseInt(nn / 10);
//         }
//         return nsum
//     }
//     return finsum()
// };
// let production = () =>
// {
//     console.log("production has started");
// }
// order(production);




// let sum = (number1) => 
// {
//     let sum1 = 0;
//     console.log(number1);
//     while (number1 != 0) 
//     {
//         sum1 = sum1 + number1 % 10;
//         number1 = parseInt(number1 / 10);
//     }
//     return check(sum1);
// }
// let check = (value) => 
// {   
//     if (value <= 9) {
//         return value;
//     }
//     else {
//        return sum(value);
//     }
// }
// let total = (number, callback) => 
// {
//     return callback(number);
// }
// let number = 9898989898;
// console.log(total(number, sum));





let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

let order = ( time, work ) => {
    return new Promise( ( resolve, reject )=>{  
      if( is_shop_open ){
        setTimeout(()=>{           
          resolve(work())    
         }, time)  
      }  
      else{  
        reject( console.log("Our shop is closed") )  
      }  
    })
  }

console.log(  order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`)))
  order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
  .then(()=>{
    return order(0000,()=>console.log('production has started'))
  })
  
  .then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
  })
  .then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
  })
  .then(()=>{
    return order(1000, ()=>console.log("start the machine"))
  })
  .then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
  })
  .then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
  }) 
  .then(()=>{
    return order(2000, ()=>console.log("Serve Ice Cream"))
  })
  .catch(()=>{
    console.log("Customer left")
  })



// let sum = (number1) => {
//     while (number1 > 9) {
//         console.log(number1);
//         let sum1 = 0;
//         while (number1 != 0) {
//             sum1 = sum1 + number1 % 10;
//             number1 = parseInt(number1 / 10);
//         }
//         number1 = sum1;
//     }
//     console.log()
//     return number1;
// }
// let total = (number, work) => {

//     return new Promise((resolve, reject) => {

//         if (number > 0) {
//             resolve(console.log(work(number)));
//         }
//         else {
//             reject(console.log(number));
//         }
//     })
// }

// let number = 123456789;
// total(number, sum);