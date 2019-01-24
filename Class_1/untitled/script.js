console.log("Hello");

var GreetingContainer;

GreetingContainer = "This is a new variable";

console.log(GreetingContainer);

//alert('Greetings: ' + GreetingContainer);

document.write('<p>' + GreetingContainer+ '</p>');



var attributes = ["Black", "Green", "Gray"];
var arrange = document.getElementsByClassName('msg');

for (var i = 0; i< attributes.length; i++) {
	for (var i = 0; i<arrange.length; i++) {
		arrange[i].innerHTML = attributes[i];
	}

}


// for(var i = 0; i <arrange.length; i++) {
// 	arrange[i].innerHTML = "Nina";
// }