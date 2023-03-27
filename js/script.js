// var links =document.querySelector(".links")
// var box =document.querySelector(".hea")
// var put1=document.querySelector("#but1")
// var put2=document.querySelector("#but2")
// var itm =localStorage.getItem("username")
// var us =document.querySelector(".user")
// if (window.onload){
//     put1.style.display="block"
//     put2.style.display="block"
//     itm.style.display="none"

// }

// if (localStorage.getItem="username"){
//     us.style.display="block"
   
//     put1.remove()
//     us.innerHTML=itm
//     us.style.fontSize="25px"
    
//     box.style.color="orange"
// }

// let allProducts =document.querySelector(".contents")
// let prodects =[
//     {
//         id:1,
//         images:"images/img5.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #00fbff",
//         wordcolor:"rgb(7, 222, 230)",
//         butcolor:"btn btn-outline-info",
//         iconcolor:"rgb(7, 222, 230)",
//         title:"Ferrari ",
//         sub:"Ferrari 296 GTB 2022 is a rechargeable sports hybrid car, revealed by the Italian supercar maker last year and presented asthe first real production Ferrari car to be equipped with a six-cylinder engine (6-cylinder), where the number 296 refers to the engine capacity and the number of cylinders, while the GTB stands for Ferry Gran Turismo Berlinetta",
        
        
//     },
//     {
//         id:2,
//         images:"images/img2.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #1a1a1a ",
//         wordcolor:"rgb(43, 40, 40)",
//         butcolor:"btn btn-outline-dark",
//         iconcolor:"rgb(43, 40, 40)",
//         title:"Ferrari Sport",
//         sub:"Ferrari features a large front grille located at the front of the car, which is divided into several sections to improve the car's aerodynamics. The headlights are designed horizontally and wide, directed towards the hood.It also has elliptical air vents located on the sides of the car. Ferrari has a rear spoiler with a sporty design.The tires are large",
        
//     },
//     {
//         id:3,
//         images:"images/yellow3.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #d8db09 ",
//         wordcolor:"rgb(190, 190, 0)",
//         butcolor:"btn btn-outline-warning",
//         iconcolor:"rgb(190, 190, 0)",
//         title:"Mercedes",
//         sub:"Mercedes-Benz AMG engines are among the engines that have won the confidence of various car enthusiasts around the world, especially after the great success it has achieved since its inception. Next, we will talk about the most powerful Mercedes-Benz AMG engines in history:AMG at Mercedes consists of several departments such as the management departmen.",
       

//     },
//     {
//         id:4,
//         images:"images/img11.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px #f30808",
//         wordcolor:"#f30808",
//         butcolor:"btn btn-outline-danger",
//         iconcolor:"#f30808",
//         title:"Bugatti",
//         sub:"Bugatti is currently a leading car company in the manufacture of luxury and distinguished cars, as it is one of the companies that are at the forefront of the global automotive market, as it has a long heritage that gives inspiration to the designers and engineers who manufacture modern models from the Bugatti company,",
        

//     },
//     {
//         id:5,
//         images:"images/img55.jpg",
//         boxshadow:"box-shadow:4px 0px 16px 0px gray",
//         wordcolor:"gray",
//         butcolor:"btn-outline-secondary",
//         iconcolor:"gray",
//         title:"Mercedes 2022",
//         sub:"The last technology is among the latest 8 great technologies for Mercedes, where Mercedes stated that it will not use laser-powered lights because it is not convinced of them, but this does not mean the development of lighting in cars. Mercedes has developed the LED lights in the car in a large and advanced way, and it excelled in the tests.",
       

//     },
// ]

// function drawItems (){
//     let S =prodects.map((item)=>{
//         return `
//         <div class="contents">
//         <div class="prod1" style="margin-top: 20px;  ${item.boxshadow}">
//             <div class="desc1">
//                 <div class="img">
//                     <img src="${item.images}" alt="" style="width: 280px; height: 300px;" >
//                 </div>
//                 <div class="words">
//                 <span class="wo1" style="font-size: 30px; color: ${item.wordcolor}">${item.title}</span>
//                 <br>
//                     <span style="color: ${item.wordcolor}">${item.sub}</span>
//                 </div>
//                 <div class="button" >
//                     <button type="button" id="but11"  class="${item.butcolor}"onClick="add(${item.id})" >Add To Cart</button>
//                 </div>
//             </div>
//             <br>
//             <br>
//             <div class="icon">
//                <i class="far fa-heart"  style="font-size: 25px; color:${item.iconcolor} ; "></i>
//             </div>
//         </div>
//     </div>
//     <br>
//     <br> 
    
//     `

//     })
//     allProducts.innerHTML=S
// }

// drawItems()
// var kj =document.querySelector(".co")

// function add(id) {
    
//     let choose=prodects.find((item) => item.id === id )
    
//    kj.innerHTML += `<p> ${choose.title} </p>`
// }

// var op =document.querySelector(".i55")

// op.addEventListener("click" ,function(){
//     kj.style.display="block"
// })

// op.addEventListener("dblclick" ,function(){
//     kj.style.display="none"
//     kj.innerHTML=""
// })

var pic2=document.getElementById("ir")
var pic1=document.getElementById("im")

pic2.style.visibility="hidden"
pic1.addEventListener("click",function() {
    pic2.style.visibility="visible"
})


var qw=document.getElementById("as");
var bh=document.getElementById("kl");
qw.addEventListener("click",function() {
    bh.style.marginTop="450px"
})