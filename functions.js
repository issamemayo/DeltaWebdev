document.addEventListener('DOMContentLoaded',function(){
    //
    function keylightup(e){     
        if(e.target.nodeName=="TD" && e.target.style.backgroundColor=="orange"){
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
    
const table= document.querySelector("table");
table.addEventListener("click",(e)=> keylightup(e));
   


 const appendedlist = [];
 while(appendedlist.length<=15){
var rand= Math.floor(Math.random()*16) +1;
if (appendedlist.includes(rand)== false){
 appendedlist[appendedlist.length]=rand;
        console.log(`${rand}`);}
          }
          var i=0;
          const checklist=[]
          console.log(appendedlist);
            appendedlist.forEach((valoo) =>{
                  console.log(valoo);
                var newtile=document.getElementById(`${valoo}`);
                
                var delay = appendedlist.indexOf(valoo)
                checklist.push(valoo);
                console.log(checklist);

              
                
            

    
        setTimeout(() => {
            lightup(newtile);
            
            
        },2000*(delay+1));


    })

          

     

    


    




}
)






