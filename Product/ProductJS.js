// Read More Product
function expandText(button) {
    var content = button.previousElementSibling;
    content.classList.toggle("expanded");
    button.innerHTML = content.classList.contains("expanded") ? "Read Less" : "Read More";
}

// feedback
const allStars = document.querySelectorAll('.star');
console.log(allStars);
allStars.forEach( (star,i))=>{
    star.onclick = function(){
        let.current_star_level = i + 1;

        allStars.forEach(star, j)=> {
            if(current_star_level >= j + 1){
                star.innerHTML = '&#9734';
            } else{
                star.innerHTML = '&#9734'
            }
        }
    }
}