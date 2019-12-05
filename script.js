

let round = [
	{ 
		question:"By French law, no drink may be sold as wine that is not exclusively made from these",
		answer: "grapes"
	},
	{
		question: "As far back as 1609, sacramental wine was made in what is now this state",
		answer: "California"
	},
	{
		question: "Before experiments of this 19th century scientist, fermentation was basically a mystery",
		answer: "Pasteur"
	},
	{
		question: "This term means that extra alcohol has been added, as to sherry, for example",
		answer: "Fortified"
	},
	{
		question: "In the U.S., wines using at least 51% of a certain grape are labeled this",
		answer: "Varietal"
	}
];


for(i = 0; i < round.length; i++) {
	const questions = document.querySelector("#thequestions")
	const answers = document.querySelector("#theanswers")
	const reveal = document.querySelector('#reveal')
	const revealQuestion = document.querySelector('.value')
	const bothQA = [].concat(questions, answers)
	console.log(round)
	
	bothQA.innerHTML = reveal
	
	questions.innerHTML =  round[i].question
	answers.innerHTML =  "What is" + ' ' + round[i].answer
	
	reveal.addEventListener('click', function(evt){
		revealQuestion.style.display = "none",
		evt.preventDefault()
	})
	
	reveal.addEventListener('click', function(evt){
		questions.style.display = "block",
		evt.preventDefault()
	})
	
	questions.addEventListener('click', function(evt){
		answers.style.display = "block"
		questions.style.display = "none"
		evt.preventDefault()
	})
}



















