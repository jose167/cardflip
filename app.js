document.addEventListener("DOMContentLoaded", function(event) {
    var card = document.querySelector('.card-inner');
    var buttonFront =  document.getElementById("tsCs-btn");
    var buttonBack =  document.querySelector(".back-btn");
    var frontFace = document.getElementById("card-container-front");
    var isRotated = false 
    var deg = -180;

    buttonFront.addEventListener( 'click', function() {
     
        deg = isRotated ? (deg - 180) : deg;
        card.style.transform = 'rotateY('+deg+'deg)';
        frontFace.classList.add('hide');
        setTimeout(
            function Remove() {
                frontFace.classList.add("remove");
            },
            500 );
            isRotated = true;
    });
    buttonBack.addEventListener( 'click', function() {
        deg = isRotated ? (deg - 180) : deg;
        card.style.transform = 'rotateY('+deg+'deg)';
        frontFace.classList.remove("remove");
        frontFace.classList.remove('hide');
    });
});