let promot=require("prompt-sync")();
let arr=[1,2,3,4,5];

let n=parseInt(promot("enter n:"))
function fa_in(n)
{
    arr.unshift(n);
    console.log(arr);
}
fa_in(1);

let n2=parseInt(promot("enter n2:"))
function fa_de(n2)
{
    arr.shift(n2);
    console.log(arr);
}
fa_de();

let n3=parseInt(promot("enter n3:"))
function la_in(n3)
{
    arr.push(n3);
    console.log(arr);
}
la_in(1);

let n4=parseInt(promot("enter n4:"))
function la_de(n4)
{
    arr.pop(n4);
    console.log(arr);
}
la_de();
