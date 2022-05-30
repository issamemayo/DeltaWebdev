document.addEventListener('DOMContentLoaded',function(){
const table= document.querySelector("table");
table.addEventListener("click",(e)=> keylightup(e));
   
        

function keylightup(e){     
    if(e.target.nodeName=="TD" && e.target.style.backgroundColor=="orange"){
        e.target.style.backgroundColor= "brown";
        setTimeout(()=>{
            e.target.style.backgroundColor="orange";
        },1000)
    }
    }
    function lightup(token){
        token.style.backgroundColor="brown";
        setTimeout(()=>{
            token.style.backgroundColor="orange";
        },1000)
    }
   



 const appendedlist = [];
 
while(appendedlist.length<=15){
var rand= Math.floor(Math.random()*16) +1;
if (appendedlist.includes(rand)== false){
 appendedlist[appendedlist.length]=rand;
        console.log(rand);
        let newtile=document.getElementById(`${rand}`);
        setTimeout(()=>{
    newtile.addEventListener("click",lightup(newtile));},1000*appendedlist.length);

    


    
}


}
}
)






