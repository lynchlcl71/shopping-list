$(document).ready(function() {
	$('#itemForm').submit(function(e){
		e.preventDefault();
		addItem();
	});

	$('.list-scope').on('click','.delete',function(){
		$(this).parent().remove();
	});

	$('.list-scope').on('click','.check',function(){
		$(this).parent().toggleClass('checked');
	});
});

function addItem(){
	var item = $('#itemTextBox').val();
	$('#itemTextBox').val('');

	var el = '<p>'+ item +'<span class="check">&#x2714</span><span class="delete">&#x2718</span></p>';

	$('.list-scope').prepend(el);
}