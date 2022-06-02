document.addEventListener('DOMContentLoaded',function(){
    //
    function clicklightup(e){     
        if(e.target.nodeName=="TD" && e.target.style.backgroundColor=="orangered"){
            e.target.style.backgroundColor= "#2F8CAB";
            e.target.style.position.bottom="5px";
            e.target.style.position="relative";

            setTimeout(()=>{
                e.target.style.backgroundColor="orangered";
                e.target.style.position.top="5px";
                e.target.style.position="relative";
            },1000)
        }
        }
//
        function lightup(token){
            token.style.backgroundColor="#2F8CAB";
            setTimeout(()=>{
                token.style.backgroundColor="orangered";
            },1000)
        }
//
function checker(e){
        if (e.target.nodeName ==="TD"&& e.target.style.backgroundColor=="orangered"){
            
            e.target.style.backgroundColor= "#2F8CAB";
            setTimeout(()=>{
                e.target.style.backgroundColor="orangered";
            let checkvalue = e.target.id;
            console.log( checkvalue);
        },1500);
            
        }
    
}

//
document.querySelector('#start').onclick=gamebegin;

function gamebegin(){

  
 const appendedlist = [];
 const table= document.querySelector("table");
 while(appendedlist.length<=15){
var rand= Math.floor(Math.random()*16) +1;
if (appendedlist.includes(rand)== false){
 appendedlist[appendedlist.length]=rand;
        console.log(`${rand}`);}
          }
          console.log(appendedlist);
          const checklist=[]
            appendedlist.forEach((valoo) =>{
                  console.log(valoo);
                var newtile=document.getElementById(`${valoo}`);
                console.log(newtile);
                var delay = appendedlist.indexOf(valoo)
                checklist.push(valoo);
                console.log(checklist);
                
              
                
                

    
        setTimeout(() => {
            lightup(newtile);
            console.log(newtile.id)     
        },3000*(delay+1));
        console.log("hello");
        table.addEventListener("click",(e)=> checker(e));
        
           
        table.addEventListener("click",(e)=> clicklightup(e));
        
       

        
    })
}



          

     

    


    




}
)






