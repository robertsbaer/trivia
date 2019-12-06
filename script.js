
//const reveal = document.querySelector('#reveal')
//const revealQuestion = document.querySelector('#question-0')
//const revealAnswer = document.querySelector('#answer-0')
//
//const amount = document.querySelector('#value-0')


var questions = [
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
	]

const categories = document.querySelectorAll(".gameboard .category")
const pottenCategory = categories[0]

const pottenReveal = pottenCategory.querySelectorAll(".reveal")

function renderElements() {

//	var portion = 1;
	
	
	
	for (let i = 0; i < pottenReveal.length; i++) {
//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal[i]
		const revealQuestion = reveal.querySelector(".question")
		const revealAnswer = reveal.querySelector(".answer")
		const question = questions[i]
		
		console.log(reveal)
		
		revealQuestion.innerText = question.question
		revealAnswer.innerText = question.answer
		
		reveal.addEventListener("click", evt => {
			revealQuestion.style.display = "block"
		})
		
		revealQuestion.addEventListener("click", evt => {
			revealAnswer.style.display = "block"
		})
	}

//	for (i = 0; i < arr1.length / portion; i++) {
//		for (j = 0; j < portion; j++) {
//			document.getElementById('question-'+i).innerHTML +=
//				arr1[i*portion+j].question;
//			document.getElementById('answer-'+i).innerHTML +=
//				arr1[i*portion+j].answer;
//
//			reveal.addEventListener('click', function(evt){
//				evt.preventDefault()
//				revealQuestion.style.display = "block"
//			});
//		}
//		revealQuestion.addEventListener('click', function(evt){
//				evt.preventDefault()
//				revealAnswer.style.display = "block"
//			})
//	}

	
	
}



renderElements()