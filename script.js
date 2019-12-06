
const reveal = document.querySelector('#reveal')
const revealQuestion = document.querySelector('#question-0')
const revealAnswer = document.querySelector('#answer-0')

const amount = document.querySelector('#value-0')


function myArray() {

	var arr1 = [];
	arr1 = [
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

	var portion = 1;

	for (i = 0; i < arr1.length / portion; i++) {
		for (j = 0; j < portion; j++) {
			document.getElementById('question-'+i).innerHTML +=
				arr1[i*portion+j].question;
			document.getElementById('answer-'+i).innerHTML +=
				arr1[i*portion+j].answer;

			reveal.addEventListener('click', function(evt){
				evt.preventDefault()
				revealQuestion.style.display = "block"
			});
		}
		revealQuestion.addEventListener('click', function(evt){
				evt.preventDefault()
				revealAnswer.style.display = "block"
			})
	}
}



















