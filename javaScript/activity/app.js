let btn = document.querySelector("button");
let div = document.querySelector("div");

let h1 = document.querySelector("h1");
btn.onclick = function () {
    let color1 = Math.random() * 255;
    let color2 = Math.random() * 255;
    let color3 = Math.random() * 255;
    console.log("Button is clicked");
    // console.log(color1);
    // console.log(color2);
    // console.log(color3);
    div.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
    h1.innerText = `rgb( ${color1} , ${color2} , ${color3})`;
};