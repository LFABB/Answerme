let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
    alert("Im blushing right now...")
})

btn2.addEventListener("click", function(){
    let x = Math.random()*400;
    let y = Math.random()*400;
    btn2.style.setProperty("top", `${y}px`);
    btn2.style.setProperty("right", `${x}px`);
})