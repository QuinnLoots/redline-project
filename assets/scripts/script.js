$(document).ready(function() {  

					//Enable swiping...
					$(".carousel-inner").swipe( {
						//Generic swipe handler for all directions
						swipeLeft:function(event, direction, distance, duration, fingerCount) {
							$(this).parent().carousel('prev'); 
						},
						swipeRight: function() {
							$(this).parent().carousel('next'); 
						},
						//Default is 75px, set to 0 for demo so any distance triggers swipe
						threshold:0
					});
				});