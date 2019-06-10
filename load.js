$(document).ready(function(){
	var source = $('#urlp').text() + "/make-an-offer";
	console.log(source);
	var name = $('#ProductDetails h1').text();
	console.log(name);
	var url = window.location.href;
	$('.modal-header h3').text("Make an Offer for "+name);
    //$('.modal-body').load(source,
        //function(){
            //document.querySelector("#contact_question").value = `I would like to make an offer for "+name+"\n("+url+")`;
            //console.log(`I would like to make an offer for "+name+"\n("+url+")`)
        //});
})
