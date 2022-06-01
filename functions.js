document.addEventListener('DOMContentLoaded',function(){
    //
    function clicklightup(e){     
        if(e.target.nodeName=="TD" && e.target.style.backgroundColor=="orange"&& enableClick==true){
            e.target.style.backgroundColor= "brown";
            e.target.style.position.bottom="5px";
            e.target.style.position="relative";

            setTimeout(()=>{
                e.target.style.backgroundColor="orange";
                e.target.style.position.top="5px";
                e.target.style.position="relative";
            },1000)
        }
        }
//
        function lightup(token){
            token.style.backgroundColor="brown";
            setTimeout(()=>{
                token.style.backgroundColor="orange";
            },1000)
        }
//
function checker(e){
        if (e.target.nodeName=="TD"){
            console.log( e.target.id);
        }
    
}

//
   var enableClick=false;

function gamebegin(){
  
 const appendedlist = [];
 while(appendedlist.length<=15){
var rand= Math.floor(Math.random()*16) +1;
if (appendedlist.includes(rand)== false){
 appendedlist[appendedlist.length]=rand;
        console.log(`${rand}`);}
          }
          var i=0;
          console.log(appendedlist);
          const checklist=[]
            appendedlist.forEach((valoo) =>{
                  console.log(valoo);
                var newtile=document.getElementById(`${valoo}`);
                console.log(newtile);
                var delay = appendedlist.indexOf(valoo)
                checklist.push(valoo);
                console.log(checklist);
                const table= document.querySelector("table");
              table.addEventListener("click",(e)=> checker(e));
              
                
            

    
        setTimeout(() => {
            lightup(newtile);
            console.log(newtile.id)
            const table= document.querySelector("table");
            enableClick=true;
            table.addEventListener("click",(e)=> clicklightup(e));
           
            
            
            
        },3000*(delay+1));
        
       

        
    })
}
document.querySelector('#start').onclick=gamebegin;


          

     

    


    




}
)






