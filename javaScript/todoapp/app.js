let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    input.value = "";

    let dbtn = document.createElement("button");
    dbtn.classList.add("delete");
    dbtn.innerText = "delete" ;
    ul.appendChild(item);
    item.appendChild(dbtn);
    console.log(input.value);
});

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        // console.log(event.target.nodename);
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }
})




// let debtns = document.querySelectorAll(".delete");

// for(debtn of debtns){
//     debtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }