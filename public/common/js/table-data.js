$(function(e) {
	//file export datatable
	var table = $('#example').DataTable({
		lengthChange: false,
		buttons: [ 'copy', 'excel', 'pdf', 'colvis' ],
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_ ',
		}
	});
	table.buttons().container()
	.appendTo( '#example_wrapper .col-md-6:eq(0)' );		
	
	$('#example1').DataTable({
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	$('#example2').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	});
	var table = $('#example-delete').DataTable({
		responsive: true,
		language: {
			searchPlaceholder: 'Search...',
			sSearch: '',
			lengthMenu: '_MENU_',
		}
	}); 
    $('#example-delete tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
	
});