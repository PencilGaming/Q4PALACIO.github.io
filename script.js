const toggle = getElementById.document('CoolerButton');
const body = document.querySelector('body')

toggle.addEventListener('click', function(){
	
	if(this.classList.toggle('CoolButton')){
		
		body.style.background = 'white';
		body.style.color = 'black';
		body.stlye.transition = '3s';
		
	}
	 else{
		 
		 body.style.background = 'black';
		 	body.stlye.transition = '3s';
			body.style.color = 'white';
	 }
	
	
	
})