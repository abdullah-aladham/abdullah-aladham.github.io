const html= document.getElementById("htmlPage");
const body=document.getElementById("body");
const navbar=document.getElementById("navbar")
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        html.setAttribute('data-bs-theme',"dark");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-dark");
    // body.setAttribute("color","#e0e1dd");
    // body.setAttribute("background-color","#2b3035")
    body.style.backgroundColor="#2b3035";
    body.style.color="#5D9D61";
    // navbar.style.color="#5D9D61";
    // navbar.setAttribute("color","#5D9D61");
    }else {
        html.setAttribute("data-bs-theme","light");
        navbar.setAttribute("class","navbar navbar-expand-lg fixed-top navbar-light bg-light");
        body.setAttribute("color","dark");
            body.style.backgroundColor="#edece7";
            body.style.color="#2E6F40";

    }
})