// // document.getElementById("submit-btn").addEventListener("click", () => {
// //     const emailEle = document.getElementById("email");
// //     if (emailEle.value === "") {
// //         alert("Email is required")
// //     } else {
// //         emailEle.value = "a@b.com"
// //     }
// // });

// // document.querySelector(".btn").addEventListener("click" , ()=>{
// //   const btn = document.querySelector("#submit-btn");
// //   btn.className = btn.className + " btn"
// // })

// // document.querySelector("p").innerText = "Hello From DOM"
// // console.log(document.querySelector("form").innerHTML);

// // console.log(document.querySelector(".parent").children[0].nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling.parentElement.children[0].innerText = "MY CHANGED DATA");

// console.log(document.querySelector("img").getAttribute("alt"));
// document.querySelector("img").setAttribute("alt" , "BQ-logo");
// console.log(document.querySelector("img").getAttribute("alt"));
document.querySelector("body > button").addEventListener("click" , ()=>{
    const parent = document.querySelector("body > div.main");
    const newEle = document.createElement("div");
    newEle.setAttribute("class" , "child");
    const pElem = document.createElement("p");
    pElem.innerText = "Hello";
    newEle.appendChild(pElem);
    parent.appendChild(newEle)
})