var check=true;



document.querySelector(".tglr").addEventListener("click",function(){

	if(this.value=="OFF"){
	document.querySelector("i").setAttribute("class","fas fa-toggle-off fa-2x");
	document.querySelector("body").classList.add("dark-mode");
	$("#head").css("color","hsl(0, 0%, 100%)");
	$(".top, .bottom").css(
		{"background-color":"hsl(228, 28%, 20%)","box-shadow":"2px 2px 6px #353a52","color":"hsl(0, 0%, 100%)"});
	$(".dashboard").css("background-color", "hsl(232, 19%, 15%)");
	this.value="ON";
	}
	else{
		document.querySelector("i").setAttribute("class","fas fa-toggle-on fa-2x");
		document.querySelector("body").classList.remove("dark-mode");
		$(".top, .bottom").css(
			{"background-color":"hsl(227, 47%, 96%)","box-shadow":"2px 2px 6px #e6d9cf","color":"hsl(230, 17%, 14%)"});
		$(".dashboard").css("background-color", "hsl(225, 100%, 98%)");
		$("#head").css("color","hsl(230, 17%, 14%)");
		this.value="OFF"
	}


	
});


