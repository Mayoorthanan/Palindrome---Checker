let output=document.querySelector("#result");
let btn=document.querySelector("#check-btn");
let input=document.querySelector("#text-input");
let main_div=document.querySelector(".main");



function palindromefinder(){
    let b=input.value;
    let p = b.toLowerCase().replace(/[^a-z0-9]/g, "");
    if(input.value===""){
        alert("Please input a value")
    }
    else{
            let count=0;
            for(let i=0;i<p.length/2;i++){
                if(p[i]==p[p.length-i-1]){
                    count+=1;
                }
            }
            if(count===Math.ceil(p.length/2)){
                main_div.style.height = "200px";
                output.innerText=b+" is a palindrome";
                input.value="";

            }
            else{
                main_div.style.height = "200px";
                output.innerText=b+" is not a palindrome";
                input.value="";
            }
        }
    
}


btn.addEventListener("click", palindromefinder);