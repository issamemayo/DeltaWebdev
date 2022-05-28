document.addEventListener('DOMContentLoaded',function(){
document.querySelectorAll('td').forEach(function(td){
    td.onclick=function(e){
        td.addEventListener("click", e => e.target.style.background= "brown")
        td.addEventListener("click", e => e.target.style.position= "relative");
        td.addEventListener("click", e => e.target.style.bottom= "2px");
        setTimeout(()=>{
        e.target.style.background="#a9c25d";
        e.target.style.position= "relative";
        e.target.style.top="2px";
        },700)
        
        
    }

});
});
    