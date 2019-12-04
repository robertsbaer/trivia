//triva app

//create questions
//generate them with an API

//how many questions to answer

//how many correct answers
//how many wrong answers

//create game play


// Create API 

//const url = "http://jservice.io/api/category?id=233"

const url = "http://jservice.io/api/category?id=233";
fetch(url).then(response => {
	console.log(response)
	return response.json()
}) 
	.then(JSON => {
	document.querySelector('#thequestions0').innerHTML = JSON.clues[0].question;
	document.querySelector('#thequestions1').innerHTML = JSON.clues[1].question;
	document.querySelector('#thequestions2').innerHTML = JSON.clues[2].question;
	document.querySelector('#thequestions3').innerHTML = JSON.clues[3].question;
	document.querySelector('#thequestions4').innerHTML = JSON.clues[4].question;
	document.querySelector('#thequestions5').innerHTML = JSON.clues[5].question;
	document.querySelector('#thequestions6').innerHTML = JSON.clues[6].question;
	document.querySelector('#thequestions7').innerHTML = JSON.clues[7].question;
	document.querySelector('#thequestions8').innerHTML = JSON.clues[8].question;
	document.querySelector('#thequestions9').innerHTML = JSON.clues[9].question;
	
	document.querySelector('#theanswers0').innerHTML = JSON.clues[0].answer;
	document.querySelector('#theanswers1').innerHTML = JSON.clues[1].answer;
	document.querySelector('#theanswers2').innerHTML = JSON.clues[2].answer;
	document.querySelector('#theanswers3').innerHTML = JSON.clues[3].answer;
	document.querySelector('#theanswers4').innerHTML = JSON.clues[4].answer;
	document.querySelector('#theanswers5').innerHTML = JSON.clues[5].answer;
	document.querySelector('#theanswers6').innerHTML = JSON.clues[6].answer;
	document.querySelector('#theanswers7').innerHTML = JSON.clues[7].answer;
	document.querySelector('#theanswers8').innerHTML = JSON.clues[8].answer;
	document.querySelector('#theanswers9').innerHTML = JSON.clues[9].answer;
});