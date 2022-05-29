document.addEventListener('DOMContentLoaded',function(){
const table= document.querySelector("table");
table.addEventListener("click",function(e){
    if(e.target.nodeName =="TD"){
        e.target.style.backgroundColor= "brown";
       

        
    }
    setTimeout(()=>{
        e.target.style.background="#a9c25d";
       
        
        },700)
});
});
