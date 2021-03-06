var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById('myImg-01');
var modalImg1 = document.getElementById("img01");
var img02 = document.getElementById('myImg-02');
var modalImg2 = document.getElementById("img02");
var img03 = document.getElementById('myImg-03');
var modalImg3 = document.getElementById("img03");
var captionText = document.getElementById("caption");
img01.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
    captionText.innerHTML = this.alt;
}
img02.onclick = function(){
    modal.style.display = "block";
    modalImg2.src = this.src;
    captionText.innerHTML = this.alt;
}
img03.onclick = function(){
    modal.style.display = "block";
    modalImg3.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}