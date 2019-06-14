$(document).ready(function(){
	var source = $('#urlp').text() + "/make-an-offer";
	var name = $('#ProductDetails h1').text();
	var url = window.location.href;
	$('.modal-header h3').text("Make an Offer for "+name);
	document.querySelector("#contact_question").value = 'Offer: \n\n\n\nFor: '+name
})
