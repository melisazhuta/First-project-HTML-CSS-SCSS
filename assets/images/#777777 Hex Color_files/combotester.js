$(document).ready(function() {
	set_up_pickers();	
});

function set_up_pickers() {

	// Loop through all of the fields with the class colorField and set up the spectrum color picker
	// After selection we redirect to the combo tester to set the fields.
	$('.colorField').each(function() {		
		$('#' + this.id).spectrum({
		    color: $('#' + this.id).val(),
			allowEmpty:false,
			showInput:true,
			preferredFormat: "hex",
			change: function(color) {
				redirect_to_combotester();
			}
		});
		
		
	});

	return true;		
}

function redirect_to_combotester() {
	
	// This function is called after the user Select a color on the combo tester page.
	// It builds a color string and redirects back to the combo tester to set the colors.
	var my_colors = '';
	var my_url = '';
	var href = window.location.host;

	$('.colorField').each(function() {		
		my_colors += this.id + '=' + $('#' + this.id).val().replace (/#/g, "") + '&';		
	});

	my_colors = my_colors.substring(0, my_colors.length - 1); /* chop off the trailing comma */
	
	my_url = 'https://' + href + '/combotester.html?' + my_colors + '&show_text=' + show_text;
	
	//alert('my_url:' + my_url);
	
	window.location.replace(my_url);
	
	return true;
	
}

function redirect_to_combomaker() {
	
	// This function is called when the user clicks on the get image button on the combo tester.
	var my_colors = '';
	var my_url = '';
	var href = window.location.host;
			
	$('.colorField').each(function() {		
		my_colors += $('#' + this.id).val().replace (/#/g, "") + ',';		
	});	
	my_colors = my_colors.substring(0, my_colors.length - 1); /* chop off the trailing comma */
	
	my_url = 'https://' + href + '/combomaker.html?' +
		'design=pencils&output_width=75&size_option=element' +
		'&colors=' + my_colors +
		'&background_color=FFFFFF&show_hex_flag=Y';
	
	window.location.replace(my_url);
	
	return true;
	
}