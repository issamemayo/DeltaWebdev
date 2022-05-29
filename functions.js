document.addEventListener('DOMContentLoaded',function(){
const table= document.querySelector("table");
table.addEventListener("click",function(e){
    if(e.target.nodeName =="TD"){
        e.target.style.backgroundColor= "brown";
        setTimeout(()=>{
            if(e.target.nodeName =="TD"){
            e.target.style.background="#a9c25d";
            }
            
            },900)  ;
    } 
});

 setTimeout(function(){const appendedlist = [];
while(appendedlist.length<=15){
var rand= Math.floor(Math.random()*16) +1;
if (appendedlist.includes(rand)== false){
        appendedlist[appendedlist.length]=rand;
    }
let newtile=document.getElementById(`${rand}`);
setTimeout(()=>{newtile.style.backgroundColor="brown";},900
);
    newtile.style.backgroundColor="#a9c25d";
}});


}


)






