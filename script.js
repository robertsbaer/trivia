
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
		question:"popular in France in the 19th century, was legendary for its potent strength and characteristic green color.",
		answer: "Absinthe"
	},
	{
		question: "Beefeater and Bombay Sapphire are two brands of this spirit",
		answer: "Gin"
	},
	{
		question: "If a spirit was 100 proof, what would its alcoholic percentage be?",
		answer: "50%"
	},
	{
		question: "American spirit made from aging corn whiskey in charred casks",
		answer: "Bourbon"
	},
	{
		question: "Cactus-like plant used for Tequila ",
		answer: "Agave"
	}
]

var questionsFood = [
	{ 
		question:"These are two systems to pair wine and food",
		answer: "Congruent & Complementary"
	},
	{
		question: "This Varietal pairs the best with duck breast",
		answer: "Pinot Noir"
	},
	{
		question: "This saying is describing which wine type 'If it swims – Fino. If it flies – Amontillado. If it runs – Oloroso.'",
		answer: "Sherry"
	},
	{
		question: "This dessert wine is the highest rated in its category",
		answer: "Chateau d'Yquem"
	},
	{
		question: "This pairs well with oysters",
		answer: "Chablis"
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
const categories1 = document.querySelectorAll(".gameboard1 .category")
const categories2 = document.querySelectorAll(".gameboard2 .category")
const categories3 = document.querySelectorAll(".gameboard3 .category")
const categories4 = document.querySelectorAll(".gameboard4 .category")

const pottenCategory = categories[0]
const pottenCategory1 = categories1[0]
const pottenCategory2 = categories2[0]
const pottenCategory3 = categories3[0]
const pottenCategory4 = categories4[0]

const pottenReveal = pottenCategory.querySelectorAll(".reveal")
const pottenReveal1 = pottenCategory1.querySelectorAll(".reveal")
const pottenReveal2 = pottenCategory2.querySelectorAll(".reveal")
const pottenReveal3 = pottenCategory3.querySelectorAll(".reveal")
const pottenReveal4 = pottenCategory4.querySelectorAll(".reveal")

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
	for (let i = 0; i < pottenReveal1.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal1[i]
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
	for (let i = 0; i < pottenReveal2.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal2[i]
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
	for (let i = 0; i < pottenReveal3.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal3[i]
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
	for (let i = 0; i < pottenReveal4.length; i++) {
		//	for (let i = 0; i < 1; i++) {
		const reveal = pottenReveal4[i]
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

function toggle_visibility(e) {
       var e = document.querySelector(".gameboard .value");
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'none';
    }



renderElementsWine()
renderElementsBeer()
renderElementsSpirit()
renderElementsFood()
renderElementsPrice()