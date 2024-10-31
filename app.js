let boxes = document.querySelectorAll(".boxes");

for(box of boxes){
    box.addEventListener("click", function(event){
        console.dir(event.target);
    });
}