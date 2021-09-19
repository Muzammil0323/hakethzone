let popped = 0;
document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "lightblue";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});
function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};