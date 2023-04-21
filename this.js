// let student = {
//     name:"raj",
//     age:17,
//     course:"node js",
//     getstudentname:function(){
//         return this;
//     }
// }
// console.log(student.getstudentname());



// let student1 = {
//     name: "raj",
//     age: 17,
//     course: "node js",
// }
// let student2 = {
//     name: "ram",
//     age: 18,
//     course: "react js",
// }
// let getstudentname = function(){
//     console.log(this.name);
// }
// getstudentname.call(student1);
// getstudentname.call(student2);


let student1 = {
    name: "raj",
    age: 17,
    course: "node js",
}
let student2 = {
    name: "ram",
    age: 18,
    course: "react js",
}
let getstudentname = function(){
    // console.log(this.name+" - "+city+" - "+state+" - "+country);
    console.log(this.name);
}
// getstudentname.call(student1,"surat","gujrat","india");
getstudentname.call(student1,[]);
let useafter = getstudentname.bind(student1);
useafter();