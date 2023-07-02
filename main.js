let A = document.getElementById("input-a");
let B = document.getElementById("input-b");
let display_ans = document.getElementById("display-ans");
let reload_page = document.getElementById("reload");
let add = document.getElementById("input-add");
let sub = document.getElementById("input-sub");
let mul = document.getElementById("input-mul");
let div = document.getElementById("input-div");


// add
add.addEventListener('click',() => {
    let result = A.value + B.value;
    display_ans.innerHTML = `This addition(+) operation didn't work. Our developer team working on it. We will update soon`;
    // alert(`Result: ${A.value} + ${B.value} = ${result}`);
});
// end add


// sub
sub.addEventListener('click',() => {
    let result = A.value - B.value;
    display_ans.innerHTML = (`Result: ${A.value} - ${B.value} = ${result}`);
    // alert(`Result: ${A.value} - ${B.value} = ${result}`);
});
// end sub

// mul
mul.addEventListener('click',() => {
    let result = A.value * B.value;
    display_ans.innerHTML = (`Result: ${A.value} * ${B.value} = ${result}`);
    // alert(`Result: ${A.value} * ${B.value} = ${result}`);
});
// end mul

// div
div.addEventListener('click',() => {
    let result = A.value / B.value;
    display_ans.innerHTML = (`Result: ${A.value} / ${B.value} = ${result}`);
    // alert(`Result: ${A.value} / ${B.value} = ${result}`);
});
// end div

// reload_page
reload_page.addEventListener('click', ()=>{
    location.reload()="index.html";
})
