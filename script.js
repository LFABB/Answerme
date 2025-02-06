document.getElementById("btn2").addEventListener("click", ()=>{
    let x = Math.random()*500;
    let y = Math.random()*500;
    document.getElementById("btn2").style.top = `${y}px`;
    document.getElementById("btn2").style.right = `${x}px`;
    
});

let alt = false;
function toggle(){
    if (alt == false){
        document.getElementById("lang").innerHTML = "ES";
        document.getElementById("btn1").innerHTML = "Yes";
        document.getElementById("message").innerHTML = "So then are you hiring me?";
        alt = true;
    }else{
        document.getElementById("lang").innerHTML = "EN";
        document.getElementById("btn1").innerHTML = "Si";
        document.getElementById("message").innerHTML = "Entonces, me contratas?";
        alt = false;
    }
};

document.querySelectorAll("button").forEach(x=>{x.style.width = "40px"});
document.querySelectorAll("button").forEach(x=>{x.style.height = "25px"});
document.querySelectorAll("button").forEach(x=>{x.style.border = "2px solid black"});
document.querySelectorAll("button").forEach(x=>{x.style.borderRadius = "5px"});
document.querySelectorAll("button").forEach(x=>{x.style.background = "none"});
document.querySelectorAll("button").forEach(x=>{x.style.cursor = "pointer"});