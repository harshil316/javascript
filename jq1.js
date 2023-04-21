
window.onload = function () {
    const text1 = document.getElementById("text1")
    const text2 = document.getElementById("text2")
    const btn = document.getElementById("btn")

    const total = document.getElementById("total")

    btn.addEventListener('click', () => {
    console.log("button click");
    console.log(`${text1}and ${text2}`);
    console.log(+text1.value + +text2.value);
    console.log(total.value=(+text1.value + +text2.value));
    
})
}