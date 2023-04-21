let arr=[1,2,3,4,5];
function fa_in(a)
{
    arr.unshift(a);
    console.log(arr);
}
fa_in(1);

function fa_de(a)
{
    arr.shift(a);
    console.log(arr);
}
fa_de();

function la_in(a)
{
    arr.push(a);
    console.log(arr);
}
la_in(1);

function la_de(a)
{
    arr.pop(a);
    console.log(arr);
}
la_de();