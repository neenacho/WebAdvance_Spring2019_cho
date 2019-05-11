
window.onerror = function() {
	console.log(arguments);
}

//AJAX , JS creates the object (XMLHttpRequest)

var delay = 400,
		input = document.querySelector('#ajax-example input'),
	result = document.querySelector('.result');
var ajax = new XMLHttpRequest(),
	lastKeyUp = 0,
		cb;
input.onkeyup = function(e) {
	lastKeyUp = e.timeStamp;
	if (e.timeStamp - lastKeyUp > delay) {
		doSearch()
	} else {
		cb = setTimeout(doSearch, delay)
	}
}


//XMLHttpRequest => Request for updating new data

function doSearch() {
	ajax.open("GET", "https://autocomplete.clearbit.com/v1/companies/suggest?query=:" + input.value.trim(), true);
		ajax.onload = function() {
			var sHTML = '';
			JSON.parse(ajax.responseText).map(function(i) {
				sHTML += '<li>';
				sHTML += '<h5>' + ((i.name) ? i.name : i.domain) +'</h5>';
				if (!i.logo) {
					i.logo = 'http://dummyimage.com/128x128?text=No%20Logo';
				};
				sHTML += '<img src="' + i.logo + '" />';
				sHTML+=' <a href="http://'+i.domain+'">'+i.domain+'</a>';
				sHTML += '</li>';
			});
			result.innerHTML = sHTML;
		};
		ajax.send();
}

doSearch();