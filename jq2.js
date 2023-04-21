// window.onload = function (){
//     const text1=document.getElementById("text1")
//     const btn=document.getElementById("btn")
//     const ans=document.getElementById("ans")
//     let couter=1;
//     let object={}
//     let arr= [{
//         "key":1,
//         "value":"apple",

//     }];
//     let b;
//     btn.addEventListener('click',()=>{
//         console.log("add")
//         console.log("button clicks");
//         // console.log(arr.push())
//         b=text1.value;
//         object.key=couter++;
//         object.value=arr;
//         arr.push(b);
//         console.log(arr)
//         ans.value=arr
//     })   
// }


window.onload = function () {
    let Arr = [];
    const text1 = document.getElementById("text1");
    const button = document.getElementById("button");
    const ans = document.getElementById("ans");


    let counter = 1;
    let object = {};
    btn.addEventListener('click', () => {
        object = {
            "key": counter++,
            "value": Add.value,
        }
        Arr.push(object);
        console.log(Arr);
        Ans.value = (Arr);
    })
}