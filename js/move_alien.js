function move(id1,id2) {
  var elem = document.getElementById(id1);  
  var width=getComputedStyle(elem).getPropertyValue("width");
  var margin=getComputedStyle(elem).getPropertyValue("margin-right");
  var width = window.innerWidth;
  var pos = 0;
  var id = setInterval(frame, 0.1);
  
  console.log(pos);
  function frame() {
    if (pos == width-400) {
		
		elem.style.transition='1s';
		elem.style.opacity='0';
		pos=0;
		setTimeout(function() {
			elem.style.transition='1s';
			elem.style.opacity='1';
			clearInterval(id);
			}, 100);
	 	  
     
    }
	 else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
  
  
}
