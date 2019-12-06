
//const reveal = document.querySelector('#reveal')
//const revealQuestion = document.querySelector('#question-0')
//const revealAnswer = document.querySelector('#answer-0')
//
//const amount = document.querySelector('#value-0')


var questionsWine = [
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

var questionsBeer = [
	{ 
		question:"The four main ingredients in beer are",
		answer: "Water, hops, yeast and malts"
	},
	{
		question: "The liquidy leftovers from steeping and then straining crushed brew grains in hot water",
		answer: "Wort"
	},
	{
		question: "Before experiments of this 19th century scientist, fermentation was basically a mystery",
		answer: "Pasteur"
	},
	{
		question: "The scale that measures a beer’s bitterness",
		answer: "IBU"
	},
	{
		question: "Nugget",
		answer: "A type of hop"
	}
]

var questionsSpirits = [
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

var questionsFood = [
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

var questionsPrice = [
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

function renderElementsWine() {
	for (let i = 0; i < pottenReveal.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal[i]
		const revealQuestion = reveal.querySelector(".question")
		const revealAnswer = reveal.querySelector(".answer")
		const question = questionsWine[i]

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
}

function renderElementsBeer() {
	for (let i = 0; i < pottenReveal.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal[i]
		const revealQuestion = reveal.querySelector(".question")
		const revealAnswer = reveal.querySelector(".answer")
		const question = questionsBeer[i]

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
}

function renderElementsSpirit() {
	for (let i = 0; i < pottenReveal.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal[i]
		const revealQuestion = reveal.querySelector(".question")
		const revealAnswer = reveal.querySelector(".answer")
		const question = questionsSpirits[i]

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
}

function renderElementsFood() {
	for (let i = 0; i < pottenReveal.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal[i]
		const revealQuestion = reveal.querySelector(".question")
		const revealAnswer = reveal.querySelector(".answer")
		const question = questionsFood[i]

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
}

function renderElementsPrice() {
	for (let i = 0; i < pottenReveal.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal[i]
		const revealQuestion = reveal.querySelector(".question")
		const revealAnswer = reveal.querySelector(".answer")
		const question = questionsPrice[i]

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
}



renderElementsWine()
renderElementsBeer()
renderElementsSpirit()
renderElementsFood()
renderElementsPrice()