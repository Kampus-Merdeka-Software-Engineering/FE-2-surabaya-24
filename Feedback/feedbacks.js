document.getElementById('imageUpload').addEventListener('change', readURL, true);
function readURL(){
    const file = document.getElementById("imageUpload").files[0];
    const reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";        
    }
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}

var star1 = document.querySelector('.starj1');
var star2 = document.querySelector('.starj2');
var star3 = document.querySelector('.starj3');
var star4 = document.querySelector('.starj4');
var star5 = document.querySelector('.starj5');

//making the star system work

star1.addEventListener('click', function(){
  if(star1.classList.contains('far')){
    star1.classList.remove('far')
    star1.classList.add('fas')
  }else if(star2.classList.contains('far') && star3.classList.contains('far') && star4.classList.contains('far') && star5.classList.contains('far')){
    star1.classList.remove('fas')
    star1.classList.add('far')
  }
  if(star2.classList.contains('fas')){
    star2.classList.remove('fas')
    star2.classList.add('far')
  }
  if(star3.classList.contains('fas')){
    star3.classList.remove('fas')
    star3.classList.add('far')
  }
  if(star4.classList.contains('fas')){
    star4.classList.remove('fas')
    star4.classList.add('far')
  }
  if(star5.classList.contains('fas')){
    star5.classList.remove('fas')
    star5.classList.add('far')
  }
})

star2.addEventListener('click', function(){
  if(star2.classList.contains('far')){
    star2.classList.remove('far')
    star2.classList.add('fas')
    star1.classList.remove('far')
    star1.classList.add('fas')
  }
  if(star3.classList.contains('fas')){
    star3.classList.remove('fas')
    star3.classList.add('far')
  }
  if(star4.classList.contains('fas')){
    star4.classList.remove('fas')
    star4.classList.add('far')
  }
  if(star5.classList.contains('fas')){
    star5.classList.remove('fas')
    star5.classList.add('far')
  }
})

star3.addEventListener('click', function(){
  if(star3.classList.contains('far')){
    star3.classList.remove('far')
    star3.classList.add('fas')
    star2.classList.remove('far')
    star2.classList.add('fas')
    star1.classList.remove('far')
    star1.classList.add('fas')
  }
  if(star4.classList.contains('fas')){
    star4.classList.remove('fas')
    star4.classList.add('far')
  }
  if(star5.classList.contains('fas')){
    star5.classList.remove('fas')
    star5.classList.add('far')
  }
})

star4.addEventListener('click', function(){
  if(star4.classList.contains('far')){
    star4.classList.remove('far')
    star4.classList.add('fas')
    star3.classList.remove('far')
    star3.classList.add('fas')
    star2.classList.remove('far')
    star2.classList.add('fas')
    star1.classList.remove('far')
    star1.classList.add('fas')
  }
  if(star5.classList.contains('fas')){
    star5.classList.remove('fas')
    star5.classList.add('far')
  }
})

star5.addEventListener('click', function(){
  if(star5.classList.contains('far')){
    star5.classList.remove('far')
    star5.classList.add('fas')
    star4.classList.remove('far')
    star4.classList.add('fas')
    star3.classList.remove('far')
    star3.classList.add('fas')
    star2.classList.remove('far')
    star2.classList.add('fas')
    star1.classList.remove('far')
    star1.classList.add('fas')
  }else{
    star5.classList.remove('fas')
    star5.classList.add('far')
  }
})

//making the submit button push the input from the user to the html content

var submitBtn = document.querySelector('.submitbtn')
var firstNameInp = document.querySelector('.firstname');
var lastNameInp = document.querySelector('.lastname');
var reviewInp = document.querySelector('.reviewinp');
var review = document.querySelector('.review');
var lastName = document.querySelector('.rlname');
var firstName = document.querySelector('.rfname');
var error = document.querySelector('.errorcontainer')

//check for no spaces

function hasNoSpaces(string){
  return string.indexOf(' ') === -1;
}

function displayNone(){
  error.style.opacity = 0;
}

function displayThanks(){
  thankYou.style.visibility = "visible";
  thankYou.style.opacity = 1;
}


//submit button event

var rstar1 = document.querySelector('.rstar1');
var rstar2 = document.querySelector('.rstar2');
var rstar3 = document.querySelector('.rstar3');
var rstar4 = document.querySelector('.rstar4');
var rstar5 = document.querySelector('.rstar5');

var thankYou = document.querySelector('.thank-you-container');

var names = document.querySelector('.names');
var input = document.querySelector('.input');

submitBtn.addEventListener('click', function(){
  if(hasNoSpaces(reviewInp.value) == true){
    error.style.opacity = 1;
    setTimeout(displayNone, 5000);
  }else{
    error.style.display = "none";
    review.innerHTML = '"' + reviewInp.value + '"';
    lastName.innerHTML = lastNameInp.value;
    firstName.innerHTML = firstNameInp.value;
    names.style.display = "none";
    input.style.display = "none";
    thankYou.style.display = "flex";
    setTimeout(displayThanks, 25);
    if(star1.classList.contains('fas')){
      rstar1.classList.remove('far');
      rstar1.classList.add('fas');
    }
    if(star1.classList.contains('fas') && star2.classList.contains('fas')){
      rstar1.classList.remove('far');
      rstar1.classList.add('fas');
      rstar2.classList.remove('far');
      rstar2.classList.add('fas');
    }
    if(star1.classList.contains('fas') && star2.classList.contains('fas') && star3.classList.contains('fas')){
      rstar1.classList.remove('far');
      rstar1.classList.add('fas');
      rstar2.classList.remove('far');
      rstar2.classList.add('fas');
      rstar3.classList.remove('far');
      rstar3.classList.add('fas');
    }
    if(star1.classList.contains('fas') && star2.classList.contains('fas') && star3.classList.contains('fas') && star4.classList.contains('fas')){
      rstar1.classList.remove('far');
      rstar1.classList.add('fas');
      rstar2.classList.remove('far');
      rstar2.classList.add('fas');
      rstar3.classList.remove('far');
      rstar3.classList.add('fas');
      rstar4.classList.remove('far');
      rstar4.classList.add('fas');
    }
    if(star1.classList.contains('fas') && star2.classList.contains('fas') && star3.classList.contains('fas') && star4.classList.contains('fas') && star5.classList.contains('fas')){
      rstar1.classList.remove('far');
      rstar1.classList.add('fas');
      rstar2.classList.remove('far');
      rstar2.classList.add('fas');
      rstar3.classList.remove('far');
      rstar3.classList.add('fas');
      rstar4.classList.remove('far');
      rstar4.classList.add('fas');
      rstar5.classList.remove('far');
      rstar5.classList.add('fas');
    }
  }
})
