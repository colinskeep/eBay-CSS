$(document).ready(function(){
	var source = $('#urlp').text() + "/make-an-offer";
	var name = $('#ProductDetails h1').text();
	var url = window.location.href;
	$('.modal-header h3').text("Make an Offer for "+name);
	//$('.modal-body').load(source);
	console.log('555');
	//$('.modal-body').load(source,function(){$('#contact_question').val("I would like to make an offer for "+name+"\n("+url+")");});
	document.querySelector("#contact_question").value = 'Offer: \nFor: '+name
})
