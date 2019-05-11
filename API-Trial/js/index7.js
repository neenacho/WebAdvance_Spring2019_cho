var mpPageCurrent = 'homepage';
var hashValue = window.location.hash;
$(document).ready(function() { 
	$(document).on("click",'.mp-link', function(event){
		mpPageCurrent = $(this).attr('mp-target');
		
		$('.page').removeClass('page-default');
		removeCurrentClass();
		$('#'+mpPageCurrent).addClass('page-default').addClass('page-current');
	});
});

(function($) {
	$.fn.mbInit = function () {
		if(hashValue=='') {
			$('#homepage').addClass('page-default').addClass('page-current');
		} else {
			$(hashValue).addClass('page-default').addClass('page-current');
		}
	}
})(jQuery);

function removeCurrentClass(){
  setTimeout(function(){
    $('.page:not(.page-default)').removeClass('page-current');
  },500);
};