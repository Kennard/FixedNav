		$(document).ready(function(){

			var togglemenu = $('#togglemenu');	
		
			$('button').click(function() {
				togglemenu.slideToggle('fast');
			});

			$(window).resize(function(){
				var w = $(window).width();
				if( w > 769 && togglemenu.is(':hidden')) {
					togglemenu.removeAttr('style');
				}
			});
		});
