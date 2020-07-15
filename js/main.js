const advert = document.querySelector(".media");
const reversAdv = setInterval(()=>{
	advert.style.display = "block";
	window.onclick = function() {
		if (event.target == advert)
		advert.style.display ="none";
	}
	//advert.style.color="red";
},15000);

//------------------------------------------------
