
function validate_search() {	
	if ($('#search_hex').val() == 'Color Search' || $('#search_hex').val() == 'Search Color') {
		alert('Please enter a Color Search value first.');
		return false;
	}
	return true;
}


function show_error_message(error_message) {
	if (error_message != '') {
		$('#wrapper').html(error_message);
		$('#wrapper').slideDown('slow');			
	}
}

function hide_error_message() {
		$('#wrapper').slideUp('slow');
		$('#wrapper').html('');			
}

function delete_combo(cc_id, combination_name, username, redirect_location) {

	var r=confirm('Are you sure you want to delete ' + combination_name + '?');
	if (r==true) {
		
		var request = $.ajax({
		  url: "/combo-delete.html",
		  type: "POST",
		  data: {
				cc_id: cc_id
				},
		  dataType: "html"
		});

		request.done(function(msg) {
						
			var p = eval('(' + msg + ')');
			
			if (p['error_message'] == 'OK') {
				window.location = "/" + redirect_location;
				return true;						
			} else {
				alert('Error - ' + p['error_message']);
			};
		});
		
	}
	
	return false;
}

function refresh_combo_image (cc_id) {
	
	var the_name = '#refresher' + cc_id;
	$(the_name).attr('src', '/images/refresh_animated.gif');	

	var image_name = '#comboimage' + cc_id;
	var image_link = $(image_name).attr('src');	

	var request = $.ajax({
	  url: "/combo-refresher.html",
	  type: "POST",
	  data: {
			cc_id: cc_id
			},
	  dataType: "html"
	});

	request.done(function(msg) {
		var p = eval('(' + msg + ')')		
		if (p['error_message'] == 'OK') {
			$(image_name).attr('src', image_link);
			$(the_name).attr('src', '/images/refresh.png');	
			//window.location.reload();
			return false;						
		} else {
			alert('Error - ' + p['error_message']);
		};
	});
}

$(document).ready(function() {
	
	show_error_message(error_message);
	
});