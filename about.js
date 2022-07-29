console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.getElementById("rubberDucky")

duck.addEventListener("mouseover", function(evt) {
	alert("You are a nice person.")
})