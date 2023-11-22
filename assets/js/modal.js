// // Välj sektion för modal //
var modalProj = document.getElementById('pictureModal');
  
// Element som ska vara klickbart //
var btnElement = document.getElementsByClassName('meet-image');


// Tilldelar varje meet-image eventlistener//
for (var i = 0; i < btnElement.length; i++) {
    btnElement[i].addEventListener('click', function() {
      document.getElementById('pictureModal').style.display = 'block';
      document.getElementById('iframePicture').src = 'picture.html'; 
    });
}

// X för att kunna stänga //
var span = document.getElementsByClassName('close')[0];

// Öppna modal //
btnElement.onclick = function() {
  modalProj.style.display = 'block';
}

// Stäng med X //
span.onclick = function() {
  modalProj.style.display = 'none';
}


// // Klick-event //
window.onclick = function(event) {
  if (event.target === modalProj) {
    modalProj.style.display = 'none';
  } 
}

// resna iframe vid avslut //
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('pictureModal').style.display = 'none';
  document.getElementById('iframePicture').src = '';
});

