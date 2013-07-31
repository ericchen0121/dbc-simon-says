$(document).ready(function(){

	$('#get_color').on('click', function(e){
		e.preventDefault();

		// or $.getJSON();
		$.ajax({
			url: '/color', 
			type: 'POST',
			data: {_accept: "application/json"}, 
			datatype: 'json', 
			success: function(data) {
				$('#color_me').children().eq(data.cell).css('background', data.color);
			}
		});
	});
});