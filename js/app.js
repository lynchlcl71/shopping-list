$(document).ready(function() 
	$("#AddButton").click(addItem);
	$("#itemTextBox").keydown(function(enter) {
		if(enter.keycode == 13) {
			addItem();
		}
	});

	