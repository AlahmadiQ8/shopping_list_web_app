
var first_item_added = 1;

$(document).ready(function() {

	$('#item').on('keypress', function (event) {
		if (event.which == '13'){
			// add new item
			// alert('enter is hit');
			addItem($(this).val());
			$(this).val('');
		}
	});

	$('#plus_but').click(function() {
			// add new item
			// alert('enter is hit');
			addItem($('#item').val());
			$('#item').val('');
	});

	$('ul').on('click', 'li', function() {
		alert('clicked on item');
		// put middle line
	});

	$('ul').on('click', '.delete', function(e) {
		e.stopImmediatePropagation();
		// alert('clicked on DELETE');
		$(this).closest('li').remove();
		$(this).remove();
		if (!$('li').length){
			$('.items-list').hide();
			first_item_added = 1;
		}
	});

});

/* ======================
   add item
   ====================== */

function addItem(item){
	if (item){
		if (first_item_added){
			$('.items-list').show();
			first_item_added = 0;
		}
		$('.items-list').find('ul').append('<li>'+item+'<div href="#" class="delete">X</div></li>');
	}
}
