let cxx = (msg) => {  
	msg !== "" ?  
	document.getElementsByClassName("chat")[0].innerHTML += `
	<div class="Area"> 
	<div class="R">
	<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxU35znsBhAWQd5BouLIVtH1P4WNa0JZ_XXpyViHOIARbM2igbNgC6_kp5"/>
	<div class="tooltip">Mariam Massadeh - 23 Years<br/>Computer Engineer<br/>Jordan</div>
	</div>    
	<div class="text L textL">${msg}</div>    
	</div>
	` : "";
	document.getElementsByClassName('textbox')[0].value = "" ;
}
document.getElementsByClassName("form")[0].addEventListener("submit",(e)=>{
	e.preventDefault();
	cxx(document.getElementsByClassName('textbox')[0].value )
})

if("serviceWorker" in navigator){
	window.addEventListener("load", () => {
		navigator.serviceWorker	
		.register('serviceWorker.js')
		.then(reg => console.log("registered"))
		.catch(e => console.log(e))
	})
}