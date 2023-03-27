var email1=document.querySelector("#email")
var password1=document.querySelector("#pwd")
var but33 =document.querySelector("#but33")




var emailget =localStorage.getItem("email")
var passget =localStorage.getItem("password")

but33.addEventListener("click",function(e){
    e.preventDefault()
    if(email1.value===""|| password1.value==="" ){
        alert("please fill the form")
    }else{
        if(emailget&&emailget.trim()===email1.value  &&  passget&&passget.trim()===password1.value){
            setTimeout(() => {
                window.location="index.html"
                
            }, 1200);
           
        
        }else{
            alert("there is wrong in your password or email")
        }
        

    }
})