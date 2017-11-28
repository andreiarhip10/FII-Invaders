
function showElement(button,id1,id2) {
	var div1 = document.getElementById(id1);
	var div2 = document.getElementById(id2);
	var opacity1=getComputedStyle(div1).getPropertyValue("opacity");
	var opacity2=getComputedStyle(div2).getPropertyValue("opacity");
	var delayInMilliseconds = 1000; //1 second
		
	if(opacity1 === '0' &&opacity2==='1'){  
		div2.style.opacity='0';      
		setTimeout(function() {
			div2.style.display='none';
			div1.style.display=''; 
			div1.style.opacity='0';
			setTimeout(function() {
			div1.style.opacity='1';
			}, 1);
			
			
		}, 1000);
	   return;        
	}

	else if (opacity1==='0'&&opacity2==='0'){
			div2.style.display='none';
			div1.style.display='';
			div1.style.opacity='1';
			return;
	}

	else 
	{
		div1.style.opacity='0';
		setTimeout(function() {
		div1.style.display='none';
		div2.style.display='';
		}, delayInMilliseconds);           
	}
}


