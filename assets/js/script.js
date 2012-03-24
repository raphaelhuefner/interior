// JavaScript Document

var pageNames = ["page1", "page2", "page3"];

var translateLeft = function() {
	for (i=0;i<pageName.length;i++) {
		var name = pageNames[i];
		var currentLeft = $("#" + name).position().left;
		$("#" + name).css({'transform' : 'translate('+ (currentLeft-960) + 'px,0px)',
							'-ms-transform' : 'translate('+ (currentLeft-960) + 'px,0px)', /* IE 9 */
							'-moz-transform' : 'translate('+ (currentLeft-960) + 'px,0px)', /* Firefox */
							'-webkit-transform' : 'translate('+ (currentLeft-960) + 'px,0px)', /* Safari and Chrome */
							'-o-transform' : 'translate('+ (currentLeft-960) + 'px,0px)' /* Opera */
							});
	}
	
}

var translateRight = function() {
	for (i=0;i<pageName.length;i++) {
		var name = pageNames[i];
		var currentLeft = $("#" + name).position().left;
		$("#" + name).css({'transform' : 'translate('+ (currentLeft+960) + 'px,0px)',
							'-ms-transform' : 'translate('+ (currentLeft+960) + 'px,0px)', /* IE 9 */
							'-moz-transform' : 'translate('+ (currentLeft+960) + 'px,0px)', /* Firefox */
							'-webkit-transform' : 'translate('+ (currentLeft+960) + 'px,0px)', /* Safari and Chrome */
							'-o-transform' : 'translate('+ (currentLeft+960) + 'px,0px)' /* Opera */
							});
	}
	
}

	

$('#page1 a').on("click", function () {
	translateLeft();
});


